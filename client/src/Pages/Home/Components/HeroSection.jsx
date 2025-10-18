import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import bgImg from "./../../../assets/bgimg.jpg";

/* ================= RotatingText ================= */
function RotatingText({ words, interval = 3000 }) {
  const [index, setIndex] = useState(0);
  const [widthPx, setWidthPx] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  const computeWidth = () => {
    const root = measureRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-word]");
    let max = 0;
    items.forEach((el) => {
      const w = el.getBoundingClientRect().width;
      if (w > max) max = w;
    });
    setWidthPx(Math.ceil(max));
  };

  useEffect(() => {
    computeWidth();
    const onResize = () => computeWidth();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [words]);

  return (
    <>
      <span
        className="rotator"
        style={{ width: widthPx ? `${widthPx}px` : undefined, height: "1em" }}
        aria-live="polite"
        aria-atomic="true">
        {words.map((w, i) => (
          <span key={w} className={`word ${i === index ? "active" : ""}`}>
            {w}
          </span>
        ))}
      </span>

      {/* Hidden measurer */}
      <span className="rotator-measure" ref={measureRef} aria-hidden="true">
        {words.map((w) => (
          <span key={`m-${w}`} data-word className="word-measure">
            {w}
          </span>
        ))}
      </span>
    </>
  );
}

export default function HeroSection() {
  const rotatingWords = ["fast", "beautiful", "secure", "scalable"];
  return (
    <>
      <section
        className="section hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.47)), url(${bgImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}>
        <div className="container">
          <div className="badge">🇱🇰 Sri Lanka • Remote-first</div>

          <h1 className="title">
            <span className="title-line">We build</span>
            <span className="title-line title-rotator">
              <RotatingText words={rotatingWords} />
            </span>
            <span className="title-line">web experiences.</span>
          </h1>

          <p className="sub">
            Websites, web apps, and inventory systems engineered with React,
            Node.js, and WordPress. We also handle maintenance &amp; SEO. so you
            can focus on growing your business.
          </p>

          <div className="actions">
            <Link to="/contact" className="btn btn-primary">
              Start a project
            </Link>
            <Link to="/our-projects" className="btn btn-secondary">
              View our work
            </Link>
            <a
              href="mailto:axiveltofficial@gmail.com"
              className="btn btn-outline"
              aria-label="Send us an email">
              Email us
            </a>
            <a
              href="https://wa.me/94700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              aria-label="Contact us on WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
