// --- 项目数据的基础类型 ---

export interface ProjectMeta {
  slug: string;
  title: string;
  titleEn: string;
  category: "game" | "ai" | "course" | "research";
  tags: string[];
  featured: boolean;
  order: number;
  thumbnail: string;
  description: string;
  isExternal?: boolean;
}

export interface ProjectHighlight {
  icon?: string;
  heading: string;
  body: string;
}

export interface TechDetails {
  engine?: string;
  language?: string;
  framework?: string;
  platform?: string;
  other?: string[];
  architecture?: string;
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  utmCampaign: string;
}

export interface ProjectDetail extends ProjectMeta {
  hero: {
    subtitle: string;
    backgroundStyle?: "particles" | "solid" | "gradient";
  };
  highlights: ProjectHighlight[];
  techDetails: TechDetails;
  screenshots: ProjectScreenshot[];
  links: ProjectLink[];
}

export interface Skill {
  name: string;
  level: "core" | "familiar" | "exposed";
}

export interface Award {
  name: string;
  competition: string;
  year: number;
  result: string;
}
