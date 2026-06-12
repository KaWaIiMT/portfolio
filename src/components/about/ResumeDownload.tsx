"use client";

import { useScrollReveal } from "@/hooks/useScrollTrigger";

export function ResumeDownload() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="text-center pt-8 border-t border-white/[0.04]">
      <a
        href="/files/resume.pdf"
        download
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                   border border-white/[0.06] text-sm text-white/35
                   hover:text-white/70 hover:border-white/15
                   transition-all duration-300 font-sans"
      >
        ↓ 下载简历 (PDF)
      </a>
    </section>
  );
}
