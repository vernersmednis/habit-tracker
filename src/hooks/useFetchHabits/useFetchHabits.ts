import { getAllHabits } from "@/api/services/habits";
import type { Habit } from "@/types/habit";
import { useEffect, useState } from "react";

export const useFetchHabits = () => {
  const [data, setData] = useState<Habit[]>([]);

  const getAll = async () => {
    const data = await getAllHabits();

    return data;
  };

  useEffect(() => {
    getAll().then((res) => setData(res.data));
  }, []);

  return {
    data,
  };
};
