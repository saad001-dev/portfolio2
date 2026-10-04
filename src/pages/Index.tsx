import { CustomCursor } from "@/components/CustomCursor";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground antialiased">
      <div className="grain" />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <FeaturedProject />
        <Projects />
        <Experience />
        <Skills />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
