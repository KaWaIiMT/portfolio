"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollTrigger";
import type { ProjectDetail } from "@/types/project";

export function DetailHero({ project }: { project: ProjectDetail }) {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-white/25 mb-6 font-sans">
        {project.category === "game" ? "Game" : "AI"}
      </p>
      <h1 className="font-cn text-5xl sm:text-6xl md:text-8xl font-bold tracking-ultra leading-hero">
        {project.title}
      </h1>
      <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/35 max-w-xl font-cn tracking-wide">
        {project.hero.subtitle}
      </p>
      <div className="flex flex-wrap justify-center gap-3 mt-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] tracking-wider text-white/20 font-sans px-3 py-1 rounded-full border border-white/[0.04]"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
