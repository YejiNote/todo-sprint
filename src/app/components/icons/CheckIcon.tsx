interface CheckIconProps {
  size?: number;
  bgColor?: string;
  checkColor?: string;
}

export default function CheckIcon({
  size = 32,
  bgColor = "#7C3AED", // 보라색
  checkColor = "#FAF8F1", // 아이보리-화이트
}: CheckIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 배경 원 */}
      <circle cx="12" cy="12" r="12" fill={bgColor} />

      {/* 체크 표시 */}
      <path
        d="M7 12.5L10.5 16L17 9"
        stroke={checkColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
