import { Day } from "./day";
import { Icon } from "./icons";

export interface Habit {
  id: number;
  name: string;
  icon: Icon;
  days: Day[];
}

interface CompletedHabit {
  habitId: number;
  completedAt: string;
}

export interface AppState {
  habits: {
    [id: number]: Habit;
  };
  history: {
    [date: string]: CompletedHabit[];
  };
}

export const initialState: AppState = {
  habits: {
    1: {
      id: 1,
      name: "Take out the trash",
      days: [Day.Thursday, Day.Saturday],
      icon: Icon.Trash,
    },
  },
  history: {},
};

export enum ActionKind {
  CreateHabit,
  UpdateHabit,
  CompleteHabit,
  UndoCompleteHabit,
}

interface BaseAction<T> {
  kind: ActionKind;
  payload: T;
}

interface CreateHabitAction extends BaseAction<Omit<Habit, "id">> {
  kind: ActionKind.CreateHabit;
}

interface UpdateHabitAction extends BaseAction<Habit> {
  kind: ActionKind.UpdateHabit;
}

interface CompleteHabitAction extends BaseAction<Habit["id"]> {
  kind: ActionKind.CompleteHabit;
}

interface UndoCompleteHabitAction extends BaseAction<Habit["id"]> {
  kind: ActionKind.UndoCompleteHabit;
}

export type Action =
  | CreateHabitAction
  | UpdateHabitAction
  | CompleteHabitAction
  | UndoCompleteHabitAction;

function leftPad(num: number, length: number): string {
  let str = num.toString();
  while (str.length < length) str = "0" + str;
  return str;
}

export function getDateKey(date: Date = new Date()): string {
  const year = leftPad(date.getFullYear(), 4);
  const month = leftPad(date.getMonth() + 1, 2);
  const day = leftPad(date.getDate(), 2);
  return `${year}-${month}-${day}`;
}

function rootReducer(state: AppState, action: Action): AppState {
  switch (action.kind) {
    case ActionKind.CreateHabit:
      const id = Date.now();

      return {
        ...state,
        habits: {
          ...state.habits,
          [id]: { id, ...action.payload },
        },
      };

    case ActionKind.UpdateHabit:
      return {
        ...state,
        habits: {
          ...state.habits,
          [action.payload.id]: action.payload,
        },
      };

    case ActionKind.CompleteHabit:
      const date = new Date();
      const dayKey = getDateKey(date);
      const completedAt = date.toISOString();
      const todaysHabits = state.history[dayKey] ?? [];

      const habit: CompletedHabit = {
        habitId: action.payload,
        completedAt,
      };

      return {
        ...state,
        history: {
          ...state.history,
          [dayKey]: [...todaysHabits, habit],
        },
      };

    case ActionKind.UndoCompleteHabit:
      const key = getDateKey();
      const habits = [...(state.history[key] ?? [])];

      const idx = habits.map((habit) => habit.habitId).indexOf(action.payload);
      if (idx === -1) return state;
      habits.splice(idx, 1);

      return {
        ...state,
        history: {
          ...state.history,
          [key]: habits,
        },
      };

    default:
      return state;
  }
}

function withDebug<S, A>(reducer: (state: S, action: A) => S) {
  return (state: S, action: A) => {
    console.group("Action dispatched");
    console.debug({ action });
    console.debug({ state });

    const computedState = reducer(state, action);
    console.debug({ computedState });

    console.groupEnd();
    return computedState;
  };
}

export const reducer = withDebug(rootReducer);
