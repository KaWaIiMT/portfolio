"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import type { ProjectDetail } from "@/types/project";
import { cn } from "@/lib/cn";
import { useMouseFollow } from "@/hooks/useMouseFollow";

interface ProjectCardProps {
  project: ProjectDetail;
  variant: "featured" | "compact";
}

export function ProjectCard({ project, variant }: ProjectCardProps) {
  const { state, onMouseMove, onMouseLeave } = useMouseFollow();
  const [bobDelay] = useState(() => Math.random() * 5); // random stagger per card
  const isFeatured = variant === "featured";

  const card = (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={cn(
        "group relative cursor-pointer rounded-2xl",
        "bg-white/[0.02] border border-white/[0.06]",
        "hover:border-white/[0.15]",
        isFeatured ? "h-[480px] md:h-[560px]" : "h-[240px]"
      )}
      style={{
        // --- Balatro tilt on hover ---
        transform: state.hovering
          ? `perspective(800px) rotateX(${state.tiltX}deg) rotateY(${state.tiltY}deg) scale(1.03)`
          : "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)",
        // --- idle bob (Balatro floating) ---
        animation: !state.hovering
          ? `card-bob ${10 + Math.random() * 4}s ease-in-out ${bobDelay}s infinite`
          : "none",
        // --- Depth shadow on hover ---
        filter: state.hovering
          ? `drop-shadow(0 ${10 + state.intensity * 20}px ${20 + state.intensity * 20}px rgba(255,255,255,${0.05 + state.intensity * 0.1}))`
          : "none",
        transition: "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1), filter 0.5s ease, border-color 0.5s ease",
      }}
    >
      {/* --- Shine sweep (Balatro gloss) --- */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 overflow-hidden"
        style={{
          opacity: state.hovering ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${state.shineAngle}deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,${0.06 * state.intensity}) 40%,
              rgba(255,255,255,${0.12 * state.intensity}) 50%,
              rgba(255,255,255,${0.06 * state.intensity}) 60%,
              rgba(255,255,255,0) 100%)`,
          }}
        />
      </div>

      {/* --- Thumbnail area --- */}
      <div
        className={cn(
          "relative overflow-hidden rounded-t-2xl",
          isFeatured ? "h-[60%]" : "h-[55%]"
        )}
      >
        {/* Actual thumbnail image with parallax on hover */}
        <div
          className="absolute inset-0"
          style={{
            transform: `scale(1.08) translate(${state.relX * -6}px, ${state.relY * -6}px)`,
            transition: "transform 0.4s ease-out",
          }}
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes={isFeatured ? "(max-width: 768px) 100vw, 50vw" : "25vw"}
            className="object-cover"
            preload
          />
        </div>
        {/* Inner glow vignette */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
          style={{
            opacity: state.hovering ? 1 : 0.7,
            transition: "opacity 0.5s ease",
          }}
        />
        {/* Category badge */}
        <span className="absolute top-4 left-4 text-[10px] tracking-[0.15em] uppercase text-white/30 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
          {project.category === "game" ? "Game" : "AI"}
        </span>
        {/* External link hint on hover */}
        <div
          className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 text-white/0 group-hover:text-white/50 transition-all duration-500"
          style={{
            transform: state.hovering
              ? "translateY(0)"
              : "translateY(8px)",
            opacity: state.hovering ? 1 : 0,
            transition: "all 0.4s ease",
          }}
        >
          <span className="text-[11px] tracking-wider font-sans">查看详情</span>
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 17L17 7M17 7H7m10 0v10" />
          </svg>
        </div>
      </div>

      {/* --- Text content --- */}
      <div
        className={cn(
          "relative p-5 md:p-6 flex flex-col",
          isFeatured ? "gap-2 md:gap-3" : "gap-1"
        )}
      >
        <h3
          className={cn(
            "font-cn font-bold tracking-tight text-white transition-transform duration-400",
            isFeatured ? "text-xl md:text-2xl" : "text-base"
          )}
          style={{
            transform: `translateX(${state.relX * 2}px)`,
            transition: "transform 0.4s ease",
          }}
        >
          {project.title}
        </h3>
        {isFeatured && (
          <p className="text-sm text-white/40 line-clamp-2 font-sans">
            {project.description}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] tracking-wide text-white/25 font-sans"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-[10px] text-white/15 font-sans">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <Link href={`/projects/${project.slug}`} className="block">
      {card}
    </Link>
  );
}
