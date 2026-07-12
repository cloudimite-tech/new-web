import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * React Router does not reset scroll position on navigation by default.
 * Without this, clicking a link while scrolled down on one page (e.g. a
 * bottom-of-page CTA) leaves you at the same scroll offset on the next
 * page, which can land you mid-page or near the bottom instead of the top.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
