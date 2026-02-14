import React from "react";
import { Monitor, Cpu, Package, BarChart3, Settings, Zap } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Custom Websites",
    desc: "High-performance, responsive business websites built with React and modern tech.",
  },
  {
    icon: Cpu,
    title: "Web Applications",
    desc: "Scalable portals and SaaS platforms designed for complex business logic.",
  },
  {
    icon: Package,
    title: "Inventory & ERP",
    desc: "Complete business systems for stock tracking, order processing, and reporting.",
  },
  {
    icon: BarChart3,
    title: "SEO & Performance",
    desc: "Technical optimization to ensure your brand ranks higher and loads faster.",
  },
  {
    icon: Settings,
    title: "Maintenance",
    desc: "24/7 support, security updates, and automated backups for peace of mind.",
  },
  {
    icon: Zap,
    title: "Migrations",
    desc: "Zero-downtime deployment for moving, modernizing, or fixing legacy code.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section services">
      <div className="container">
        {/* Header Block */}
        <div className="services__header">
          <span className="badge-label text-red">Our Expertise</span>
          <h2 className="services__title">
            Software & Web Development Services
          </h2>
          <p className="services__subtitle">
            Comprehensive solutions Sri Lankan businesses trust. Fixed timelines
            and expert execution from discovery to launch.
          </p>
        </div>

        {/* Ghost Grid Layout */}
        <div className="services__grid">
          {services.map((s, i) => (
            /* We use your global glass-card class right here! */
            <article key={i} className="glass-card services__card">
              <div className="services__icon-wrapper">
                <s.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="services__card-title">{s.title}</h3>
              <p className="services__card-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
