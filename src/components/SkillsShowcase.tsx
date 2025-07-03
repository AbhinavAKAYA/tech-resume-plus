import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code, Terminal, Star } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: [
      { name: "React", level: 95, years: 4 },
      { name: "TypeScript", level: 90, years: 3 },
      { name: "Vue.js", level: 85, years: 2 },
      { name: "Tailwind CSS", level: 92, years: 3 },
      { name: "Next.js", level: 88, years: 2 }
    ]
  },
  {
    title: "Backend Development", 
    icon: Terminal,
    skills: [
      { name: "Node.js", level: 90, years: 4 },
      { name: "Python", level: 85, years: 3 },
      { name: "PostgreSQL", level: 88, years: 3 },
      { name: "MongoDB", level: 82, years: 2 },
      { name: "Redis", level: 80, years: 2 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: Star,
    skills: [
      { name: "Docker", level: 85, years: 2 },
      { name: "AWS", level: 80, years: 2 },
      { name: "Git", level: 95, years: 5 },
      { name: "CI/CD", level: 82, years: 2 },
      { name: "Kubernetes", level: 75, years: 1 }
    ]
  }
];

const SkillsShowcase = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, proficiency levels, 
            and years of hands-on experience in modern development technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card animate-scale-in group"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 mr-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="animate-slide-up"
                    style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                  >
                    {/* Skill Header */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="skill" className="text-xs">
                          {skill.years}y
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out animate-fade-in"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}s`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "GraphQL", "Jest", "Cypress", "Webpack", "Vite", "Figma", 
              "Adobe XD", "Stripe", "Firebase", "Supabase", "Socket.io", 
              "Express", "FastAPI", "Django", "Laravel"
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="hover:border-primary/50 hover:bg-primary/10 transition-colors">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;