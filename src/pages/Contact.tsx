import { useState } from "react";
import { Mail, Phone, Linkedin, Send, MessageSquare, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import Reveal from "@/components/Reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try{
      const formspreeId = import.meta.env.VITE_FORMSPREE_FORM_ID;
      if (!formspreeId) {
        throw new Error('Formspree Form ID not configured');
      }
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Contact Form Submission - Cloudimite',
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    }catch(err){
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    }finally{
       setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary based on scope and complexity. A simple web application might take 4-8 weeks, while enterprise solutions can take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements." },
    { q: "What is your pricing model?", a: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. After understanding your needs, we'll provide a transparent quote with no hidden fees. We believe in clear, upfront pricing that aligns with your budget." },
    { q: "Do you provide post-launch support?", a: "Absolutely! We offer comprehensive maintenance and support packages including 24/7 monitoring, bug fixes, performance optimization, and feature enhancements. We're committed to your long-term success, not just the initial launch." },
    { q: "Can you work with our existing systems?", a: "Yes! We specialize in system integration and can work with your existing infrastructure. Whether you need to modernize legacy systems, integrate new tools, or build bridges between different platforms, we have the expertise to make it seamless." },
    { q: "How do you ensure project security?", a: "Security is integrated into every phase of our process. We follow industry best practices including secure coding standards, regular security audits, penetration testing, and compliance with relevant regulations (GDPR, HIPAA, etc.). All data is encrypted and access is strictly controlled." },
    { q: "What technologies do you specialize in?", a: "We work with modern, proven technologies including React, Node.js, Python, AWS, Azure, Docker, Kubernetes, and more. We're technology-agnostic and select the best tools for your specific needs rather than forcing a one-size-fits-all approach." },
  ];

  const working = [
    { icon: MessageSquare, title: "Clear Communication", description: "Regular updates, transparent reporting, and open channels ensure you're always in the loop about your project's progress." },
    { icon: Clock, title: "Timely Delivery", description: "We respect deadlines and use proven project management methodologies to ensure on-time delivery without compromising quality." },
    { icon: CheckCircle, title: "Quality Guarantee", description: "Every deliverable goes through rigorous testing and quality assurance to meet our high standards and your expectations." },
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
              Get in <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Let's discuss how we can help transform your business with technology
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-4 py-20 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Reveal className="space-y-8">
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                  Let's Start a Conversation
                </h2>
                <p className="text-muted-foreground">
                  Whether you have a project in mind, need technical consultation,
                  or just want to learn more about our services, we're here to help.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="p-6 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
                      <a
                        href="mailto:hello@cloudimite.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        hello@cloudimite.com
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
                      <a
                        href="tel:+94764410713"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +94 76 441 0713
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
                      <a
                        href="https://www.linkedin.com/company/cloudimite"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        linkedin.com/company/cloudimite
                      </a>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  What to Expect
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Custom solution proposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparent pricing and timeline</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* Contact Form */}
            <Reveal delay={120}>
            <Card className="p-8 bg-white/[0.02] border-white/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="bg-background border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="bg-background border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="bg-background border-white/10"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    rows={5}
                    className="bg-background border-white/10 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow-primary"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send className="ml-2" size={16} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
                Frequently Asked Questions
              </h2>
            </Reveal>
            <div className="space-y-4">
              {faqs.map((item, index) => (
                <Reveal key={index} delay={(index % 3) * 80}>
                  <Card className="p-6 bg-white/[0.02] border-white/10 hover:border-primary/30 transition-colors">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.q}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-4 py-20 bg-background border-t border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display text-4xl font-bold text-foreground text-center mb-12">
                Working with Cloudimite
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-6">
              {working.map((item, index) => (
                <Reveal key={index} delay={index * 100}>
                  <Card className="p-6 h-full bg-white/[0.02] border-white/10 hover:border-primary/30 hover:-translate-y-1 transition-all text-center">
                    <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
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
    </div>
  );
};

export default Contact;
