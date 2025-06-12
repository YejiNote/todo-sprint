"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface EmptyProps {
  type: "todo" | "done";
}
const Empty = ({ type }: EmptyProps) => {
  const [isLarge, setIsLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 744);
    };

    handleResize(); // 최초 실행
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 화면 사이즈에 따른 이미지 경로 구성
  const imageSrc = `/images/empty/empty_${type}_${
    isLarge ? "large" : "small"
  }.png`;

  // 타입에 따른 텍스트 구성
  const message =
    type === "done"
      ? ["아직 다 한 일이 없어요.", "해야 할 일을 체크해보세요!"]
      : ["할 일이 없어요.", "TODO를 새롭게 추가해주세요!"];

  return (
    <div className="flex flex-col  items-center text-center pb-[192px] tablet:pb-[209px]">
      <Image
        src={imageSrc}
        width={isLarge ? 240 : 120}
        height={isLarge ? 240 : 120}
        alt={`${type} empty`}
      />
      <div
        className={`text-base font-bold text-slate-400 leading-tight  ${
          isLarge ? "mt-6" : "mt-4"
        }`}
      >
        <p>{message[0]}</p>
        <p>{message[1]}</p>
      </div>
    </div>
  );
};

export default Empty;
