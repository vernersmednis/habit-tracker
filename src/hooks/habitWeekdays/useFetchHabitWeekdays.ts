import { getAllHabitWeekdays } from "@/api/services/habitweekdays/habitWeekdays.service";
import type { HabitWeekday } from "@/types/habitWeekday";
import { useEffect, useState } from "react";

export const useFetchHabitWeekdays = () => {
  const [habitWeekdays, setHabitWeekdays] = useState<HabitWeekday[]>([]);

  const getAll = async () => {
    const data = await getAllHabitWeekdays();
    return data;
  };

  const refetchHabitWeekdays = async () => {
    const res = await getAll();
    setHabitWeekdays(res.data);
  };

  useEffect(() => {
    getAll().then((res) => setHabitWeekdays(res.data));
  }, []);

  return {
    habitWeekdays,
    refetchHabitWeekdays,
  };
};
