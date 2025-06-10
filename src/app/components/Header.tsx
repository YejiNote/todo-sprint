import Image from "next/image";

// 헤더 컴포넌트
const Header = () => {
  return (
    <header className="bg-white w-full h-[60px] flex items-center border-b border-b-slate-200">
      <div className="w-full max-w-[1200px] px-4 md:px-6 flex items-center ">
        {/* 모바일일 때 이미지*/}
        <Image
          src={"/images/logo_small.png"}
          width={71}
          height={40}
          alt="logo_small"
          className="block md:hidden"
        />
        {/* 테블릿 & 데스크탑일 때 이미지 */}
        <Image
          src="/images/logo_large.png"
          width={151}
          height={40}
          alt="logo_large"
          className="hidden md:block"
        />
      </div>
    </header>
  );
};

export default Header;
