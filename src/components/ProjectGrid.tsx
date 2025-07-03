import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Link } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redis"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    demo: "https://demo.example.com",
    github: "https://github.com/username/ecommerce",
    featured: true
  },
  {
    id: 2,
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time analytics dashboard with machine learning insights. Built with React, Python Flask, and TensorFlow for predictive analytics.",
    technologies: ["React", "Python", "TensorFlow", "D3.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    demo: "https://analytics.example.com",
    github: "https://github.com/username/analytics",
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Chat Application",
    description: "Scalable chat application with WebSocket implementation, featuring rooms, file sharing, and message encryption.",
    technologies: ["React", "Socket.io", "Express", "Redis", "JWT"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    demo: "https://chat.example.com",
    github: "https://github.com/username/chat-app",
    featured: false
  },
  {
    id: 4,
    title: "Task Management System",
    description: "Collaborative project management tool with drag-and-drop interface, time tracking, and team collaboration features.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    demo: "https://tasks.example.com",
    github: "https://github.com/username/task-manager",
    featured: false
  }
];

const ProjectGrid = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work, featuring full-stack applications, 
            innovative solutions, and cutting-edge technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group relative bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card animate-scale-in overflow-hidden ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay with Links */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Link className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="tech" className="animate-glow-pulse">
                      Featured
                    </Badge>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="skill">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
            View All Projects
            <Github className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;