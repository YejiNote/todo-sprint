import Header from "@/app/components/Header";
import TodoItem from "@/app/components/TodoItem";
import DashBorder from "@/app/components/common/DashBorder";

export default function TodoDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="bg-white min-h-screen ">
      <Header />
      {/* <h1>할 일 상세: {params.id}</h1> */}
      <div className="max-w-[1200px] mx-auto mt-4 px-4 sm:px-6 lg:px-0">
        <div className="bg-white rounded-3xl border-2 border-slate-900 flex items-center justify-center px-4 py-3">
          <button className="w-8 h-8 rounded-full bg-yellow-50 mr-4 border-2 border-slate-900"></button>
          <p className="text-[20px] text-slate-900 font-bold underline">
            비타민 챙겨먹기
          </p>
        </div>
        <div className="relative w-full h-[311px] rounded-3xl bg-slate-50">
          <DashBorder />
        </div>
      </div>
    </div>
  );
}
