import { create } from "zustand";
import { TodoList } from "@/app/types/todoList";

type TodoState = {
  todoList: TodoList[];
  setTodoList: (items: TodoList[]) => void;
  toggleTodo: (id: number) => void;
};

export const useTodoListStore = create<TodoState>((set) => ({
  todoList: [],
  setTodoList: (items) => set({ todoList: items }),
  toggleTodo: (id) =>
    set((state) => ({
      todoList: state.todoList.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    })),
}));
