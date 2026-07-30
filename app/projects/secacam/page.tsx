import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TopNav } from "@/components/TopNav";
import { SecacamHero } from "@/components/secacam/SecacamHero";
import { SecacamOwnership } from "@/components/secacam/SecacamOwnership";
import { SecacamGallery } from "@/components/secacam/SecacamGallery";
import { SecacamFeatures } from "@/components/secacam/SecacamFeatures";
import { SecacamVideos } from "@/components/secacam/SecacamVideos";
import { SecacamReferences } from "@/components/secacam/SecacamReferences";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { translations, type Locale } from "@/lib/i18n/translations";
import { SECACAM_COVER } from "@/lib/secacam/content";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value ?? "en") as Locale;
  const meta = (translations[locale] ?? translations.en).secacam.meta;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: "/projects/secacam" },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: "article",
      images: [SECACAM_COVER],
    },
    robots: { index: true, follow: true },
  };
}

export default function SecacamCaseStudyPage() {
  return (
    <>
      <TopNav page="project" />
      <SecacamHero />
      <SecacamOwnership />
      <SecacamGallery />
      <SecacamFeatures />
      <SecacamVideos />
      <SecacamReferences />
      <Contact />
      <Footer />
    </>
  );
}
