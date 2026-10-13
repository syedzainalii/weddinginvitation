import { ImageResponse } from "next/og";
import { invitation } from "@/lib/invitation";

export const alt = `Nikkah Invitation: ${invitation.bride} & ${invitation.groom}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  const { bride, groom, event, venue } = invitation;

  // Each <div> holds a single string, which is what the image generator requires.
  const names = `${bride} & ${groom}`;
  const when = `${event.day}, ${event.date} at ${event.time}`;
  const where = `${venue.name}, ${venue.area}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fbf6ee, #f1c9d0)",
          border: "14px solid #b8923f",
          color: "#5b1e2d",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 8, color: "#8a6a24" }}>
          NIKKAH INVITATION
        </div>
        <div style={{ display: "flex", fontSize: 96, marginTop: 24 }}>{names}</div>
        <div style={{ display: "flex", fontSize: 40, marginTop: 28 }}>{when}</div>
        <div style={{ display: "flex", fontSize: 30, marginTop: 12, color: "#8a6a24" }}>
          {where}
        </div>
      </div>
    ),
    { ...size }
  );
}