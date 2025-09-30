import { getAllWeekdays } from "@/api/services/weekdays";
import type { Weekday } from "@/types/weekday";
import { useEffect, useState } from "react";

export const useFetchWeekdays = () => {
  const [weekdays, setWeekdays] = useState<Weekday[]>([]);

  const getAll = async () => {
    const data = await getAllWeekdays();
    return data;
  };

  const refetchWeekdays = async () => {
    const res = await getAll();
    setWeekdays(res.data);
  };

  useEffect(() => {
    getAll().then((res) => setWeekdays(res.data));
  }, []);

  return {
    weekdays,
    refetchWeekdays,
  };
};
