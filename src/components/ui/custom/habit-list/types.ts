import type { Habit } from "@/types/habit";
import type { AxiosResponse } from "axios";

export interface HabitListProps {
  habits: Habit[];
  refetchHabits: () => Promise<void>;
  createHabit: (name: string) => Promise<AxiosResponse<Habit[]>>
  deleteHabit: (id: string) => Promise<AxiosResponse<Habit[]>>
}