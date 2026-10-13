"use client";

import { useEffect, useState } from "react";
import CoverCurtains from "./CoverCurtains";
import MainInvite from "./MainInvite";
import FallingPetals from "./FallingPetals";
import MusicToggle from "./MusicToggle";

export default function Invitation() {
  const [opened, setOpened] = useState(false);

  // Scroll is locked only while the cover is showing.
  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <main className="relative min-h-[100dvh]">
      <MainInvite show={opened} />
      <FallingPetals />
      <MusicToggle started={opened} />
      <CoverCurtains opened={opened} onOpen={() => setOpened(true)} />
    </main>
  );
}
