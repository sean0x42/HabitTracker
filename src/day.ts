export function getDayToday(): Day {
  return numberToDay[(new Date().getDay() % 7) as DayNumbers];
}

export enum Day {
  Sunday = "sun",
  Monday = "mon",
  Tuesday = "tue",
  Wednesday = "wed",
  Thursday = "thu",
  Friday = "fri",
  Saturday = "sat",
}

type DayNumbers = 0 | 1 | 2 | 3 | 4 | 5 | 6;
const numberToDay: Record<DayNumbers, Day> = {
  0: Day.Sunday,
  1: Day.Monday,
  2: Day.Tuesday,
  3: Day.Wednesday,
  4: Day.Thursday,
  5: Day.Friday,
  6: Day.Saturday,
};
