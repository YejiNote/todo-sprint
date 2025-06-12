interface PlusIconProps {
  className?: string;
  strokeWidth?: number;
}

export default function PlusIcon({
  className = "w-4 h-4 stroke-slate-900 align-middle",
  strokeWidth = 2,
}: PlusIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="6"
        y1="2"
        x2="6"
        y2="10"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <line
        x1="2"
        y1="6"
        x2="10"
        y2="6"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
