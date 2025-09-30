import { updateHabitWeekday as apiUpdateHabitWeekday } from "@/api/services/habitweekdays/habitWeekdays.service";

export const useUpdateHabitWeekday = () => {
  const updateHabitWeekday = async (habitId: number, weekdayId: number, isDone: boolean) => {
    const updated = await apiUpdateHabitWeekday(habitId, weekdayId, isDone);
    return updated;
  };

  return {
    updateHabitWeekday,
  };
};
