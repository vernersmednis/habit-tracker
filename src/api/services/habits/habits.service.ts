import { api } from "@/api/api";
import type { Habit } from "@/types/habit";

export const createHabit = (habit: String) => {
  const response = api.post<Habit[]>("/habits", { "habit": habit });
  return response;
};

export const getAllHabits = () => {
  const response = api.get<Habit[]>("/habits");
  return response;
};

export const deleteHabit = (id: string) => {
  const response = api.delete<Habit[]>(`/habits/${id}`);
  return response;
};