"use client";
import Header from "@/app/components/Header";
import TodoItem from "@/app/components/TodoItem";
import CheckIcon from "@/app/components/icons/CheckIcon";
import PlusIcon from "@/app/components/icons/PlusIcon";
import Image from "next/image";
import { useRef } from "react";

export default function TodoDetailPage({ params }: { params: { id: string } }) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };
  return (
    <div className="bg-white min-h-screen ">
      <Header />
      {/* <h1>할 일 상세: {params.id}</h1> */}
      <div className="max-w-[1200px] mx-auto mt-4 px-4 sm:px-6 lg:px-0">
        {/* todo 상세 */}
        <div className="bg-white rounded-3xl border-2 border-slate-900 flex items-center justify-center px-4 py-3">
          <button className="w-8 h-8 rounded-full bg-yellow-50 mr-4 border-2 border-slate-900"></button>
          <p className="text-xl text-slate-900 font-[600] underline">
            비타민 챙겨 먹기
          </p>
        </div>
        {/* 이미지 업로드 */}
        <div className="relative w-full h-[311px] rounded-3xl mt-[17px] bg-slate-50 border-2 border-dashed border-slate-300">
          {/* ic */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Image src={"/images/ic.png"} width={64} height={64} alt="ic" />
          </div>
          {/* 업로드 버튼 */}
          <div className="absolute bottom-4 right-4 flex justify-center items-center bg-slate-200 w-16 h-16 rounded-full text-slate-500">
            <PlusIcon className="w-6 h-6" strokeWidth={3} />
          </div>
        </div>
        {/* 메모 */}
        <div className="w-full h-[311px] rounded-3xl bg-[url(/images/memo.png)] mt-[15px] flex flex-col items-center">
          <p className=" font-nanumSquareBold font-extrabold text-base text-amber-800 mt-6">
            Memo
          </p>
          <div className="align-middle w-full h-[229px] pl-4 mt-4 pr-3 flex flex-col justify-center items-center">
            {" "}
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              id="memo"
              className="w-full min-h-5 resize-none border-none outline-none bg-transparent focus:ring-0 focus:outline-none text-slate-800 overflow-auto leading-[100%] text-center pr-1"
              rows={1}
              placeholder="내용을 입력해주세요"
            ></textarea>
          </div>
        </div>
        {/* 버튼 */}
        <div className="flex justify-center mt-6 pb-[139px]">
          {/* 수정완료 버튼 */}
          <div className="relative w-[168px] h-14 mr-[7px]">
            {/* 입력창 아래 검은 그림자 표현 */}
            <div className="absolute inset-0  translate-y-1 translate-x-0.5  h-13 bg-slate-900 border-2 border-slate-900 rounded-3xl z-0"></div>{" "}
            <button className="relative w-full z-1 flex items-center justify-center h-13 bg-slate-200 border-2 border-slate-900 rounded-3xl font-bold text-slate-900">
              {/* 체크 아이콘 */}
              <CheckIcon
                size={24}
                bgColor="none"
                checkColor="#0F172A"
                strokeWidth={2}
              />
              <span className="ml-1">수정 완료</span>
            </button>
          </div>
          {/* 삭제하기 버튼 */}
          <div className="relative w-[168px] h-14 mr-[7px]">
            {/* 입력창 아래 검은 그림자 표현 */}
            <div className="absolute inset-0  translate-y-1 translate-x-0.5 h-13 bg-slate-900 border-2 border-slate-900 rounded-3xl z-0"></div>

            <button className="relative w-full z-1 flex items-center justify-center h-13 bg-rose-500 border-2 border-slate-900 rounded-3xl text-white font-bold">
              {/* x 아이콘 */}
              <PlusIcon className="rotate-45 text-white w-4 h-4" />
              <span className="ml-1">삭제하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
