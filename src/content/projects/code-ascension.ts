import { ProjectDetail } from "@/types/project";

export const codeAscension: ProjectDetail = {
  slug: "code-ascension",
  title: "代码：升变",
  titleEn: "Code: Ascension",
  category: "game",
  tags: ["Unity", "C#", "Roguelike", "Shader Graph"],
  featured: true,
  order: 1,
  thumbnail: "/images/projects/code-ascension/thumb.png",
  description:
    "一款融合编程机制的 Roguelike 卡牌游戏，用代码逻辑改写战斗规则。",
  hero: {
    subtitle: "用代码逻辑改写战斗规则",
    backgroundStyle: "solid",
  },
  highlights: [
    {
      icon: "🎮",
      heading: "玩法创新",
      body: "将编程逻辑融入卡牌构筑玩法，玩家通过编写「代码」组合技能，实现上百种战斗策略。",
    },
    {
      icon: "🎨",
      heading: "视觉风格",
      body: "赛博朋克风格 UI，Shader Graph 自定义特效，动态光影过渡。",
    },
    {
      icon: "🏆",
      heading: "比赛成果",
      body: "获 XXX 游戏开发大赛 XX 等奖，评审评为「最具创新性玩法设计」。",
    },
  ],
  techDetails: {
    engine: "Unity 2022 LTS",
    language: "C#",
    platform: "PC / Web",
    other: ["URP", "Shader Graph", "DOTween", "FMOD"],
    architecture:
      "采用 ECS 架构处理战斗逻辑，事件驱动系统解耦卡牌效果与 UI 表现，资源管理使用 Addressables 实现热更新。",
  },
  screenshots: [
    {
      src: "/images/projects/code-ascension/screen-1.jpg",
      alt: "战斗界面",
      caption: "核心战斗界面",
    },
    {
      src: "/images/projects/code-ascension/screen-2.jpg",
      alt: "卡牌构筑",
      caption: "卡牌构筑界面",
    },
    {
      src: "/images/projects/code-ascension/screen-3.jpg",
      alt: "代码编辑器",
      caption: "内置代码编辑器",
    },
  ],
  links: [
    {
      label: "比赛官网",
      url: "https://www.taptap.cn/",
      utmCampaign: "code-ascension",
    },
    {
      label: "项目主页",
      url: "https://www.taptap.cn/app/784310/topic?type=official",
      utmCampaign: "code-ascension",
    },
  ],
};
