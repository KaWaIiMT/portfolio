import { ProjectDetail } from "@/types/project";

export const vismoke: ProjectDetail = {
  slug: "vismoke",
  title: "烟影智援",
  titleEn: "ViSmoke",
  category: "ai",
  tags: ["Python", "YOLO", "PyTorch", "Flask", "CV"],
  featured: true,
  order: 3,
  thumbnail: "/images/projects/vismoke/thumb.png",
  description:
    "智能救援指挥系统——利用计算机视觉实时检测火灾烟雾，辅助无人机救援决策。",
  hero: {
    subtitle: "看见烟雾，拯救生命",
    backgroundStyle: "solid",
  },
  highlights: [
    {
      icon: "🔥",
      heading: "实时检测",
      body: "基于 YOLOv8 的烟雾检测模型，推理速度 <50ms，准确率 94.7%，支持多路视频流并行处理。",
    },
    {
      icon: "🚁",
      heading: "无人机联动",
      body: "检测到火源后自动规划无人机飞行路径，实时回传坐标至指挥中心大屏。",
    },
    {
      icon: "🏭",
      heading: "企业命题",
      body: "中国大学生服务外包创新创业大赛——中电海康企业命题，获全国 XX 等奖。",
    },
  ],
  techDetails: {
    engine: undefined,
    language: "Python 3.10",
    framework: "PyTorch + Flask",
    platform: "Web / Edge Device",
    other: ["YOLOv8", "OpenCV", "Leaflet", "WebSocket"],
    architecture:
      "前端使用 React + Leaflet 地图可视化，后端 Flask 提供 REST API，检测服务使用 ONNX Runtime 部署在边缘设备，WebSocket 实现指令实时推送。",
  },
  screenshots: [
    {
      src: "/images/projects/vismoke/screen-1.jpg",
      alt: "检测界面",
      caption: "实时烟雾检测界面",
    },
    {
      src: "/images/projects/vismoke/screen-2.jpg",
      alt: "指挥大屏",
      caption: "救援指挥大屏",
    },
    {
      src: "/images/projects/vismoke/screen-3.jpg",
      alt: "无人机轨迹",
      caption: "无人机飞行轨迹",
    },
  ],
  links: [
    {
      label: "比赛官网",
      url: "https://fwwb.org.cn/",
      utmCampaign: "vismoke",
    },
  ],
};
