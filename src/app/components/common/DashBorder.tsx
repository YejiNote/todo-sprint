

export default function DashBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect
        x="1"
        y="1"
        width="98"
        height="98"
        rx="8"
        ry="8"
        fill="none"
        stroke="#CBD5E1"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
    </svg>
  );
}
