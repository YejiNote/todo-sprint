import { TodoList } from "./todoList";

export interface TodoDetail extends TodoList {
  imageUrl: string | null;
  memo: string | null;
}
