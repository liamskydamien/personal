import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { SideProjects } from "@/components/sections/SideProjects";
import { CurrentlyExploring } from "@/components/sections/CurrentlyExploring";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TopNav page="home" />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <SideProjects />
      <CurrentlyExploring />
      <Contact />
    </>
  );
}
