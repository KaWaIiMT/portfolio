import type { Metadata } from "next";

interface CreateMetadataParams {
  title: string;
  description: string;
  image?: string;
  path: string;
}

export function createMetadata({
  title,
  description,
  image,
  path,
}: CreateMetadataParams): Metadata {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfolio.vercel.app";
  return {
    title: `${title} — 作品集`,
    description,
    alternates: { canonical: `${baseUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${baseUrl}${path}`,
      siteName: "作品集",
      images: image ? [{ url: image }] : [],
      locale: "zh_CN",
      type: "website",
    },
  };
}
