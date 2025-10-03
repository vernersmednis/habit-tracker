import type { Habit } from "@/types/habit";
import type { HabitWeekday } from "@/types/habitWeekday";
import type { Weekday } from "@/types/weekday";
import type { AxiosResponse } from "axios";

export interface HabitTrackerProps {
  habits: Habit[];
  weekdays: Weekday[];
  updateHabitWeekday: (habitId: string, weekdayId: string, isDone: boolean) => Promise<AxiosResponse<HabitWeekday[]>>
  habitWeekdays: { habit: Habit; weekday: Weekday; isDone: boolean }[];
  refetchHabitWeekdays: () => Promise<void>;
}
