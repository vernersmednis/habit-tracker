import { getAllHabits } from "@/api/services/habits";
import type { Habit } from "@/types/habit";
import { useEffect, useState } from "react";

export const useFetchHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  const getAll = async () => {
    const data = await getAllHabits();
    return data;
  };

  const refetchHabits = async () => {
    const res = await getAll();
    setHabits(res.data);
  };

  useEffect(() => {
    getAll().then((res) => setHabits(res.data));
  }, []);

  return {
    habits,
    refetchHabits,
  };
};
