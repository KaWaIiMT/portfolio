"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollTrigger";
import type { Skill } from "@/types/project";

// Placeholder skills — user fills in actual skills later
const skills: Skill[] = [
  { name: "Unity", level: "core" },
  { name: "C#", level: "core" },
  { name: "Python", level: "core" },
  { name: "PyTorch", level: "core" },
  { name: "YOLO", level: "familiar" },
  { name: "OpenCV", level: "familiar" },
  { name: "Flask", level: "familiar" },
  { name: "React", level: "familiar" },
  { name: "Next.js", level: "familiar" },
  { name: "TypeScript", level: "familiar" },
  { name: "Blender", level: "exposed" },
  { name: "Shader Graph", level: "exposed" },
  { name: "FMOD", level: "exposed" },
  { name: "Git", level: "core" },
  { name: "Docker", level: "exposed" },
];

const levelStyles: Record<Skill["level"], string> = {
  core: "text-white/80 border-white/15",
  familiar: "text-white/50 border-white/08",
  exposed: "text-white/25 border-white/04",
};

export function SkillCloud() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="mb-20 md:mb-28">
      <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans mb-8">
        技能
      </p>

      <div className="flex flex-wrap gap-2 md:gap-3">
        {skills.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            className={`text-sm md:text-base font-sans px-4 py-1.5 rounded-full border transition-colors duration-300 ${levelStyles[skill.level]}`}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
