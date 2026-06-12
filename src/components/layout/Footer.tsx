"use client";

import { BackToTop } from "@/components/ui/BackToTop";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6 text-sm text-white/40">
          <a
            href="https://gitee.com/KaWaIiMT"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white/70 transition-colors"
          >
            Gitee
          </a>
          <a
            href="mailto:KaWaIiMT@outlook.com"
            className="hover:text-white/70 transition-colors"
          >
            邮箱
          </a>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
