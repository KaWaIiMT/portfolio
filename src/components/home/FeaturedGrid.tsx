"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "@/content/projects";

export function FeaturedGrid() {
  return (
    <section id="projects" className="relative max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-xs tracking-[0.2em] uppercase text-white/30 mb-10 md:mb-16 font-sans"
      >
        精选项目
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            <ProjectCard project={project} variant="featured" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
