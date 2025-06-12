"use client";
import { useEffect } from "react";
import { useTodoListStore } from "../store/todoListStore";
import TodoImageButton from "./buttons/imageButtons/Todo";
import DoneImageButton from "./buttons/imageButtons/Done";
import TodoItem from "./TodoItem";
import useTodos from "../hooks/useTodoList";
import Empty from "./Empty";

const TodoSection = () => {
  const { todoList: fetchedTodos } = useTodos();
  const { todoList, setTodoList } = useTodoListStore();

  useEffect(() => {
    if (fetchedTodos) setTodoList(fetchedTodos);
  }, [fetchedTodos, setTodoList]);

  const todoItems = todoList.filter((todo) => !todo.isCompleted);
  const doneItems = todoList.filter((todo) => todo.isCompleted);

  return (
    <div className="w-full flex flex-col content:flex-row content:gap-x-6 pb-[210px]">
      {/* Todo */}
      <div className="w-full">
        <TodoImageButton />
        {todoItems.length === 0 ? (
          <Empty type="todo" />
        ) : (
          todoItems.map((todo, index) => (
            <TodoItem
              key={todo.id}
              {...todo}
              className={index !== 0 ? "mt-4" : ""}
            />
          ))
        )}
      </div>
      {/* Done */}
      <div className="w-full">
        <DoneImageButton />
        {doneItems.length === 0 ? (
          <Empty type="done" />
        ) : (
          doneItems.map((todo, index) => (
            <TodoItem
              key={todo.id}
              {...todo}
              className={index !== 0 ? "mt-4" : ""}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TodoSection;
