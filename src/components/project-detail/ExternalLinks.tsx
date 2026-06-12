"use client";

import { useScrollReveal } from "@/hooks/useScrollTrigger";
import { UTMLink } from "@/components/tracking/UTMLink";
import type { ProjectLink } from "@/types/project";

export function ExternalLinks({ links }: { links: ProjectLink[] }) {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref}
      className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans mb-10">
        外部链接
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link) => (
          <UTMLink
            key={link.label}
            href={link.url}
            label={link.label}
            utmCampaign={link.utmCampaign}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="mt-24 mx-auto w-px h-16 bg-white/[0.04]" />
    </section>
  );
}
