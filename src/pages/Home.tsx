import { Link } from "react-router-dom";
import { ArrowRight, Code, Cloud, Shield, Server, CheckCircle, Zap, Lock, TrendingUp, Users, Award, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Home = () => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              Where Code Becomes{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Trust
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Empowering businesses with cutting-edge software solutions, cloud infrastructure, 
              and security practices that drive innovation and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary transition-all">
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border hover:bg-card">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card group"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Partner with Cloudimite?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-card border-border hover:shadow-card transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Rapid Deployment
              </h3>
              <p className="text-muted-foreground">
                Agile methodologies and modern DevOps practices ensure faster time-to-market without compromising quality.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border hover:shadow-card transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Security First
              </h3>
              <p className="text-muted-foreground">
                Built-in security at every layer, from code to infrastructure, protecting your business and customers.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border hover:shadow-card transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Scalable Solutions
              </h3>
              <p className="text-muted-foreground">
                Architecture designed to grow with your business, handling increased load and complexity seamlessly.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border hover:shadow-card transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Expert Team
              </h3>
              <p className="text-muted-foreground">
                Certified professionals with deep expertise across multiple technologies and industry domains.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border hover:shadow-card transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Proven Track Record
              </h3>
              <p className="text-muted-foreground">
                Successfully delivered projects across industries, from startups to enterprise organizations.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border hover:shadow-card transition-all">
              <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                24/7 Support
              </h3>
              <p className="text-muted-foreground">
                Round-the-clock monitoring and support ensuring your systems are always running smoothly.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Cutting-Edge Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage the latest and most reliable technologies to build your solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Cloud Platforms</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  AWS (Amazon Web Services)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Microsoft Azure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Google Cloud Platform
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  DigitalOcean
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">Development</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  React, Vue, Angular
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Node.js, Python, Java
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  React Native, Flutter
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  PostgreSQL, MongoDB
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-gradient-card border-border">
              <h3 className="text-xl font-semibold text-foreground mb-4">DevOps Tools</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Docker & Kubernetes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Jenkins, GitLab CI/CD
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Terraform, Ansible
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Prometheus, Grafana
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures quality, transparency, and timely delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6 bg-gradient-card border-border border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Discovery & Planning</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your business objectives, technical requirements, and constraints. 
                    This phase includes stakeholder interviews, requirement gathering, and feasibility analysis 
                    to create a comprehensive project roadmap.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xl font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Design & Architecture</h3>
                  <p className="text-muted-foreground">
                    Our architects design scalable, secure, and maintainable solutions. We create detailed 
                    technical specifications, system architecture diagrams, and UI/UX designs that align 
                    with your brand and user needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Agile Development</h3>
                  <p className="text-muted-foreground">
                    Using iterative sprints, we build your solution incrementally. Regular demos and feedback 
                    sessions ensure the product evolves according to your vision. Continuous integration and 
                    automated testing maintain high code quality.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xl font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Deployment & Launch</h3>
                  <p className="text-muted-foreground">
                    We handle the complete deployment process, from infrastructure provisioning to production 
                    deployment. Our DevOps team ensures zero-downtime deployments with comprehensive monitoring 
                    and rollback strategies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-border border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xl font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Support & Evolution</h3>
                  <p className="text-muted-foreground">
                    Post-launch, we provide ongoing maintenance, performance optimization, and feature 
                    enhancements. Our 24/7 support team monitors your systems and responds quickly to any 
                    issues, ensuring continuous improvement.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-card" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-glow-pulse" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help you achieve your technology goals and drive innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-gradient-accent text-accent-foreground hover:shadow-glow-accent">
                <Link to="/contact">
                  Start Your Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
