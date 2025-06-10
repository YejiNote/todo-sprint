import PlusIcon from "./icons/PlusIcon";

const TodoInput = () => {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="relative w-5/6">
        {/* 입력창 아래 검은 그림자 표현 */}
        <div className="absolute inset-0  translate-y-1 translate-x-0.5 h-13 bg-slate-900 border-2 border-slate-900 rounded-3xl z-0"></div>
        {/* 입력창 */}
        <div className="relative z-1 flex items-center justify-between h-13 bg-slate-100 border-2 border-slate-900 rounded-3xl">
          <input
            type="text"
            placeholder="할 일을 입력해주세요"
            className="flex-1 bg-transparent text-slate-900 outline-none placeholder-slate-500 pl-6"
          />
        </div>
      </div>
      {/* 버튼 컨테이너 */}
      <div className="relative w-1/6 h-13 ml-2">
        {/* 버튼 아래 검은 그림자 표현*/}
        <div className="absolute inset-0 translate-y-1 translate-x-0.5 bg-black rounded-3xl z-0"></div>
        {/* 버튼 */}
        <button className="relative z-10 w-full h-full bg-slate-200 border-2 border-black rounded-3xl flex items-center justify-center shadow-md text-slate-900">
          <PlusIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
