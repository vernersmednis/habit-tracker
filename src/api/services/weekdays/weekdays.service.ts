import { api } from "@/api/api";
import type { Weekday } from "@/types/weekday";

export const getAllWeekdays = () => {
  const response = api.get<Weekday[]>("/weekdays");
  return response;
};
