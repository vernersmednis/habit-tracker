import { getAllHabits } from "@/api/services/habits";

export const useFetchHabits = () => {
  const getAll = async () => {
    const data = await getAllHabits();

    return data;
  };

  return {
    getAll,
  };
};
