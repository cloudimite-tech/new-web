import { Target, Users, Award, Lightbulb, CheckCircle, Rocket, Heart, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";

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

  const whyChoose = [
    {
      title: "Expertise Across the Stack",
      description: "From frontend interfaces to backend infrastructure, cloud architecture to security protocols—we have the comprehensive expertise to handle every aspect of your project.",
    },
    {
      title: "Agile & Adaptive",
      description: "We embrace modern methodologies that allow us to deliver value quickly while remaining flexible to changing requirements and opportunities.",
    },
    {
      title: "Security-First Mindset",
      description: "Security isn't an afterthought—it's integrated into every phase of development, deployment, and operations to protect your business and your customers.",
    },
    {
      title: "Long-Term Partnership",
      description: "We're not just vendors—we're partners invested in your success, providing ongoing support, optimization, and evolution as your needs grow.",
    },
  ];

  const approach = [
    {
      icon: Rocket,
      title: "Innovation-Driven",
      description: "We stay at the forefront of technology trends, constantly exploring new tools, frameworks, and methodologies. This ensures your solutions are built with the latest best practices and can adapt to future technological shifts.",
      points: ["Continuous learning and skill development", "Regular technology evaluation and adoption", "Future-proof architecture design"],
    },
    {
      icon: Heart,
      title: "Client-Centric Focus",
      description: "Your success is our success. We take time to understand not just your technical needs, but your business goals, user personas, and market challenges. This holistic view enables us to deliver solutions that truly move the needle.",
      points: ["Regular communication and transparency", "Flexible engagement models", "Dedicated account management"],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Quality isn't negotiable. From code reviews to automated testing, from performance optimization to security audits—we have rigorous processes in place to ensure every deliverable meets the highest standards.",
      points: ["Comprehensive testing strategies", "Peer code reviews and pair programming", "Performance and security benchmarking"],
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-16 relative overflow-hidden bg-dot-grid">
        <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/15 rounded-full blur-[110px]" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
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
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
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
                Our team brings hands-on experience in software development, cloud infrastructure,
                security, and IT operations. We're built to support businesses at every stage — from
                early-stage startups shaping their first product to growing teams scaling their
                systems. Our approach is practical, scalable, and always focused on delivering real
                business value.
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
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <Reveal>
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-16">
              Our Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value, index) => (
              <Reveal key={index} delay={index * 80}>
                <Card className="p-6 h-full bg-white/[0.02] border-white/10 hover:border-primary/40 hover:bg-white/[0.04] hover:-translate-y-1 transition-all duration-300">
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-accent/10">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-20 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
                Why Choose Cloudimite
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
              {whyChoose.map((item, index) => (
                <Reveal key={index} delay={index * 80}>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
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

      {/* Our Approach */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
                Our Approach to Excellence
              </h2>
            </Reveal>
            <div className="space-y-6">
              {approach.map((item, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="p-8 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                        <item.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.points.map((point, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="px-4 py-20 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
              Our Commitment to You
            </h2>
            <Card className="p-8 bg-white/[0.02] border-white/10">
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
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <Reveal>
            <Card className="p-12 bg-white/[0.02] border-white/10 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/15 rounded-full blur-[100px] animate-drift-slow" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/15 rounded-full blur-[100px] animate-drift-slow-delayed" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Let's Build Something Great Together
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Ready to turn your vision into reality? We're excited to learn about your project
                  and show you how we can help.
                </p>
                <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow-primary hover:-translate-y-0.5 transition-all">
                  <Link to="/contact">Start a Conversation</Link>
                </Button>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default About;
