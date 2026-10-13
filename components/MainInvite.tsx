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
  const {
    bride,
    groom,
    bismillah,
    hosts,
    groomParents,
    brideParents,
    event,
  } = invitation;
  const state = show ? "show" : "hidden";

  return (
    <div className="paper relative mx-auto w-full max-w-md">
      {/* Hero */}
      <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-24 text-center">
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
            dir="rtl"
            lang="ar"
            className="font-bismillah text-4xl leading-relaxed text-rose-dark sm:text-5xl"
          >
            {bismillah}
          </motion.p>

          <motion.div variants={fade} className="mt-5 text-base leading-relaxed text-maroon">
            <p>With the blessings of Allah,</p>
            <p className="mt-1 text-lg font-bold">{hosts}</p>
            <p className="mt-1">
              are delighted to invite you to the Nikkah Ceremony of their beloved son
            </p>
          </motion.div>

          <motion.h1
            variants={fade}
            className="gold-text mt-4 font-script text-6xl leading-[1.1] sm:text-7xl"
          >
            {groom}
          </motion.h1>
          <motion.p variants={fade} className="text-sm tracking-wide text-maroon">
            {groomParents}
          </motion.p>

          <motion.p variants={fade} className="mt-2 font-script text-4xl text-gold-dark">
            &amp;
          </motion.p>

          <motion.h1
            variants={fade}
            className="gold-text font-script text-6xl leading-[1.1] sm:text-7xl"
          >
            {bride}
          </motion.h1>
          <motion.p variants={fade} className="text-sm tracking-wide text-maroon">
            {brideParents}
          </motion.p>

          <motion.p variants={fade} className="mt-6 text-sm tracking-widest text-maroon">
            {event.day} &middot; {event.date}
          </motion.p>
          <motion.p variants={fade} className="mt-4 text-xs text-gold-dark">
            Scroll down
          </motion.p>
        </motion.div>
      </section>

      {/* Verse and dua */}
      <motion.section
        className="px-8 py-12 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fade}
        transition={{ duration: 0.8 }}
      >
        <Ornament />

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