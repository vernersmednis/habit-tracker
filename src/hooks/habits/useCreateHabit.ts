import { createHabit as apiCreateHabit } from "@/api/services/habits";

export const useCreateHabit = () => {
  const createHabit = async (habit: string) => {
    const data = await apiCreateHabit(habit);
    return data;
  };

  return {
    createHabit,
  };
};
