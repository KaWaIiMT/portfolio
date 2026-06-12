"use client";

import dynamic from "next/dynamic";

const ParticleCanvas = dynamic(
  () => import("./ParticleCanvas").then((mod) => mod.ParticleCanvas),
  {
    ssr: false,
    loading: () => null,
  }
);

export function ParticleBackground() {
  return <ParticleCanvas />;
}
