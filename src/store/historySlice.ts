import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CompletedHabit {
  habitId: number;
  completedAt: string;
}

export interface HistoryState {
  [date: string]: CompletedHabit[];
}

export const initialState: HistoryState = {};

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

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    completeHabit: (state: HistoryState, action: PayloadAction<number>) => {
      const date = new Date();
      const dayKey = getDateKey(date);
      const completedAt = date.toISOString();
      const todaysHabits = state[dayKey] ?? [];

      const habit: CompletedHabit = {
        habitId: action.payload,
        completedAt,
      };

      state[dayKey] = [...todaysHabits, habit];
    },

    undoCompleteHabit: (state: HistoryState, action: PayloadAction<number>) => {
      const key = getDateKey();
      const habits = [...(state[key] ?? [])];

      const idx = habits.map((habit) => habit.habitId).indexOf(action.payload);
      if (idx === -1) return;
      habits.splice(idx, 1);

      state[key] = habits;
    },
  },
});

export const { completeHabit, undoCompleteHabit } = historySlice.actions;
export default historySlice.reducer;
