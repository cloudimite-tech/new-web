import { useEffect, useState } from "react";

/**
 * Tracks whether a CSS media query currently matches. Used to conditionally
 * mount (not just CSS-hide) components that differ between breakpoints —
 * e.g. so an animated component doesn't keep running its timers off-screen
 * on the breakpoint where it's hidden.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(query).matches : false
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);
    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}
