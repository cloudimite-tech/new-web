import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-dot-grid">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-drift-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-drift-slow-delayed" />

      <div className="relative z-10 text-center max-w-lg mx-auto space-y-6 animate-fade-in">
        <div className="inline-flex p-4 rounded-2xl bg-primary/10 border border-primary/20">
          <Compass className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-7xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            404
          </h1>
          <p className="text-xl font-semibold text-foreground mb-2">
            This page took a wrong turn
          </p>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or may have moved.
          </p>
        </div>
        <Button asChild size="lg" className="rounded-full bg-gradient-primary text-primary-foreground font-semibold hover:shadow-glow-primary hover:-translate-y-0.5 transition-all">
          <Link to="/">
            <ArrowLeft className="mr-2" size={18} />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
