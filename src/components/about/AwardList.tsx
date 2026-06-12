"use client";

import { useScrollReveal } from "@/hooks/useScrollTrigger";
import type { Award } from "@/types/project";

// Placeholder awards — user fills in actual data
const awards: Award[] = [
  {
    name: "代码：升变",
    competition: "XXX 游戏开发大赛",
    year: 2024,
    result: "X 等奖",
  },
  {
    name: "疫城札记",
    competition: "XXX 游戏创意大赛",
    year: 2024,
    result: "X 等奖",
  },
  {
    name: "烟影智援 (ViSmoke)",
    competition: "大学生服务外包创新创业大赛",
    year: 2024,
    result: "全国 X 等奖",
  },
  {
    name: "银星劫",
    competition: "XXX Game Jam",
    year: 2023,
    result: "入围奖",
  },
];

export function AwardList() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="mb-20 md:mb-28">
      <p className="text-xs tracking-[0.2em] uppercase text-white/20 font-sans mb-8">
        获奖 & 竞赛
      </p>

      <div className="space-y-4">
        {awards.map((award, i) => (
          <div
            key={i}
            className="flex items-baseline justify-between gap-4 py-3 border-b border-white/[0.04]"
          >
            <div className="flex flex-col gap-0.5">
              <span className="text-sm text-white/60 font-cn">
                {award.competition}
              </span>
              <span className="text-xs text-white/25 font-sans">
                {award.name}
              </span>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-xs text-white/20 font-sans">
                {award.year}
              </span>
              <span className="text-xs text-white/40 font-sans">
                {award.result}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
