import type { Metadata } from "next";
import "./globals.css";
import { Noto_Naskh_Arabic } from "next/font/google";
import React from "react";

const bodyFont = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-bc102375.vercel.app"),
  title: "???? ???",
  description: "????? ?? ????? ?? ????.",
  themeColor: "#0b1220",
  openGraph: {
    title: "???? ???",
    description: "????? ?? ????? ?? ????.",
    url: "https://agentic-bc102375.vercel.app",
    siteName: "???? ???",
    type: "website",
    locale: "ar_AR"
  },
  twitter: {
    card: "summary_large_image",
    title: "???? ???",
    description: "????? ?? ????? ?? ????."
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}

