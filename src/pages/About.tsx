import { Target, Users, Award, Lightbulb, CheckCircle, Rocket, Heart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Delivering excellence in every line of code and every client interaction",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority, building lasting partnerships",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Uncompromising standards in security, performance, and reliability",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying ahead with cutting-edge technologies and best practices",
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
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Cloudimite</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Building the future of technology, one solution at a time
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Cloudimite was founded with a simple yet powerful vision: to bridge the gap between 
                innovative technology and business success. In today's rapidly evolving digital landscape, 
                we recognized that businesses need more than just software—they need a trusted partner 
                who understands both technology and business objectives.
              </p>
              <p>
                Our team brings together decades of combined experience in software development, cloud 
                infrastructure, security, and IT operations. We've worked with startups finding their 
                footing and enterprises scaling to new heights. This diverse experience has shaped our 
                approach: practical, scalable, and always focused on delivering real business value.
              </p>
              <p>
                At Cloudimite, we believe that great technology should be accessible, reliable, and 
                transformative. Whether it's building a custom application, migrating to the cloud, 
                or securing your infrastructure, we're committed to making your code trustworthy and 
                your business successful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-accent/10">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Why Choose Cloudimite
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Expertise Across the Stack
                </h3>
                <p className="text-muted-foreground">
                  From frontend interfaces to backend infrastructure, cloud architecture to security 
                  protocols—we have the comprehensive expertise to handle every aspect of your project.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Agile & Adaptive
                </h3>
                <p className="text-muted-foreground">
                  We embrace modern methodologies that allow us to deliver value quickly while 
                  remaining flexible to changing requirements and opportunities.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Security-First Mindset
                </h3>
                <p className="text-muted-foreground">
                  Security isn't an afterthought—it's integrated into every phase of development, 
                  deployment, and operations to protect your business and your customers.
                </p>
              </Card>
              <Card className="p-6 bg-gradient-card border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Long-Term Partnership
                </h3>
                <p className="text-muted-foreground">
                  We're not just vendors—we're partners invested in your success, providing ongoing 
                  support, optimization, and evolution as your needs grow.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Our Approach to Excellence
            </h2>
            <div className="space-y-8">
              <Card className="p-8 bg-gradient-card border-border border-l-4 border-l-primary">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Innovation-Driven</h3>
                    <p className="text-muted-foreground mb-4">
                      We stay at the forefront of technology trends, constantly exploring new tools, frameworks, 
                      and methodologies. This ensures your solutions are built with the latest best practices 
                      and can adapt to future technological shifts.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Continuous learning and skill development
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Regular technology evaluation and adoption
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Future-proof architecture design
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-border border-l-4 border-l-accent">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-accent/10 flex-shrink-0">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Client-Centric Focus</h3>
                    <p className="text-muted-foreground mb-4">
                      Your success is our success. We take time to understand not just your technical needs, 
                      but your business goals, user personas, and market challenges. This holistic view enables 
                      us to deliver solutions that truly move the needle.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Regular communication and transparency
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Flexible engagement models
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-accent" />
                        Dedicated account management
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-card border-border border-l-4 border-l-primary">
                <div className="flex items-start gap-6">
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">Quality Assurance</h3>
                    <p className="text-muted-foreground mb-4">
                      Quality isn't negotiable. From code reviews to automated testing, from performance 
                      optimization to security audits—we have rigorous processes in place to ensure every 
                      deliverable meets the highest standards.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Comprehensive testing strategies
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Peer code reviews and pair programming
                      </li>
                      <li className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        Performance and security benchmarking
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground text-center mb-12">
              Our Commitment to You
            </h2>
            <Card className="p-8 bg-gradient-card border-border">
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  At Cloudimite, we understand that choosing a technology partner is a critical business 
                  decision. That's why we're committed to being more than just a service provider—we're 
                  your strategic technology ally.
                </p>
                <p>
                  <strong className="text-foreground">Transparent Communication:</strong> We believe in 
                  open, honest dialogue. You'll always know the status of your project, any challenges 
                  we're facing, and the solutions we're implementing.
                </p>
                <p>
                  <strong className="text-foreground">On-Time Delivery:</strong> We respect your time and 
                  business objectives. Our project management practices ensure we meet deadlines without 
                  compromising on quality.
                </p>
                <p>
                  <strong className="text-foreground">Budget Consciousness:</strong> We work within your 
                  budget constraints, providing cost-effective solutions and clear pricing with no hidden 
                  fees or surprises.
                </p>
                <p>
                  <strong className="text-foreground">Continuous Improvement:</strong> Technology evolves, 
                  and so should your solutions. We're committed to keeping your systems updated, optimized, 
                  and aligned with the latest industry standards.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <Card className="p-12 bg-gradient-card border-border text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to turn your vision into reality? We're excited to learn about your project 
                and show you how we can help.
              </p>
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:shadow-glow-primary">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
