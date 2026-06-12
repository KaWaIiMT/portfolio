import { ProjectDetail } from "@/types/project";

export const doveSimulator: ProjectDetail = {
  slug: "dove-simulator",
  title: "斑鸠模拟器",
  titleEn: "Dove Simulator",
  category: "game",
  tags: ["Unity", "C#", "Simulation"],
  featured: false,
  order: 5,
  thumbnail: "/images/projects/dove-simulator/thumb.jpg",
  description: "以斑鸠为主角的模拟游戏，从独特的飞行视角探索城市。",
  hero: {
    subtitle: "展翅飞越城市天际线",
    backgroundStyle: "solid",
  },
  highlights: [
    {
      icon: "🕊️",
      heading: "飞行模拟",
      body: "基于物理的飞行系统，模拟真实的鸟类飞行姿态与气流互动。",
    },
  ],
  techDetails: {
    engine: "Unity 2022 LTS",
    language: "C#",
    platform: "PC",
    other: ["Physics", "Procedural Animation"],
    architecture: "自定义 Wing Physics 模拟鸟类飞行动力学，程序化动画驱动翅膀与尾羽。",
  },
  screenshots: [
    {
      src: "/images/projects/dove-simulator/screen-1.jpg",
      alt: "飞行视角",
      caption: "城市飞行视角",
    },
  ],
  links: [
    {
      label: "比赛官网",
      url: "https://gameproducer.g-bits.com/pc/gallery.html",
      utmCampaign: "dove-simulator",
    },
    {
      label: "Gitee",
      url: "https://gitee.com/KaWaIiMT/turtledove-simulator-v2.0",
      utmCampaign: "dove-simulator",
    },
  ],
};
