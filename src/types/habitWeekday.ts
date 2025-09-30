import type { Habit } from "./habit.ts";
import type { Weekday } from "./weekday.ts";

export interface HabitWeekday {
    weekday: Weekday;
    habit: Habit;
    isDone: boolean;
}

