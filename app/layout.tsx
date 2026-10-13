import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google";
import "./globals.css";
import { invitation } from "@/lib/invitation";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const script = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const title = `Nikkah Invitation: ${invitation.bride} & ${invitation.groom}`;
const description = `You are warmly invited to the Nikkah of ${invitation.bride} & ${invitation.groom} on ${invitation.event.day}, ${invitation.event.date} at ${invitation.event.time}.`;

export const metadata: Metadata = {
  metadataBase: new URL(invitation.siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: invitation.siteUrl,
    siteName: title,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5b1e2d",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${script.variable}`}>
      <body>{children}</body>
    </html>
  );
}
