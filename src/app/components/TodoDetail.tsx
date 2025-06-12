"use client";

import { useEffect, useRef, useState } from "react";

import CheckIcon from "./icons/CheckIcon";
import PlusIcon from "./icons/PlusIcon";
import Image from "next/image";
import useTodoDetail from "../hooks/useTodoDetail";
import Header from "./Header";
import { TodoDetail } from "../types/todoDetail";
import { useRouter } from "next/navigation";
import { patchFetcher } from "../lib/fetchers/patchFecher";
import { directPostFetcher } from "../lib/fetchers/directPostFecher";
import useDeleteTodo from "../hooks/useDeleteTodo";
import { useTodoListStore } from "../store/todoListStore";

const TodoDetail = ({ itemId }: { itemId: number }) => {
  const { todo, isLoading, isError } = useTodoDetail(Number(itemId));
  const { deleteTodo, isMutating } = useDeleteTodo(itemId);
  const { toggleTodo } = useTodoListStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const router = useRouter();
  const [name, setName] = useState<string>("");
  // 초기 데이터
  const [initialTodo, setInitialTodo] = useState<TodoDetail | null>(null);
  // 진행중 or 완료
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  //이미지 url
  const [imageUrl, setImageUrl] = useState<string>("");
  // 메모 내용
  const [memo, setMemo] = useState<string>("");

  // 서버통신해서 받은 todo 데이터 저장
  useEffect(() => {
    if (todo) {
      setName(todo.name);
      setMemo(todo.memo || "");
      setImageUrl(todo.imageUrl || "");
      setIsCompleted(todo.isCompleted);
      setInitialTodo(todo);
    }
  }, [todo]);

  const todoList = useTodoListStore((s) => s.todoList);
  const currentTodo = todoList.find((t) => Number(t.id) === Number(itemId));
  const sourceTodo = currentTodo || todo;
  useEffect(() => {
    if (sourceTodo) {
      setIsCompleted(sourceTodo.isCompleted);
    }
  }, [sourceTodo]);

  // zustand에서 최신 토글 상태 반영
  useEffect(() => {
    if (todoList.length === 0) return; // 아직 로딩 중
    if (currentTodo) {
      setIsCompleted(currentTodo.isCompleted);
    }
  }, [currentTodo, todoList]);

  // 할 일 진행상황 변경 ---
  const handleisCompleted = () => {
    setIsCompleted((prev) => !prev);
  };
  // 이미지 업로드 ---
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 이름 조건 확인 (영어)
    const isEnglishName = /^[A-Za-z0-9._-]+$/.test(file.name);
    if (!isEnglishName) {
      alert("파일 이름은 영어로만 이루어져야 합니다");
      setImageFile(null);
      return;
    }

    // 파일 크기 조건 확인 (5MB 이하)
    const isValidSize = file.size <= 5 * 1024 * 1024;
    if (!isValidSize) {
      alert("파일 크기는 5MB 이하여야 합니다.");
      setImageFile(null);
      return;
    }
    setImageFile(file);
    try {
      // 이미지 업로드 서버 통신

      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/images/upload`;
      const formData = new FormData();
      formData.append("image", file);

      const data = await directPostFetcher(url, formData);

      setImageFile(file);
      setImageUrl(data.url);
      setLoading(false);
    
    } catch (err) {
      console.log("에러 발생 : ", err);
    }
  };

  // 메모
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMemo(e.target.value);
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };
  // 수정 완료하기 ---
  const handleSubmit = async () => {
    const payload = {
      name,
      memo,
      imageUrl,
      isCompleted,
    };

    try {
      const url = `${process.env.NEXT_PUBLIC_API_BASE_URL}/items/${itemId}`;
      const data = await patchFetcher(url, payload);
      
      toggleTodo(itemId);
      router.push("/");
    } catch (e) {
      console.log("수정 실패 :", e);
    }
  };

  if (isError) return <p>에러</p>;
  if (!todo) return <p>로딩중</p>;


  //  수정 완료 버튼 활성화 시 색 변경
  const normalize = (v: string | undefined | null) => v?.trim() || "";
  const activeButton =
    normalize(memo) !== normalize(initialTodo?.memo) ||
    normalize(imageUrl) !== normalize(initialTodo?.imageUrl) ||
    isCompleted !== initialTodo?.isCompleted;

  // 삭제 하기 --
  const handleDelete = async () => {
    try {
      const res = await deleteTodo();
   
      router.push("/");
    } catch (e) {
      console.error("삭제 실패:", e);
    }
  };
  return (
    <div className="bg-white content:bg-gray-50 min-h-screen ">
      <Header />
      <div className="max-w-[1200px] content:bg-white mx-auto mt-4 content:mt-0 px-4 content:px-[102px] tablet:pt-6 sm:px-6 lg:px-0">
        {/* todo toggle + name*/}
        <div className="bg-white rounded-3xl border-2 border-slate-900 flex items-center justify-center ">
          {isCompleted || initialTodo?.isCompleted || todo.isCompleted ? (
            <div
              className={`bg-violet-100 w-full rounded-3xl flex items-center justify-center py-4`}
            >
              <button
                className="mr-4 cursor-pointer"
                onClick={handleisCompleted}
              >
                <CheckIcon />
              </button>
              <p className=" text-xl text-slate-900 font-[600] line-through">
                {todo.name}
              </p>
            </div>
          ) : (
            <div
              className={`bg-white w-full rounded-[27px] flex items-center justify-center py-4`}
            >
              <button
                onClick={handleisCompleted}
                className="w-8 h-8 rounded-full bg-yellow-50 mr-4 border-2 border-slate-900 cursor-pointer"
              ></button>
              <p className="text-xl text-slate-900 font-[600] underline">
                {todo.name}
              </p>
            </div>
          )}
        </div>
        <div className="content:flex content:gap-6">
          {/* 이미지 업로드 */}
          <div
            className={`relative w-full content:max-w-[384px] h-[311px] rounded-3xl mt-[17px] ${
              imageFile || todo.imageUrl
                ? "border-none relative"
                : "border-2 border-dashed border-slate-300 bg-slate-50 "
            }`}
          >
            {imageFile || (todo.imageUrl && imageUrl.trim() !== "") ? (
              // 업로드 이미지
              <Image
                src={imageFile ? URL.createObjectURL(imageFile) : imageUrl}
                alt="preview"
                fill
                className="rounded-3xl object-cover"
              />
            ) : (
              // ic 이미지
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={"/images/ic.png"} width={64} height={64} alt="ic" />
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              ref={fileInputRef}
            />
            {/* 업로드 버튼 */}
            {imageFile || todo.imageUrl ? (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute z-1 bottom-4 right-4 cursor-pointer"
              >
                <Image
                  src={"/images/button_imgEdit.png"}
                  width={64}
                  height={64}
                  alt="edit"
                />
              </button>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-4 right-4 flex justify-center items-center bg-slate-200 w-16 h-16 rounded-full text-slate-500 cursor-pointer"
              >
                <PlusIcon className="w-6 h-6" strokeWidth={3} />
              </button>
            )}
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
                value={memo}
                onInput={handleInput}
                onChange={(e) => setMemo(e.target.value)}
                id="memo"
                className="w-full min-h-5 resize-none border-none outline-none bg-transparent focus:ring-0 focus:outline-none text-slate-800 overflow-auto leading-[100%] text-center pr-1"
                rows={1}
                placeholder="내용을 입력해주세요"
              ></textarea>
            </div>
          </div>
        </div>
        {/* 버튼 */}
        <div className="flex justify-center content:justify-end mt-6 pb-[139px]">
          {/* 수정 완료 버튼 */}
          <div
            onClick={handleSubmit}
            className="relative w-[168px] h-14 mr-[7px]"
          >
            {/* 버튼 아래 검은 그림자 표현 */}
            <div className="absolute inset-0  translate-y-1 translate-x-0.5  h-13 bg-slate-900 border-2 border-slate-900 rounded-3xl z-0"></div>
            {/* 버튼 */}
            <button
              disabled={!activeButton}
              className={`relative w-full z-1 flex items-center justify-center h-13  border-2 border-slate-900 rounded-3xl font-bold text-slate-900 ${
                activeButton ? "bg-lime-300 cursor-pointer" : " bg-slate-200"
              }`}
            >
              {/* 체크 아이콘 */}
              <CheckIcon
                size={24}
                bgColor="none"
                checkColor="#0F172A"
                strokeWidth={2}
              />
              {loading ? (
                <span className="ml-1">사진 업로드 중</span>
              ) : (
                <span className="ml-1">수정 완료</span>
              )}
            </button>
          </div>
          {/* 삭제하기 버튼 */}
          <div
            onClick={handleDelete}
            className="relative w-[168px] h-14 mr-[7px] "
          >
            {/* 입력창 아래 검은 그림자 표현 */}
            <div className="absolute inset-0  translate-y-1 translate-x-0.5 h-13 bg-slate-900 border-2 border-slate-900 rounded-3xl z-0"></div>

            <button className="relative w-full z-1 flex items-center justify-center h-13 bg-rose-500 border-2 border-slate-900 rounded-3xl text-white font-bold cursor-pointer">
              {/* x 아이콘 */}
              <PlusIcon className="rotate-45 text-white w-4 h-4" />
              <span className="ml-1">삭제하기</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
