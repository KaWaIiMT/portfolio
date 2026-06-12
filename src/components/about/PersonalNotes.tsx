"use client";

import { useScrollReveal } from "@/hooks/useScrollTrigger";

export function PersonalNotes() {
  const ref = useScrollReveal();

  return (
    <section ref={ref} className="mb-20 md:mb-28 text-right">
      <p className="text-xs tracking-[0.2em] uppercase text-white/15 font-sans mb-6">
        碎碎念
      </p>
      <div className="max-w-md ml-auto space-y-4">
        <p className="text-sm text-white/20 leading-relaxed font-sans italic">
          {/* User fills in personal reflection here */}
          做游戏的人总说「玩家不会在意这些细节」——但我在意。
        </p>
        <p className="text-sm text-white/15 leading-relaxed font-sans italic">
          无论是游戏的帧率稳定在 60fps，还是 AI 模型的推理延迟控制在 50ms
          以内，对技术的执念驱动着我做的每一个项目。
        </p>
      </div>
    </section>
  );
}
