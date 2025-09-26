import type { User } from "./user.ts";

export interface Habit {
  id?: number;
  user: User;
  habit: string;
}
