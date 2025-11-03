// Hooks/Lenis-Scrolling.jsx
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScrolling() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);
}
