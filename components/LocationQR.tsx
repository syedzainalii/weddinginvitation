"use client";

import { QRCodeSVG } from "qrcode.react";
import { invitation } from "@/lib/invitation";

export default function LocationQR() {
  const { venue } = invitation;
  return (
    <div className="mx-auto flex w-fit flex-col items-center rounded-2xl border border-gold/60 bg-white/80 p-4 shadow-md">
      <QRCodeSVG
        value={venue.mapsUrl}
        size={150}
        level="M"
        bgColor="#ffffff"
        fgColor="#082a1f"
        marginSize={2}
      />
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-gold-dark">
        Scan for location
      </p>
    </div>
  );
}
