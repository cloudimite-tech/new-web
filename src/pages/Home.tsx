import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Shield, Server, Zap, Lock, TrendingUp, Users, Award, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedTerminal from "@/components/AnimatedTerminal";
import { useMediaQuery } from "@/hooks/use-media-query";

const Home = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom solutions from web to mobile applications",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Modern infrastructure and deployment strategies",
    },
    {
      icon: Shield,
      title: "Security & DevSecOps",
      description: "Comprehensive security integration and protection",
    },
    {
      icon: Server,
      title: "Managed Services",
      description: "24/7 monitoring and expert technical support",
    },
  ];

  const reasons = [
    { icon: Zap, title: "Rapid Deployment", description: "Agile methodologies and modern DevOps practices ensure faster time-to-market without compromising quality." },
    { icon: Lock, title: "Security First", description: "Built-in security at every layer, from code to infrastructure, protecting your business and customers." },
    { icon: TrendingUp, title: "Scalable Solutions", description: "Architecture designed to grow with your business, handling increased load and complexity seamlessly." },
    { icon: Users, title: "Expert Team", description: "Certified professionals with deep expertise across multiple technologies and industry domains." },
    { icon: Award, title: "Hands-On Commitment", description: "Every project gets direct attention from our team — no hand-offs to junior staff or outsourced work." },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock monitoring and support ensuring your systems are always running smoothly." },
  ];

  const techGroups = [
    { title: "Cloud Platforms", items: ["AWS", "Microsoft Azure", "Google Cloud", "DigitalOcean"] },
    { title: "Development", items: ["React & Vue", "Node.js & Python", "React Native & Flutter", "PostgreSQL & MongoDB"] },
    { title: "DevOps Tools", items: ["Docker & Kubernetes", "Jenkins & GitLab CI/CD", "Terraform & Ansible", "Prometheus & Grafana"] },
  ];

  const process = [
    { title: "Discovery & Planning", description: "We begin by understanding your business objectives, technical requirements, and constraints, then map out a comprehensive project roadmap." },
    { title: "Design & Architecture", description: "Our architects design scalable, secure, and maintainable solutions with detailed technical specifications and UI/UX aligned to your brand." },
    { title: "Agile Development", description: "Using iterative sprints, we build your solution incrementally with regular demos, continuous integration, and automated testing." },
    { title: "Deployment & Launch", description: "We handle the complete deployment process with zero-downtime releases, comprehensive monitoring, and rollback strategies." },
    { title: "Support & Evolution", description: "Post-launch, we provide ongoing maintenance, performance optimization, and feature enhancements around the clock." },
  ];

  const stats = [
    { value: "4+", label: "Projects Delivered", color: "text-primary" },
    { value: "24/7", label: "Support Available", color: "text-primary" },
    { value: "100%", label: "Client Satisfaction", color: "text-accent" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-4 overflow-hidden bg-dot-grid">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-10 left-1/4 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-[120px] animate-drift-slow" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] bg-accent/20 rounded-full blur-[120px] animate-drift-slow-delayed" />

        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5">
                Software · Cloud · Security
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground text-balance leading-[1.05]">
                Where Code Becomes{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Trust
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
                Empowering businesses with cutting-edge software solutions, cloud infrastructure,
                and security practices that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow-primary hover:-translate-y-0.5 transition-all">
                  <Link to="/services">
                    Explore Services <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 hover:bg-white/5 hover:-translate-y-0.5 transition-all">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>

              {/* Mobile visual: simplified, in-flow (no floating overlaps that would clip on narrow screens). Conditionally mounted (not just CSS-hidden) so it isn't running its animation loop off-screen alongside the desktop version. */}
              {!isDesktop && (
                <div className="pt-4 max-w-sm mx-auto">
                  <div className="rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-card overflow-hidden">
                    <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                      <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                      <span className="ml-2 text-xs text-muted-foreground font-mono">ci-pipeline</span>
                    </div>
                    <div className="p-4">
                      <AnimatedTerminal />
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-wrap gap-3 mt-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground bg-white/[0.04] border border-white/10 rounded-full px-3 py-1.5">
                      <Shield className="w-3.5 h-3.5 text-primary" />
                      Secure by design
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-foreground bg-white/[0.04] border border-white/10 rounded-full px-3 py-1.5">
                      <Cloud className="w-3.5 h-3.5 text-accent" />
                      Cloud native
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Visual composition (desktop) */}
            {isDesktop && (
            <div className="relative h-[420px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-md rounded-2xl bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-card overflow-hidden animate-float-slow">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="ml-2 text-xs text-muted-foreground font-mono">ci-pipeline</span>
                  </div>
                  <div className="p-5">
                    <AnimatedTerminal />
                  </div>
                </div>
              </div>

              <div className="absolute top-4 -right-2 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-card px-4 py-3 animate-float-slow-delayed">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-primary/15">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Secure by design</span>
                </div>
              </div>

              <div className="absolute bottom-8 -left-4 rounded-xl bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-card px-4 py-3 animate-float-slow-delayed-2">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-accent/15">
                    <Cloud className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-foreground">Cloud native</span>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 bg-background">
        <div className="container mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your digital transformation
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 80}>
                <Card className="p-6 h-full bg-white/[0.02] border-white/10 hover:border-primary/40 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Button asChild variant="outline" className="rounded-full border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Why Partner with Cloudimite?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 max-w-5xl mx-auto">
            {reasons.map((reason, index) => (
              <Reveal key={index} delay={(index % 3) * 100} className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <reason.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-1.5">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <Reveal key={index} delay={index * 100} className="text-center">
                <div className={`font-display text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                  <AnimatedCounter value={stat.value} />
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 px-4 border-t border-white/5">
        <div className="container mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest and most reliable technologies to build your solutions
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {techGroups.map((group, index) => (
              <Reveal key={index} delay={index * 100}>
                <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide text-muted-foreground">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-sm px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-foreground/90 hover:border-primary/40 hover:text-primary transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-4 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </Reveal>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-10">
              {process.map((step, index) => (
                <Reveal key={index} delay={index * 80} className="relative flex gap-6">
                  <div className="relative z-10 w-10 h-10 rounded-full bg-card border border-white/10 text-primary flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="pt-1.5">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-10 right-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[110px] animate-drift-slow" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[110px] animate-drift-slow-delayed" />
        <div className="container mx-auto relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center space-y-6">
            <Sparkles className="w-10 h-10 text-primary mx-auto" />
            <h2 className="font-display text-4xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you achieve your technology goals and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow-primary hover:-translate-y-0.5 transition-all">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 hover:bg-white/5 hover:-translate-y-0.5 transition-all">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
