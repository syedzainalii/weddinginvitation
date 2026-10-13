"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation";

export default function CoverCurtains({
  opened,
  onOpen,
}: {
  opened: boolean;
  onOpen: () => void;
}) {
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!opened) return;
    const t = setTimeout(() => setGone(true), 1700);
    return () => clearTimeout(t);
  }, [opened]);

  if (gone) return null;

  const panel =
    "absolute top-0 h-full w-1/2 bg-gradient-to-b from-maroon to-maroon-dark";

  return (
    <div
      className={`fixed inset-0 z-50 ${opened ? "pointer-events-none" : ""}`}
      role="dialog"
      aria-label="Invitation cover"
    >
      <motion.div
        className={`${panel} left-0 border-r border-gold/60`}
        animate={{ x: opened ? "-100%" : 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="absolute inset-y-0 right-0 w-3 bg-gradient-to-l from-gold/40 to-transparent" />
      </motion.div>
      <motion.div
        className={`${panel} right-0 border-l border-gold/60`}
        animate={{ x: opened ? "100%" : 0 }}
        transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-gold/40 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
        <motion.button
          type="button"
          onClick={onOpen}
          aria-label="Open invitation"
          className="pointer-events-auto flex h-44 w-44 flex-col items-center justify-center rounded-full border-2 border-gold-light bg-gradient-to-br from-gold-dark via-gold to-gold-light text-maroon-dark shadow-2xl"
          animate={opened ? { scale: 0.4, opacity: 0 } : { scale: [1, 1.05, 1] }}
          transition={
            opened
              ? { duration: 0.6 }
              : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <span className="whitespace-nowrap font-script text-4xl leading-none">
            {invitation.monogram}
          </span>
          <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.25em]">
            Tap to open
          </span>
        </motion.button>
      </div>

      <motion.p
        className="absolute inset-x-0 bottom-12 text-center text-sm uppercase tracking-[0.3em] text-gold-light"
        animate={{ opacity: opened ? 0 : 1 }}
      >
        Nikkah Invitation
      </motion.p>
    </div>
  );
}