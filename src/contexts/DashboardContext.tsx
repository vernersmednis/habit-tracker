
import { type ReactNode, createContext, useMemo } from 'react';
import { useFetchWeekdays } from '@/hooks/weekdays/fetchWeekdays';
import { useUpdateHabitWeekday } from '@/hooks/habitWeekdays/useUpdateHabitWeekday';
import { useFetchHabitWeekdays } from '@/hooks/habitWeekdays/useFetchHabitWeekdays';
import { useFetchHabits } from '@/hooks/habits/useFetchHabits';
import { useCreateHabit } from '@/hooks/habits/useCreateHabit';
import { useDeleteHabit } from '@/hooks/habits/useDeleteHabit';
import type { Habit } from '@/types/habit';
import type { Weekday } from '@/types/weekday';
import type { HabitWeekday } from '@/types/habitWeekday';
import type { AxiosResponse } from 'axios';

export type DashboardContextType = {
  weekdays: Weekday[];
  updateHabitWeekday: (habitId: string, weekdayId: string, isDone: boolean) => Promise<AxiosResponse<HabitWeekday[]>>;
  habitWeekdays: { habit: Habit; weekday: Weekday; isDone: boolean }[];
  refetchHabitWeekdays: () => Promise<void>;
  habits: Habit[];
  refetchHabits: () => Promise<void>;
  createHabit: (habit: string) => Promise<AxiosResponse<Habit[]>>;
  deleteHabit: (habitId: string) => Promise<AxiosResponse<Habit[]>>;
};

export const DashboardContext = createContext<DashboardContextType>({} as DashboardContextType);

interface DashboardProviderProps {
  children: ReactNode;
}

export function DashboardProvider({ children }: DashboardProviderProps) {
  const { weekdays } = useFetchWeekdays();
  const { updateHabitWeekday } = useUpdateHabitWeekday();
  const { habitWeekdays, refetchHabitWeekdays } = useFetchHabitWeekdays();
  const { habits, refetchHabits } = useFetchHabits();
  const { createHabit } = useCreateHabit();
  const { deleteHabit } = useDeleteHabit();

  const value = useMemo(() => ({
    weekdays, updateHabitWeekday, habitWeekdays, refetchHabitWeekdays,
    habits, refetchHabits, createHabit, deleteHabit
  }), [weekdays, updateHabitWeekday, habitWeekdays, refetchHabitWeekdays,
      habits, refetchHabits, createHabit, deleteHabit]);

  return (
    <DashboardContext.Provider
      value={value}
    >
      {children}
    </DashboardContext.Provider>
  );
}
