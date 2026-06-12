import type { Metadata } from "next";
import { getProjectBySlug, allProjects } from "@/content/projects";
import { DetailHero } from "@/components/project-detail/DetailHero";
import { Highlights } from "@/components/project-detail/Highlights";
import { TechDetails } from "@/components/project-detail/TechDetails";
import { ScreenshotGallery } from "@/components/project-detail/ScreenshotGallery";
import { ExternalLinks } from "@/components/project-detail/ExternalLinks";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Not Found" };
  return {
    title: `${project.title} — 作品集`,
    description: project.description,
    openGraph: {
      title: `${project.title} — 作品集`,
      description: project.description,
      images: [`/images/og/${project.slug}.jpg`],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main>
      <DetailHero project={project} />
      <Highlights highlights={project.highlights} />
      <TechDetails techDetails={project.techDetails} />
      <ScreenshotGallery screenshots={project.screenshots} />
      <ExternalLinks links={project.links} />
    </main>
  );
}
