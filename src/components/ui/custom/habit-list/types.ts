import type { Habit } from "@/types/habit";

export interface HabitList {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
}
