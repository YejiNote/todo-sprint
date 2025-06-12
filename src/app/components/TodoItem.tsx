import { useEffect } from "react";
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
  // 할 일 진행상태 변경 (진행중/진행완료)
  const toggle = useTodoListStore((s) => s.toggleTodo);

  const handleClickToggle = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => {
    e.stopPropagation();
    e.preventDefault();
    toggle(id);
  };

  return (
    // 리스트 항목
    <div className="w-full ">
      {isCompleted  ? (
        <Link href={`/items/${id}`} className={`block `}>
          <div
            className={`w-full bg-violet-100 rounded-[27px] border-2 border-slate-900 flex items-center px-4 py-3 ${className}`}
          >
            <button
              className="mr-4 cursor-pointer"
              onClick={(e) => handleClickToggle(e, id)}
            >
              <CheckIcon />
            </button>

            <p className=" text-slate-800 font-normal line-through">{name}</p>
          </div>
        </Link>
      ) : (
        <Link href={`/items/${id}`} className={`block `}>
          <div
            className={`w-full bg-white rounded-[27px] border-2 border-slate-900 flex items-center px-4 py-3 ${className}`}
          >
            <button
              onClick={(e) => handleClickToggle(e, id)}
              className="w-8 h-8 rounded-full bg-yellow-50 mr-4 border-2 border-slate-900 cursor-pointer"
            ></button>

            <p className="text-base text-slate-800 font-normal">{name}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default TodoItem;
