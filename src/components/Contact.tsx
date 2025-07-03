import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work <span className="bg-gradient-primary bg-clip-text text-transparent">Together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Have a project in mind? I'd love to hear about it. 
              Let's discuss how we can bring your ideas to life.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 mr-4 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:contact@developer.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@developer.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 mr-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-primary group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:shadow-primary group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card animate-scale-in">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input 
                    placeholder="John"
                    className="bg-background border-border focus:border-primary/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input 
                    placeholder="Doe"
                    className="bg-background border-border focus:border-primary/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input 
                  type="email"
                  placeholder="john@example.com"
                  className="bg-background border-border focus:border-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Project Type</label>
                <Input 
                  placeholder="Web Development, Mobile App, etc."
                  className="bg-background border-border focus:border-primary/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-background border-border focus:border-primary/50 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full shadow-primary hover:shadow-glow transition-all duration-300"
              >
                Send Message
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;