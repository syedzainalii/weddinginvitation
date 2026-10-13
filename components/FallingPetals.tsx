"use client";

import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  color: string;
};

const COLORS = ["#cfe6d6", "#8dbf9f", "#4f8f6a", "#e3f1e7"];

export default function FallingPetals({ count = 14 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  // Random values are created after mount to avoid hydration mismatches.
  useEffect(() => {
    setPetals(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 12,
        duration: 9 + Math.random() * 8,
        delay: Math.random() * 10,
        drift: -60 + Math.random() * 120,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }))
    );
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal absolute top-0 block"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size * 1.3,
              background: p.color,
              borderRadius: "70% 0 70% 0",
              opacity: 0,
              animation: `petal-fall ${p.duration}s linear ${p.delay}s infinite`,
              ["--drift" as string]: `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
