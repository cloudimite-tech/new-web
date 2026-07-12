import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/cloudimite-logo.png";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-primary opacity-40" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <img src={logo} alt="Cloudimite" className="h-9 w-auto" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Where code becomes trust — software, cloud, and security built for scale.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Software Development</li>
              <li>Cloud & DevOps</li>
              <li>Security & DevSecOps</li>
              <li>Managed Services</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground text-sm">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@cloudimite.com"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={16} className="text-primary flex-shrink-0" />
                hello@cloudimite.com
              </a>
              <a
                href="tel:+94764410713"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone size={16} className="text-primary flex-shrink-0" />
                +94 76 441 0713
              </a>
              <a
                href="https://www.linkedin.com/company/cloudimite"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={16} className="text-primary flex-shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Cloudimite. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
