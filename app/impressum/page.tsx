import type { Metadata } from "next";
import { TopNav } from "@/components/TopNav";
import { ImprintHero } from "@/components/ImprintHero";
import { ImprintContent } from "@/components/ImprintContent";
import { Footer } from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Impressum — Liam Hess",
  description:
    "Anbieterkennzeichnung nach § 5 Digitale-Dienste-Gesetz (DDG): Name, Anschrift und Kontaktdaten.",
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <>
      <TopNav />
      <ImprintHero />
      <ImprintContent />
      <Footer />
    </>
  );
}
