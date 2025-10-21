import React from "react";
import { useState, useEffect, useRef } from "react";

/* ================= Intersection Observer ================= */
function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1, ...options }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return ref;
}

function StatCard({ number, label }) {
  const cardRef = useIntersectionObserver();
  return (
    <div
      ref={cardRef}
      className="stat"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="stat-number">{number}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatusSection() {
  return (
    <>
      <section className="section stats">
        <div>
          <div className="stats-grid">
            <StatCard number="10+" label="Projects delivered" />
            <StatCard number="A+" label="Lighthouse grade" />
            <StatCard number="48h" label="Small site turnaround" />
            <StatCard number="100%" label="Client satisfaction" />
          </div>
        </div>
      </section>
    </>
  );
}
