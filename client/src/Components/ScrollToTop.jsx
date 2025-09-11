import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Always scroll to top on pathname changes.
 * If there's a hash (/#about, /#projects, /#faq), scroll to that element instead.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  // When path changes and there's NO hash → go to top
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // 'auto' = instant
    }
  }, [pathname, hash]);

  // When there's a hash → scroll to the target after render
  useEffect(() => {
    if (!hash) return;
    const id = setTimeout(() => {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  return null;
}
