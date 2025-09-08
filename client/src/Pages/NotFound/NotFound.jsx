import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const visualRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = 45 / (width / height);
      if (visualRef.current) {
        visualRef.current.style.transform = `translate(-50%, -50%) rotate(-${ratio}deg)`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, []);

  return (
    <div className="not-found-page">
      <Link to="/">
        <svg
          height="0.8em"
          width="0.8em"
          viewBox="0 0 2 1"
          preserveAspectRatio="none"
        >
          <polyline
            fill="none"
            stroke="#777777"
            strokeWidth="0.1"
            points="0.9,0.1 0.1,0.5 0.9,0.9"
          />
        </svg>{" "}
        Home
      </Link>

      <div className="background-wrapper">
        <h1 id="visual" ref={visualRef}>
          404
        </h1>
      </div>

      <p>The page you’re looking for does not exist.</p>
    </div>
  );
}