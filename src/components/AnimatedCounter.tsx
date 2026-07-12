import { useEffect, useMemo, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

/**
 * Counts up from 0 to the numeric part of `value` once it scrolls into
 * view, preserving any non-numeric prefix/suffix (e.g. "4+", "99.9%",
 * "24/7"). Respects prefers-reduced-motion by rendering the final value
 * immediately.
 */
const AnimatedCounter = ({ value, duration = 1400, className = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  // Memoized so this stays referentially stable across re-renders triggered
  // by the animation itself (setDisplay) — otherwise the effect below would
  // see a "new" dependency on every tick and restart the whole animation
  // from scratch in an endless loop.
  const match = useMemo(() => value.match(/^([\d.]+)(.*)$/), [value]);
  const [display, setDisplay] = useState(match ? "0" + match[2] : value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !match) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    let rafId = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            setDisplay((isDecimal ? current.toFixed(1) : Math.round(current).toString()) + suffix);
            if (progress < 1) {
              rafId = requestAnimationFrame(tick);
            }
          };
          rafId = requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, [value, duration, match]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default AnimatedCounter;
