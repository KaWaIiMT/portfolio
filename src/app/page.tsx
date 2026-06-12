import { Hero } from "@/components/home/Hero";
import { FeaturedGrid } from "@/components/home/FeaturedGrid";
import { MoreGrid } from "@/components/home/MoreGrid";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedGrid />
      <MoreGrid />
    </main>
  );
}
