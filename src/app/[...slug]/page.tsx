import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPageContent, getAllPageSlugs } from "@/lib/pageContent";
import { SubpageTemplate } from "@/components/templates/SubpageTemplate";

type PageProps = {
  params: Promise<{
    slug: string[];
  }>;
};

export async function generateStaticParams() {
  return getAllPageSlugs();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getPageContent(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    openGraph: {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      images: page.ogImage ? [{ url: page.ogImage }] : undefined,
    },
    twitter: {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      images: page.ogImage ? [page.ogImage] : undefined,
    },
  };
}

export default async function CatchAllSubpage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageContent(slug);

  if (!page) {
    notFound();
  }

  return (
    <SubpageTemplate withTopPadding={false}>
      <div
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: page.bodyHtml }}
      />
    </SubpageTemplate>
  );
}
