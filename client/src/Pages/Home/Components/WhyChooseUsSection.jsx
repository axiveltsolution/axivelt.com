import React from "react";
import { Link } from "react-router-dom";
import {
  Boxes,
  Target,
  DollarSign,
  TrendingUp,
  RotateCw,
  LifeBuoy,
} from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "End-to-End Solutions",
    text: "From concept to deployment, we handle custom software development, database design, and API integrations.",
  },
  {
    icon: Target,
    title: "Business-Focused",
    text: "We don't just write code—we solve business problems to drive measurable ROI for your organization.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    text: "Fixed-price quotes with detailed breakdowns. Enterprise-quality software at competitive Sri Lankan rates.",
  },
  {
    icon: TrendingUp,
    title: "Modern & Scalable",
    text: "Built with React and Node.js. Your software scales effortlessly as your business grows.",
  },
  {
    icon: RotateCw,
    title: "Agile Process",
    text: "Weekly demos and continuous feedback. You'll see progress every week with no waiting months for results.",
  },
  {
    icon: LifeBuoy,
    title: "24/7 Support",
    text: "Round-the-clock monitoring and regular updates to ensure your software stays secure and fast.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="section why">
      <div className="container">
        <div className="why-header">
          <div className="why-header-left">
            <span className="badge-label text-red">The Axivelt Advantage</span>
            <h2 className="why-title">
              Why Choose Our <br />
              Software Solutions?
            </h2>
            <p className="why-subtitle">
              Leading software solutions company delivering enterprise
              applications and business automation.
            </p>
          </div>
          <div className="why-header-right">
            <Link to="#contact" className="btn btn-outline">
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="why-grid">
          {features.map((f, i) => (
            <article key={i} className="glass-card why-card">
              <div className="why-icon">
                <f.icon strokeWidth={1.5} size={32} />
              </div>
              <h3 className="why-card-title">{f.title}</h3>
              <p className="why-card-text">{f.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
