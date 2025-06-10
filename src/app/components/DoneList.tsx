
import CheckIcon from "./icons/CheckIcon";

const DoneList = () => {
  return (
    <div className="bg-violet-100 rounded-[27px] border-2 border-slate-900 flex items-center px-4 py-3">
      <button className="mr-4">
        <CheckIcon />
      </button>
      <p className="text-[16px] text-slate-800 font-normal line-through">비타민 챙겨먹기</p>
    </div>
  );
};

export default DoneList;
