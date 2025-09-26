
import type { User } from '@/types/user.ts';
import type { Habit } from '@/types/habit.ts';

export interface HabitList {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
}
