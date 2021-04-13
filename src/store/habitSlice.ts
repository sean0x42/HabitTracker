import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Day } from "../day";
import { Icon } from "../icons";

export interface Habit {
  id: number;
  name: string;
  icon: Icon;
  days: Day[];
}

export interface HabitsState {
  byId: {
    [id: number]: Habit;
  };
}

export const initialState: HabitsState = {
  byId: {
    1: {
      id: 1,
      name: "Take out the trash",
      days: [
        Day.Monday,
        Day.Tuesday,
        Day.Wednesday,
        Day.Thursday,
        Day.Saturday,
        Day.Sunday,
      ],
      icon: Icon.Trash,
    },
  },
};

export const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    createHabit: (
      state: HabitsState,
      action: PayloadAction<Omit<Habit, "id">>
    ) => {
      const id = Date.now();
      state.byId[id] = {
        id,
        ...action.payload,
      };
    },

    updateHabit: (state: HabitsState, action: PayloadAction<Habit>) => {
      state.byId[action.payload.id] = action.payload;
    },

    deleteHabit: (state: HabitsState, action: PayloadAction<number>) => {
      delete state.byId[action.payload];
    },
  },
});

export const { createHabit, updateHabit, deleteHabit } = habitsSlice.actions;
export default habitsSlice.reducer;
