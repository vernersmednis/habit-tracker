import { api } from "@/api/api";
import type { HabitWeekday } from "@/types/habitWeekday";


export const updateHabitWeekday = (habitId: string, weekdayId: string, isDone: boolean) => {
  const response = api.put<HabitWeekday[]>(`/habit-weekday/${habitId}/${weekdayId}`, { "isDone": isDone });
  return response;
};

export const getAllHabitWeekdays = () => {
  const response = api.get<HabitWeekday[]>("/habit-weekday");
  return response;
};
