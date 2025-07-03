import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-developer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-glow-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="relative w-32 h-32 mx-auto mb-8 group">
            <img
              src={heroImage}
              alt="Developer"
              className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-glow transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-primary"
            />
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-glow-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Full-Stack
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
              Developer
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern technologies.
            Passionate about clean code, innovative solutions, and user-centered design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="shadow-primary hover:shadow-glow transition-all duration-300 animate-scale-in">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10 animate-scale-in delay-150">
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 animate-slide-up">
            <a
              href="https://github.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-primary group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-primary group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:contact@developer.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-primary group"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;