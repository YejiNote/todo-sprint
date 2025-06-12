"use client";
import { useEffect, useState } from "react";
import { mutate } from "swr";
import PlusIcon from "./icons/PlusIcon";
import useAddTodo from "../hooks/useAddTodo";
import { useTodoListStore } from "../store/todoListStore";

const TodoInput = () => {
  const [text, setText] = useState("");
  const { addTodo, isMutating } = useAddTodo();
  const todoList = useTodoListStore((s) => s.todoList);

  // 등록되어있는 할일이 없을 경우 추가하기 버튼색 변경
  const isTodoEmpty = todoList.filter((t) => !t.isCompleted).length === 0;
  const isDoneEmpty = todoList.filter((t) => t.isCompleted).length === 0;
  const isAllEmpty = isTodoEmpty && isDoneEmpty;
  useEffect(() => {
    console.log("✅ useEffect 실행됨");
    // 혹시 여기서 handleAdd() 호출되어 있지 않은지 꼭 확인
  }, []);
  // 추가하기 버튼 클릭 시 할일 등록
  const handleAdd = async () => {
    console.log("📌 handleAdd 실행됨");
    console.count("📌 handleAdd 호출 수");
    if (!text.trim()) return;

    try {
      await addTodo({ name: text });
      setText(""); // 입력 초기화

      // 등록 후 목록 다시 가져오기
      const listUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/items?page=1&pageSize=10`;
      mutate(listUrl);
    } catch (err) {
      alert("등록 실패!");
    }
  };

  return (
    <div className="w-full flex  justify-center items-center gap-2 mt-4">
      {/* 인풋 컨테이너 */}
      <div
        className="relative flex 
        basis-[calc(280/336*100%)] tablet:basis-[calc(518/680*100%)] desktop:basis-[calc(1016/1184*100%)] flex-grow"
      >
        {/* 입력창 아래 검은 그림자 표현 */}
        <div className="absolute inset-0 translate-y-1 translate-x-0.5 h-13 bg-slate-900 border-2 border-slate-900 rounded-3xl z-0"></div>
        {/* 입력창 */}
        <div className="relative w-full z-1 flex items-center justify-between h-13 bg-slate-100 border-2 border-slate-900 rounded-3xl">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                e.stopPropagation();
                handleAdd();
              }
            }}
            type="text"
            placeholder="할 일을 입력해주세요"
            className="flex-1 bg-transparent text-slate-900 outline-none placeholder-slate-500 pl-6"
          />
        </div>
      </div>
      {/* 버튼 컨테이너 */}
      <div
        className="relative flex 
        basis-[calc(56/336*100%)] 
        tablet:basis-[calc(162/680*100%)] 
        desktop:basis-[calc(168/1184*100%)] flex-grow max-w-[168px] h-[52px] "
      >
        {/* 버튼 아래 검은 그림자 표현*/}
        <div className="absolute inset-0 translate-y-1 translate-x-0.5 bg-black rounded-3xl z-0"></div>

        {/* 버튼*/}
        <button
          type="button"
          onClick={handleAdd}
          disabled={isMutating || !text.trim()}
          className={`relative z-10 w-full h-full  border-2 border-black rounded-3xl flex items-center justify-center cursor-pointer ${
            isAllEmpty
              ? "bg-violet-600 text-white"
              : "bg-slate-200 text-slate-900 "
          }`}
        >
          <PlusIcon />
          <div
            className={`hidden tablet:block font-bold text-base ml-1 align-middle ${
              isAllEmpty ? "text-white" : "tex-slate-900"
            }`}
          >
            추가하기
          </div>
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
