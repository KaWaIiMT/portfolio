"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(
  () => import("@/components/home/Hero").then((m) => ({ default: m.Hero })),
  { ssr: false }
);

const FeaturedGrid = dynamic(
  () =>
    import("@/components/home/FeaturedGrid").then((m) => ({
      default: m.FeaturedGrid,
    })),
  { ssr: false }
);

const MoreGrid = dynamic(
  () =>
    import("@/components/home/MoreGrid").then((m) => ({
      default: m.MoreGrid,
    })),
  { ssr: false }
);

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedGrid />
      <MoreGrid />
    </main>
  );
}
