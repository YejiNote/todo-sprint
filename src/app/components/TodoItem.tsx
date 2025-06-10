const TodoItem = () => {
  return (
    <div className="bg-white rounded-[27px] border-2 border-slate-900 flex items-center px-4 py-3">
      <button className="w-8 h-8 rounded-full bg-yellow-50 mr-4 border-2 border-slate-900"></button>
      <p className="text-[16px] text-slate-800 font-normal">비타민 챙겨먹기</p>
    </div>
  );
};

export default TodoItem;
