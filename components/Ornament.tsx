export default function Ornament({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 300 30"
      className={`mx-auto w-48 ${className}`}
      aria-hidden="true"
      fill="none"
      stroke="#b8923f"
      strokeWidth="1.2"
      strokeLinecap="round"
    >
      <path d="M10 15 H120" />
      <path d="M180 15 H290" />
      <path d="M120 15 C130 3, 142 3, 150 15 C158 27, 170 27, 180 15" />
      <circle cx="150" cy="15" r="3.2" fill="#b8923f" stroke="none" />
      <circle cx="112" cy="15" r="1.8" fill="#b8923f" stroke="none" />
      <circle cx="188" cy="15" r="1.8" fill="#b8923f" stroke="none" />
    </svg>
  );
}
