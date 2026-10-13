"use client";

import { useEffect, useRef, useState } from "react";
import { useFileExists } from "@/lib/useImageExists";

const SRC = "/audio/nikkah.mp3";

// Only renders if public/audio/nikkah.mp3 exists.
// Starts playing unmuted after the cover is tapped.
export default function MusicToggle({ started }: { started: boolean }) {
  const exists = useFileExists(SRC);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false); // Start unmuted

  useEffect(() => {
    if (!exists || !started) return;
    const a = audioRef.current;
    if (!a) return;
    
    a.muted = false;
    a.loop = true;
    a.play().catch(() => {
      // Fallback if browser autoplay policy blocks unmuted audio
      setMuted(true);
    });
  }, [exists, started]);

  if (!exists) return null;

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    const next = !muted;
    a.muted = next;
    if (!next) a.play().catch(() => {});
    setMuted(next);
  };

  return (
    <>
      <audio ref={audioRef} src={SRC} preload="auto" loop />
      {started && (
        <button
          type="button"
          onClick={toggle}
          aria-label={muted ? "Play music" : "Mute music"}
          className="fixed bottom-4 right-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-white/90 text-maroon shadow-lg"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" />
            {muted ? (
              <>
                <path d="m22 9-6 6" />
                <path d="m16 9 6 6" />
              </>
            ) : (
              <>
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M19 5a10 10 0 0 1 0 14" />
              </>
            )}
          </svg>
        </button>
      )}
    </>
  );
}