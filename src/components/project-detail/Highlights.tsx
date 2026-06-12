"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollTrigger";
import type { ProjectHighlight } from "@/types/project";

export function Highlights({ highlights }: { highlights: ProjectHighlight[] }) {
  return (
    <section className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <SectionLabel>核心亮点</SectionLabel>

      <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {highlights.map((h, i) => (
          <HighlightCard key={i} {...h} index={i} />
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: string }) {
  const ref = useScrollReveal();
  return (
    <p
      ref={ref}
      className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans"
    >
      {children}
    </p>
  );
}

function HighlightCard({
  icon,
  heading,
  body,
  index,
}: ProjectHighlight & { index: number }) {
  const ref = useScrollReveal(index * 0.1);

  return (
    <motion.div ref={ref} className="flex flex-col gap-3">
      {icon && <span className="text-2xl">{icon}</span>}
      <h3 className="font-cn text-lg font-bold text-white/85">{heading}</h3>
      <p className="text-sm text-white/35 leading-relaxed font-sans">{body}</p>
    </motion.div>
  );
}
