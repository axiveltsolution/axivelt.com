import React, { useEffect, useRef } from "react";

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
      { threshold: 0.1, ...options },
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);
  return ref;
}

function StatCard({ number, label }) {
  const cardRef = useIntersectionObserver();
  return (
    <div
      ref={cardRef}
      className="stats-item"
      style={{
        opacity: 0,
        transform: "translateY(20px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="stats-num">{number}</div>
      <div className="stats-label text-red">{label}</div>
    </div>
  );
}

export default function StatusSection() {
  return (
    <section className="section stats">
      <div className="container">
        <div className="stats-grid">
          <StatCard number="10+" label="Successful Projects" />
          <StatCard number="100%" label="Client Satisfaction" />
          <StatCard number="99%" label="Uptime Guarantee" />
          <StatCard number="24/7" label="Technical Support" />
        </div>
      </div>
    </section>
  );
}
