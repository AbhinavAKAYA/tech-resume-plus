import Hero from "@/components/Hero";
import ProjectGrid from "@/components/ProjectGrid";
import SkillsShowcase from "@/components/SkillsShowcase";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProjectGrid />
      <SkillsShowcase />
      <Contact />
    </div>
  );
};

export default Index;
