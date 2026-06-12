"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { moreProjects } from "@/content/projects";

export function MoreGrid() {
  if (moreProjects.length === 0) return null;

  return (
    <section className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.2em] uppercase text-white/20 mb-8 md:mb-12 font-sans"
      >
        更多项目
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {moreProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ProjectCard project={project} variant="compact" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
