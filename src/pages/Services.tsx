import { Code, Cloud, Shield, Server, ChevronRight, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. From web applications to mobile apps, we build scalable and efficient software.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration",
      ],
      color: "primary",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Services",
      description: "Streamline your operations with modern cloud infrastructure and DevOps practices. We help you deploy faster and scale effortlessly.",
      features: [
        "Cloud Migration",
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Container Orchestration",
      ],
      color: "primary",
    },
    {
      icon: Shield,
      title: "Security & DevSecOps",
      description: "Integrate security into every stage of development. Protect your applications and infrastructure with our comprehensive security solutions.",
      features: [
        "Security Audits",
        "Vulnerability Assessment",
        "Compliance Management",
        "Security Automation",
      ],
      color: "accent",
    },
    {
      icon: Server,
      title: "Managed Services & Support",
      description: "Focus on your business while we manage your infrastructure. 24/7 monitoring, maintenance, and expert support for your peace of mind.",
      features: [
        "24/7 Monitoring",
        "Performance Optimization",
        "Backup & Recovery",
        "Technical Support",
      ],
      color: "accent",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className={`mb-6 inline-flex p-4 rounded-xl bg-${service.color}/10 group-hover:bg-${service.color}/20 transition-colors`}>
                  <service.icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-foreground">
                      <ChevronRight className={`w-4 h-4 text-${service.color}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  asChild 
                  variant="outline" 
                  className={`border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-${service.color}-foreground w-full`}
                >
                  <Link to="/contact">Learn More</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-16">
              Our Approach
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-gradient-card border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Discovery
                </h3>
                <p className="text-muted-foreground">
                  We start by understanding your business, challenges, and goals to craft the perfect solution.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Development
                </h3>
                <p className="text-muted-foreground">
                  Using agile methodologies, we build, test, and iterate to deliver quality results quickly.
                </p>
              </Card>

              <Card className="p-6 bg-gradient-card border-border text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Support
                </h3>
                <p className="text-muted-foreground">
                  Post-launch, we provide ongoing support, monitoring, and optimization for continued success.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              The Cloudimite Advantage
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Reduced Time to Market
                </h3>
                <p className="text-muted-foreground">
                  Our streamlined processes and automation tools accelerate development cycles, 
                  getting your products to market faster than traditional approaches.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Cost Optimization
                </h3>
                <p className="text-muted-foreground">
                  Through efficient resource utilization, cloud optimization, and automation, 
                  we help reduce operational costs while maintaining high performance.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Enhanced Reliability
                </h3>
                <p className="text-muted-foreground">
                  Built-in redundancy, automated monitoring, and proactive maintenance ensure 
                  your systems are always available when you need them.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Future-Ready Architecture
                </h3>
                <p className="text-muted-foreground">
                  We design systems that can evolve with your business, supporting new features 
                  and scaling to meet growing demands without major rewrites.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Comprehensive Documentation
                </h3>
                <p className="text-muted-foreground">
                  Clear, thorough documentation ensures your team can understand, maintain, 
                  and extend the systems we build.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Knowledge Transfer
                </h3>
                <p className="text-muted-foreground">
                  We don't just deliver solutions—we empower your team with training and 
                  knowledge sharing for long-term success.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Industries We Serve
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Our expertise spans across multiple industries, delivering tailored solutions 
              that address unique challenges and requirements.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">FinTech</h3>
                <p className="text-muted-foreground">
                  Secure payment processing, banking applications, and financial management platforms 
                  with compliance and data protection built-in.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare</h3>
                <p className="text-muted-foreground">
                  HIPAA-compliant systems, telemedicine platforms, and healthcare management solutions 
                  focused on patient data security.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">E-Commerce</h3>
                <p className="text-muted-foreground">
                  Scalable online stores, inventory management, and payment integration with 
                  performance optimization for high-traffic periods.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border hover:border-accent/50 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">SaaS</h3>
                <p className="text-muted-foreground">
                  Multi-tenant architectures, subscription management, and analytics dashboards 
                  for software-as-a-service businesses.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border hover:border-accent/50 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">Education</h3>
                <p className="text-muted-foreground">
                  Learning management systems, student portals, and collaborative platforms 
                  designed for educational institutions.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border hover:border-accent/50 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3">Startups</h3>
                <p className="text-muted-foreground">
                  MVP development, rapid prototyping, and scalable architectures that grow 
                  with your startup from idea to enterprise.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Flexible Engagement Models
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-gradient-card border-border text-center hover:shadow-card transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-4">Project-Based</h3>
                <p className="text-muted-foreground mb-6">
                  Fixed scope and timeline with defined deliverables. Perfect for specific projects 
                  with clear requirements.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Fixed budget and timeline
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Detailed project plan
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Clear milestones
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-card border-border border-primary text-center hover:shadow-card transition-all relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary rounded-full text-primary-foreground text-sm font-semibold">
                  Popular
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Dedicated Team</h3>
                <p className="text-muted-foreground mb-6">
                  Ongoing partnership with a dedicated team that becomes an extension of your 
                  in-house capabilities.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Flexible scope adjustments
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Long-term collaboration
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    Priority support
                  </li>
                </ul>
              </Card>

              <Card className="p-8 bg-gradient-card border-border text-center hover:shadow-card transition-all">
                <h3 className="text-2xl font-bold text-foreground mb-4">Staff Augmentation</h3>
                <p className="text-muted-foreground mb-6">
                  Skilled professionals integrated into your existing team to fill specific 
                  skill gaps or scale capacity.
                </p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    Rapid onboarding
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    Direct management
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    Flexible duration
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-card border-border text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-glow-pulse" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how our services can help transform your business and accelerate 
                your digital journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                  <Link to="/contact">Contact Us Today</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Services;
