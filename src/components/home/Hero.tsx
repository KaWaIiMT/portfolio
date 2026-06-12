"use client";

import { motion } from "framer-motion";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";

const nameChars = ["池", "长", "俊"];

const charVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(12px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.15 + i * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex items-baseline justify-center"
      >
        {nameChars.map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={charVariants}
            className="font-cn text-7xl sm:text-8xl md:text-9xl font-bold tracking-ultra leading-hero inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

      <motion.span
        initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="block font-cn text-3xl sm:text-4xl md:text-5xl mt-6 md:mt-8 text-white/50 font-normal tracking-wide"
      >
        作品集
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-8 md:mt-10 text-base md:text-lg text-white/30 max-w-lg font-sans tracking-wide"
      >
        游戏开发 · 人工智能
      </motion.p>

      <div className="absolute bottom-12">
        <ScrollIndicator />
      </div>
    </section>
  );
}
