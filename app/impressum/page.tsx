import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TopNav } from "@/components/TopNav";
import { ImprintHero } from "@/components/ImprintHero";
import { ImprintContent } from "@/components/ImprintContent";
import { Footer } from "@/components/sections/Footer";
import { translations, type Locale } from "@/lib/i18n/translations";

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const locale = (cookieStore.get("locale")?.value ?? "en") as Locale;
  const imp = translations[locale]?.imprint ?? translations.en.imprint;

  return {
    title: imp.metaTitle,
    description: imp.metaDescription,
    robots: { index: true, follow: true },
  };
}

export default function ImpressumPage() {
  return (
    <>
      <TopNav page="background" />
      <ImprintContent />
      <Footer />
    </>
  );
}
