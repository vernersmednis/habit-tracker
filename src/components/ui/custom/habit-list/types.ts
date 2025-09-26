import type { Habit } from "@/types/habit";
import type { Dispatch, SetStateAction } from "react";

export interface HabitListProps {
  habits: Habit[];
  setHabits: Dispatch<SetStateAction<Habit[]>>;
}
