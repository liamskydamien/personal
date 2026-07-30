import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TopNav } from "@/components/TopNav";
import { YourtHero } from "@/components/yourt/YourtHero";
import { YourtBuild } from "@/components/yourt/YourtBuild";
import { YourtGallery } from "@/components/yourt/YourtGallery";
import { YourtFeatures } from "@/components/yourt/YourtFeatures";
import { YourtCaseStudy } from "@/components/yourt/YourtCaseStudy";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { translations, type Locale } from "@/lib/i18n/translations";
import { YOURT_COVER } from "@/lib/yourt/content";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value ?? "en") as Locale;
  const meta = (translations[locale] ?? translations.en).yourt.meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: "/projects/yourt" },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      images: [YOURT_COVER],
    },
    robots: { index: true, follow: true },
  };
}

export default function YourtCaseStudyPage() {
  return (
    <>
      <TopNav page="project" />
      <YourtHero />
      <YourtBuild />
      <YourtGallery />
      <YourtFeatures />
      <YourtCaseStudy />
      <Contact />
      <Footer />
    </>
  );
}
