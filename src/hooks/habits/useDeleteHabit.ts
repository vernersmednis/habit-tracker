import { deleteHabit as apiDeleteHabit } from "@/api/services/habits";

export const useDeleteHabit = () => {
  const deleteHabit = async (id: number) => {
    const data = await apiDeleteHabit(id);
    return data;
  };

  return {
    deleteHabit,
  };
};
