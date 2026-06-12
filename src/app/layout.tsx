import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { inter, notoSansSC } from "@/styles/fonts";
import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { ParticleBackground } from "@/components/three/ParticleBackground";
import "./globals.css";

export const metadata: Metadata = {
  title: "作品集",
  description: "游戏开发 · 人工智能 — 个人作品集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-black text-white flex flex-col relative">
        <ParticleBackground />
        <NavBar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
