"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollTrigger";
import type { ProjectScreenshot } from "@/types/project";

export function ScreenshotGallery({
  screenshots,
}: {
  screenshots: ProjectScreenshot[];
}) {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative max-w-[90rem] mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans mb-10 md:mb-16">
        截图画廊
      </p>

      <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
        {screenshots.map((ss, i) => (
          <motion.div
            key={i}
            className="flex-shrink-0 snap-center w-[85vw] md:w-[60vw] lg:w-[45vw]"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden bg-white/[0.03] border border-white/[0.04]">
              {/* background fallback */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
              <Image
                src={ss.src}
                alt={ss.alt}
                fill
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 60vw, 45vw"
                className="object-cover"
              />
            </div>
            {ss.caption && (
              <p className="mt-3 text-xs text-white/25 font-sans text-center">
                {ss.caption}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
