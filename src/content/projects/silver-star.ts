import { ProjectDetail } from "@/types/project";

export const silverStar: ProjectDetail = {
  slug: "silver-star",
  title: "银星劫",
  titleEn: "Silver Star Heist",
  category: "game",
  tags: ["Unity", "C#", "3D", "Action"],
  featured: false,
  order: 4,
  thumbnail: "/images/projects/silver-star/thumb.png",
  description: "科幻题材 3D 动作冒险游戏，在银河边缘展开一场惊心动魄的劫掠行动。",
  hero: {
    subtitle: "银河边缘的劫掠行动",
    backgroundStyle: "solid",
  },
  highlights: [
    {
      icon: "🚀",
      heading: "3D 动作",
      body: "第三人称射击与近战混合战斗系统，自定义连招编辑器。",
    },
    {
      icon: "🌌",
      heading: "开放世界",
      body: "程序化生成的行星表面，每个星球有独特的地貌与资源分布。",
    },
  ],
  techDetails: {
    engine: "Unity 2022 LTS",
    language: "C#",
    platform: "PC",
    other: ["HDRP", "ProBuilder", "Cinemachine"],
    architecture: "HDRP 高清渲染管线，地形系统使用 Gaia Pro 生成。",
  },
  screenshots: [
    {
      src: "/images/projects/silver-star/screen-1.jpg",
      alt: "太空场景",
      caption: "太空站场景",
    },
    {
      src: "/images/projects/silver-star/screen-2.jpg",
      alt: "战斗场景",
      caption: "地面战斗",
    },
  ],
  links: [
    {
      label: "比赛官网",
      url: "https://www.taptap.cn/",
      utmCampaign: "silver-star",
    },
    {
      label: "项目主页",
      url: "https://www.taptap.cn/app/726477?os=pc",
      utmCampaign: "silver-star",
    },
  ],
};
