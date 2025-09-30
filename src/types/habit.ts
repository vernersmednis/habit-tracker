import type { User } from "./user.ts";

export interface Habit {
  id: string;
  user: User;
  habit: string;
}
