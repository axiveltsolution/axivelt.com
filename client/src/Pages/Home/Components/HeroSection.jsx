import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function RotatingText({ words, interval = 3000 }) {
  const [index, setIndex] = React.useState(0);
  const measureRef = useRef(null);
  const [widthPx, setWidthPx] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval
    );
    return () => clearInterval(id);
  }, [words.length, interval]);

  React.useEffect(() => {
    const root = measureRef.current;
    if (!root) return;
    const items = root.querySelectorAll("[data-word]");
    let max = 0;
    items.forEach((el) => {
      const w = el.getBoundingClientRect().width;
      if (w > max) max = w;
    });
    setWidthPx(Math.ceil(max));
    const onResize = () => {
      let m = 0;
      items.forEach((el) => {
        const w = el.getBoundingClientRect().width;
        if (w > m) m = w;
      });
      setWidthPx(Math.ceil(m));
    };
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
    <section className="hero">
      <div className="hero-sec-bg-img" />
      <div className="hero-content">
        <div className="badge">🇱🇰 Sri Lanka • Serving Colombo & Beyond</div>
        <h1 className="title">
          <span className="title-line">We build</span>
          <span className="title-line title-rotator">
            <RotatingText words={rotatingWords} />
          </span>
          <span className="title-line">web experiences.</span>
        </h1>
        <p className="sub-title">
          Leading web development company in Sri Lanka specializing in custom
          websites, web applications, and inventory management systems. Built
          with React, Node.js, and modern technologies for businesses in Colombo
          and across the island.
        </p>
        <div className="actions">
          <Link to="#get-a-quote" className="btn btn-primary">
            Get Your Free Quote
          </Link>
          <Link to="#projects" className="btn btn-secondary">
            View Our Portfolio
          </Link>
          <a
            href="mailto:axiveltofficial@gmail.com"
            className="btn btn-outline"
            aria-label="Email Axivelt Solutions for web development services">
            Email Us
          </a>
          <a
            href="https://wa.me/94700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            aria-label="WhatsApp Axivelt Solutions">
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
