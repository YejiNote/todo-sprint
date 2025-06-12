import { useTodoListStore } from "../store/todoListStore";
import CheckIcon from "./icons/CheckIcon";
import Link from "next/link";

interface TodoItemProps {
  id: number;
  name: string;
  isCompleted: boolean;
  className?: string;
}

const TodoItem = ({ id, name, isCompleted, className = "" }: TodoItemProps) => {
  const toggle = useTodoListStore((s) => s.toggleTodo);

  return (
    // 리스트 항목
    <Link href={`/items/${id}`} className={`block ${className}`}>
      {isCompleted ? (
        <div
          className={`bg-violet-100 rounded-[27px] border-2 border-slate-900 flex items-center px-4 py-3 ${className}`}
        >
          <button className="mr-4 cursor-pointer" onClick={() => toggle(id)}>
            <CheckIcon />
          </button>
          <p className=" text-slate-800 font-normal line-through">{name}</p>
        </div>
      ) : (
        <div
          className={`bg-white rounded-[27px] border-2 border-slate-900 flex items-center px-4 py-3 ${className}`}
        >
          <button
            onClick={() => toggle(id)}
            className="w-8 h-8 rounded-full bg-yellow-50 mr-4 border-2 border-slate-900 cursor-pointer"
          ></button>
          <p className="text-base text-slate-800 font-normal">{name}</p>
        </div>
      )}
    </Link>
  );
};

export default TodoItem;
