import { api } from "@/api/api";
import type { Habit } from "@/types/habit";

export const getAllHabits = () => {
  const response = api.get<Habit[]>("/habits");
  return response;
};
