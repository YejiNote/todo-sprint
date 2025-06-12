import Image from "next/image";
import Link from "next/link";

// 헤더 컴포넌트
const Header = () => {
  return (
    <header className="bg-white w-full  h-[60px] flex items-center border-b border-b-slate-200 px-4 tablet:px-6">
      <Link href={"/"}>
        <div className=" w-full max-w-[1200px] mx-auto flex items-center ">
          {/* 모바일일 때 이미지*/}
          <Image
            src={"/images/logo_small.png"}
            width={71}
            height={40}
            alt="logo_small"
            className="block tablet:hidden"
          />
          {/* 테블릿 & 데스크탑일 때 이미지 */}
          <Image
            src="/images/logo_large.png"
            width={151}
            height={40}
            alt="logo_large"
            className="hidden tablet:block"
          />
        </div>
      </Link>
    </header>
  );
};

export default Header;
