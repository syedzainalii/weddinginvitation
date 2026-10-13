// Built-in SVG floral cluster. Used in corners when no flower banner images exist.
function Flower({
  cx,
  cy,
  r,
  fill,
  center = "#e3c887",
}: {
  cx: number;
  cy: number;
  r: number;
  fill: string;
  center?: string;
}) {
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {[0, 72, 144, 216, 288].map((a) => (
        <ellipse
          key={a}
          cx="0"
          cy={-r * 0.7}
          rx={r * 0.5}
          ry={r * 0.75}
          fill={fill}
          opacity="0.92"
          transform={`rotate(${a})`}
        />
      ))}
      <circle r={r * 0.28} fill={center} />
    </g>
  );
}

export default function FloralCorner({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 220"
      className={className}
      aria-hidden="true"
      style={{ transform: flip ? "scale(-1,-1)" : undefined }}
    >
      {/* stems and leaves */}
      <g stroke="#6f8a6a" strokeWidth="2" fill="none" strokeLinecap="round">
        <path d="M0 40 C60 50, 110 90, 150 170" />
        <path d="M30 0 C50 60, 90 110, 170 150" />
      </g>
      {[
        [40, 52, -20],
        [80, 72, 10],
        [118, 112, 40],
        [60, 30, 70],
        [100, 66, 80],
        [140, 108, 100],
      ].map(([x, y, rot], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx="16"
          ry="6"
          fill="#8ea58a"
          opacity="0.9"
          transform={`rotate(${rot} ${x} ${y})`}
        />
      ))}
      <Flower cx={34} cy={34} r={30} fill="#c9788a" />
      <Flower cx={92} cy={26} r={18} fill="#f1c9d0" />
      <Flower cx={26} cy={96} r={18} fill="#f1c9d0" />
      <Flower cx={78} cy={78} r={22} fill="#e8a3b1" />
      <Flower cx={132} cy={56} r={12} fill="#c9788a" />
      <Flower cx={56} cy={140} r={12} fill="#c9788a" />
      <circle cx="120" cy="20" r="4" fill="#e3c887" />
      <circle cx="18" cy="130" r="4" fill="#e3c887" />
      <circle cx="108" cy="104" r="3" fill="#e3c887" />
    </svg>
  );
}
