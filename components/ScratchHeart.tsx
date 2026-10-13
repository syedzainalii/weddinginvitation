"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation";

const W = 280;
const H = 250;

function heartPath(ctx: CanvasRenderingContext2D) {
  const x = W / 2;
  const top = H * 0.28;
  ctx.beginPath();
  ctx.moveTo(x, H * 0.92);
  ctx.bezierCurveTo(-W * 0.1, H * 0.55, W * 0.08, -H * 0.02, x, top);
  ctx.bezierCurveTo(W * 0.92, -H * 0.02, W * 1.1, H * 0.55, x, H * 0.92);
  ctx.closePath();
}

export default function ScratchHeart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const moves = useRef(0);
  const [revealed, setRevealed] = useState(false);

  // Paint the scratch layer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.globalCompositeOperation = "source-over";
    const g = ctx.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, "#8a6a24");
    g.addColorStop(0.4, "#e3c887");
    g.addColorStop(0.7, "#b8923f");
    g.addColorStop(1, "#8a6a24");
    heartPath(ctx);
    ctx.fillStyle = g;
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#8a6a24";
    ctx.stroke();
    ctx.fillStyle = "rgba(15,61,46,0.75)";
    ctx.font = "600 18px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch to reveal", W / 2, H * 0.52);
    ctx.font = "26px Georgia, serif";
    ctx.fillText("♥", W / 2, H * 0.68);
  }, []);

  const checkProgress = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const data = ctx.getImageData(0, 0, W, H).data;
    let total = 0;
    let cleared = 0;
    // sample every 6th pixel for speed
    for (let i = 0; i < data.length; i += 24) {
      total++;
      if (data[i + 3] < 20) cleared++;
    }
    // part of the canvas is outside the heart (already transparent); compare against a baseline
    const heartShare = 0.58;
    if ((cleared / total - (1 - heartShare)) / heartShare > 0.45) {
      setRevealed(true);
    }
  }, []);

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * W;
    const y = ((clientY - rect.top) / rect.height) * H;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
    moves.current++;
    if (moves.current % 8 === 0) checkProgress();
  };

  const { event } = invitation;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: W, height: H, maxWidth: "100%" }}>
        {/* revealed content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pt-12 text-center">
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full">
            <path
              d={`M${W / 2} ${H * 0.92} C${-W * 0.1} ${H * 0.55}, ${W * 0.08} ${-H * 0.02}, ${W / 2} ${H * 0.28} C${W * 0.92} ${-H * 0.02}, ${W * 1.1} ${H * 0.55}, ${W / 2} ${H * 0.92} Z`}
              fill="#eef7f0"
              stroke="#4f8f6a"
              strokeWidth="2"
            />
          </svg>
          <div className="relative px-6">
            <p className="text-xs uppercase tracking-[0.3em] text-rose-dark">
              {event.day}
            </p>
            <p className="font-script text-5xl leading-tight text-maroon">
              {event.dayNumber}
            </p>
            <p className="text-sm font-semibold tracking-wide text-maroon">
              {event.monthYear}
            </p>
            <p className="mt-1 text-xs tracking-widest text-gold-dark">
              {event.time}
            </p>
          </div>
        </div>

        {/* scratch layer */}
        <motion.canvas
          ref={canvasRef}
          width={W}
          height={H}
          aria-label="Scratch card"
          className="absolute inset-0 h-full w-full touch-none"
          animate={{ opacity: revealed ? 0 : 1 }}
          transition={{ duration: 0.8 }}
          style={{ pointerEvents: revealed ? "none" : "auto", cursor: "crosshair" }}
          onPointerDown={(e) => {
            drawing.current = true;
            (e.target as HTMLElement).setPointerCapture(e.pointerId);
            scratchAt(e.clientX, e.clientY);
          }}
          onPointerMove={(e) => {
            if (drawing.current) scratchAt(e.clientX, e.clientY);
          }}
          onPointerUp={() => {
            drawing.current = false;
            checkProgress();
          }}
          onPointerCancel={() => {
            drawing.current = false;
          }}
        />
      </div>

      {!revealed && (
        <button
          type="button"
          className="btn-outline mt-4"
          onClick={() => setRevealed(true)}
        >
          Reveal
        </button>
      )}
    </div>
  );
}
