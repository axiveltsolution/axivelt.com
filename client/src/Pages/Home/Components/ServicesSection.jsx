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
        <div className="services-header">
          <span className="badge-label text-red">Our Expertise</span>
          <h2 className="services-title">
            Software & Web Development Services
          </h2>
          <p className="services-subtitle">
            Comprehensive solutions Sri Lankan businesses trust. Fixed timelines
            and expert execution from discovery to launch.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className="glass-card services-card">
              <div className="services-icon-wrapper">
                <s.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="services-card-title">{s.title}</h3>
              <p className="services-card-desc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
