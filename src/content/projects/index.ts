import type { ProjectDetail } from "@/types/project";
import { codeAscension } from "./code-ascension";
import { plagueCity } from "./plague-city";
import { vismoke } from "./vismoke";
import { silverStar } from "./silver-star";
import { doveSimulator } from "./dove-simulator";

export const allProjects: ProjectDetail[] = [
  codeAscension,
  plagueCity,
  vismoke,
  silverStar,
  doveSimulator,
].sort((a, b) => a.order - b.order);

export const featuredProjects = allProjects.filter((p) => p.featured);
export const moreProjects = allProjects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return allProjects.find((p) => p.slug === slug);
}
