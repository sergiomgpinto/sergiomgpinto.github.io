import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navigation />
      <main className="overflow-hidden pt-16">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;