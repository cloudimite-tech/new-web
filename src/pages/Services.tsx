import { Code, Cloud, Shield, Server, ChevronRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. From web applications to mobile apps, we build scalable and efficient software.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration"],
      accent: "primary" as const,
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description: "Streamline your operations with modern cloud infrastructure and DevOps practices. We help you deploy faster and scale effortlessly.",
      features: ["Cloud Migration", "CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration"],
      accent: "primary" as const,
    },
    {
      icon: Shield,
      title: "Security & DevSecOps",
      description: "Integrate security into every stage of development. Protect your applications and infrastructure with our comprehensive security solutions.",
      features: ["Security Audits", "Vulnerability Assessment", "Compliance Management", "Security Automation"],
      accent: "accent" as const,
    },
    {
      icon: Server,
      title: "Managed Services & Support",
      description: "Focus on your business while we manage your infrastructure. 24/7 monitoring, maintenance, and expert support for your peace of mind.",
      features: ["24/7 Monitoring", "Performance Optimization", "Backup & Recovery", "Technical Support"],
      accent: "accent" as const,
    },
  ];

  const process = [
    { title: "Discovery", description: "We start by understanding your business, challenges, and goals to craft the perfect solution." },
    { title: "Development", description: "Using agile methodologies, we build, test, and iterate to deliver quality results quickly." },
    { title: "Support", description: "Post-launch, we provide ongoing support, monitoring, and optimization for continued success." },
  ];

  const benefits = [
    { title: "Reduced Time to Market", description: "Our streamlined processes and automation tools accelerate development cycles, getting your products to market faster than traditional approaches." },
    { title: "Cost Optimization", description: "Through efficient resource utilization, cloud optimization, and automation, we help reduce operational costs while maintaining high performance." },
    { title: "Enhanced Reliability", description: "Built-in redundancy, automated monitoring, and proactive maintenance ensure your systems are always available when you need them." },
    { title: "Future-Ready Architecture", description: "We design systems that can evolve with your business, supporting new features and scaling to meet growing demands without major rewrites." },
    { title: "Comprehensive Documentation", description: "Clear, thorough documentation ensures your team can understand, maintain, and extend the systems we build." },
    { title: "Knowledge Transfer", description: "We don't just deliver solutions—we empower your team with training and knowledge sharing for long-term success." },
  ];

  const industries = [
    { title: "FinTech", description: "Secure payment processing, banking applications, and financial management platforms with compliance and data protection built-in." },
    { title: "Healthcare", description: "HIPAA-compliant systems, telemedicine platforms, and healthcare management solutions focused on patient data security." },
    { title: "E-Commerce", description: "Scalable online stores, inventory management, and payment integration with performance optimization for high-traffic periods." },
    { title: "SaaS", description: "Multi-tenant architectures, subscription management, and analytics dashboards for software-as-a-service businesses." },
    { title: "Education", description: "Learning management systems, student portals, and collaborative platforms designed for educational institutions." },
    { title: "Startups", description: "MVP development, rapid prototyping, and scalable architectures that grow with your startup from idea to enterprise." },
  ];

  const packages = [
    {
      title: "Project-Based",
      description: "Fixed scope and timeline with defined deliverables. Perfect for specific projects with clear requirements.",
      points: ["Fixed budget and timeline", "Detailed project plan", "Clear milestones"],
      popular: false,
    },
    {
      title: "Dedicated Team",
      description: "Ongoing partnership with a dedicated team that becomes an extension of your in-house capabilities.",
      points: ["Flexible scope adjustments", "Long-term collaboration", "Priority support"],
      popular: true,
    },
    {
      title: "Staff Augmentation",
      description: "Skilled professionals integrated into your existing team to fill specific skill gaps or scale capacity.",
      points: ["Rapid onboarding", "Direct management", "Flexible duration"],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-16 relative overflow-hidden bg-dot-grid">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-accent/15 rounded-full blur-[110px]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive IT solutions designed to accelerate your digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 100}>
                <Card className="p-8 h-full bg-white/[0.02] border-white/10 hover:border-primary/40 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300 group">
                  <div
                    className={`mb-6 inline-flex p-4 rounded-xl transition-colors ${
                      service.accent === "primary"
                        ? "bg-primary/10 group-hover:bg-primary/20"
                        : "bg-accent/10 group-hover:bg-accent/20"
                    }`}
                  >
                    <service.icon className={`w-8 h-8 ${service.accent === "primary" ? "text-primary" : "text-accent"}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-foreground text-sm">
                        <ChevronRight className={`w-4 h-4 ${service.accent === "primary" ? "text-primary" : "text-accent"}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className={`rounded-full w-full ${
                      service.accent === "primary"
                        ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                        : "border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">
                Our Approach
              </h2>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="p-6 h-full bg-white/[0.02] border-white/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 text-center">
                    <div className="w-11 h-11 rounded-full bg-primary/15 text-primary flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
                The Cloudimite Advantage
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              {benefits.map((item, index) => (
                <Reveal key={index} delay={(index % 2) * 100}>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-6">
                Industries We Serve
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                Our expertise spans across multiple industries, delivering tailored solutions
                that address unique challenges and requirements.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-4">
              {industries.map((item, index) => (
                <Reveal key={index} delay={(index % 3) * 80}>
                  <Card className="p-6 h-full bg-white/[0.02] border-white/10 hover:border-primary/40 hover:-translate-y-1 transition-all">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="px-4 py-20 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
                Flexible Engagement Models
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card
                    className={`p-8 h-full text-center transition-all relative hover:-translate-y-1 ${
                      pkg.popular
                        ? "bg-white/[0.04] border-2 border-primary/50"
                        : "bg-white/[0.02] border-white/10"
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-primary-foreground text-xs font-semibold">
                        Popular
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-foreground mb-4">{pkg.title}</h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      {pkg.description}
                    </p>
                    <ul className="text-left space-y-2">
                      {pkg.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <Reveal>
            <Card className="p-12 bg-white/[0.02] border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-[110px] animate-drift-slow" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/15 rounded-full blur-[110px] animate-drift-slow-delayed" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help transform your business and accelerate
                  your digital journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow-primary hover:-translate-y-0.5 transition-all">
                    <Link to="/contact">Contact Us Today</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full border-white/15 hover:bg-white/5 hover:-translate-y-0.5 transition-all">
                    <Link to="/about">Learn More About Us</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
