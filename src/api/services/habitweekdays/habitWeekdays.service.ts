import { api } from "@/api/api";
import type { HabitWeekday } from "@/types/habitWeekday";


export const updateHabitWeekday = (habitId: number, weekdayId: number, isDone: boolean) => {
  const response = api.put<HabitWeekday[]>(`/habitweekday/${habitId}/${weekdayId}`, { "isDone": isDone });
  return response;
};

export const getAllHabitWeekdays = () => {
  const response = api.get<HabitWeekday[]>("/habitweekday");
  return response;
};
