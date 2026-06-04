import { TopNav } from "@/components/TopNav";
import { BackgroundHero } from "@/components/BackgroundHero";
import { Timeline } from "@/components/sections/Timeline";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function BackgroundPage() {
  return (
    <>
      <TopNav page="background" />
      <BackgroundHero />
      <Timeline />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}
