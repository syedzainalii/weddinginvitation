"use client";

import { motion } from "framer-motion";
import { invitation } from "@/lib/invitation";
import { useImageExists } from "@/lib/useImageExists";
import FloralCorner from "./FloralCorner";
import Ornament from "./Ornament";
import ScratchHeart from "./ScratchHeart";
import DetailsSection from "./DetailsSection";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function CoupleArt() {
  const hasPhoto = useImageExists("/images/couple.png");
  if (hasPhoto) {
    // eslint-disable-next-line @next/next/no-img-element
    return (
      <img
        src="/images/couple.png"
        alt="The couple"
        className="mx-auto w-full max-w-xs"
      />
    );
  }
  // Simple built-in SVG: two seated figures seen from behind
  return (
    <svg viewBox="0 0 240 150" className="mx-auto w-full max-w-xs" aria-hidden="true">
      <ellipse cx="120" cy="140" rx="100" ry="8" fill="#e8d5b5" opacity="0.7" />
      <path d="M62 140 C58 100 70 78 92 74 C112 74 120 100 118 140 Z" fill="#5b1e2d" />
      <circle cx="90" cy="58" r="15" fill="#3d1220" />
      <path d="M72 62 C66 90 74 110 80 118 C94 104 100 80 100 62 Z" fill="#8a6a24" opacity="0.85" />
      <path d="M122 140 C122 98 132 80 156 76 C176 78 184 104 180 140 Z" fill="#f7efe0" stroke="#b8923f" />
      <circle cx="150" cy="58" r="15" fill="#3d1220" />
      <path d="M130 60 C130 38 170 38 170 60 C166 52 134 52 130 60Z" fill="#b8923f" />
    </svg>
  );
}

function Banner({ src, bottom = false }: { src: string; bottom?: boolean }) {
  const exists = useImageExists(src);
  if (!exists) {
    return (
      <>
        <FloralCorner
          className={`pointer-events-none absolute w-36 sm:w-48 ${
            bottom ? "bottom-0 right-0" : "left-0 top-0"
          }`}
          flip={bottom}
        />
        <FloralCorner
          className={`pointer-events-none absolute w-28 opacity-80 sm:w-40 ${
            bottom ? "bottom-0 left-0" : "right-0 top-0"
          }`}
          flip={!bottom}
        />
      </>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      className={`pointer-events-none absolute left-0 w-full ${
        bottom ? "bottom-0" : "top-0"
      }`}
    />
  );
}

export default function MainInvite({ show }: { show: boolean }) {
  const { bride, groom, message, event, brideParents, groomParents } = invitation;
  const state = show ? "show" : "hidden";

  return (
    <div className="paper relative mx-auto w-full max-w-md">
      {/* Hero */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-28 text-center">
        <Banner src="/images/flowers-top.png" />
        <Banner src="/images/flowers-bottom.png" bottom />

        <motion.div
          className="relative z-10"
          initial="hidden"
          animate={state}
          transition={{ staggerChildren: 0.25, delayChildren: 1 }}
        >
          <motion.p
            variants={fade}
            className="text-xs uppercase tracking-[0.4em] text-gold-dark"
          >
            In the name of Allah
          </motion.p>
          <motion.p variants={fade} className="mt-6 text-sm tracking-[0.3em] text-maroon">
            THE NIKKAH OF
          </motion.p>
          <motion.h1
            variants={fade}
            className="gold-text mt-4 font-script text-6xl leading-[1.1] sm:text-7xl"
          >
            {bride}
          </motion.h1>
          <motion.p variants={fade} className="font-script text-4xl text-rose-dark">
            &amp;
          </motion.p>
          <motion.h1
            variants={fade}
            className="gold-text font-script text-6xl leading-[1.1] sm:text-7xl"
          >
            {groom}
          </motion.h1>
          <motion.div variants={fade} className="mt-6">
            <CoupleArt />
          </motion.div>
          <motion.p variants={fade} className="mt-4 text-sm tracking-widest text-maroon">
            {event.day} &middot; {event.date}
          </motion.p>
          <motion.p variants={fade} className="mt-6 text-xs text-gold-dark">
            Scroll down
          </motion.p>
        </motion.div>
      </section>

      {/* Message */}
      <motion.section
        className="px-8 py-12 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fade}
        transition={{ duration: 0.8 }}
      >
        <Ornament />
        <p className="mt-6 text-lg italic leading-relaxed text-maroon">{message}</p>
        <div className="mt-8 space-y-2 text-sm text-maroon/90">
          <p>{brideParents}</p>
          <p>{groomParents}</p>
        </div>
        <Ornament className="mt-6" />
      </motion.section>

      {/* Scratch heart */}
      <motion.section
        className="px-6 py-10 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fade}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-script text-4xl text-maroon">Save the date</h2>
        <div className="mt-4">
          <ScratchHeart />
        </div>
      </motion.section>

      <DetailsSection />

      <footer className="px-6 pb-16 pt-6 text-center">
        <Ornament />
        <p className="mt-4 font-script text-3xl text-maroon">
          We look forward to celebrating with you
        </p>
        <p className="mt-2 text-sm tracking-[0.3em] text-gold-dark">
          {invitation.monogram}
        </p>
      </footer>
    </div>
  );
}
