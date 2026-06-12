"use client";

import { useScrollReveal } from "@/hooks/useScrollTrigger";
import type { TechDetails as TechDetailsType } from "@/types/project";

export function TechDetails({
  techDetails,
}: {
  techDetails: TechDetailsType;
}) {
  const ref = useScrollReveal();

  const entries = [
    techDetails.engine && ["引擎", techDetails.engine],
    techDetails.language && ["语言", techDetails.language],
    techDetails.framework && ["框架", techDetails.framework],
    techDetails.platform && ["平台", techDetails.platform],
  ].filter(Boolean) as [string, string][];

  return (
    <section
      ref={ref}
      className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32"
    >
      <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans mb-10 md:mb-16">
        技术细节
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-12">
        {entries.map(([label, value]) => (
          <div key={label} className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/20 font-sans">
              {label}
            </span>
            <span className="text-sm text-white/60 font-sans">{value}</span>
          </div>
        ))}
      </div>

      {techDetails.other && techDetails.other.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          {techDetails.other.map((t) => (
            <span
              key={t}
              className="text-[11px] text-white/25 font-sans px-3 py-1 rounded-full border border-white/[0.04]"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {techDetails.architecture && (
        <p className="text-sm text-white/30 leading-relaxed max-w-2xl font-sans">
          {techDetails.architecture}
        </p>
      )}
    </section>
  );
}
