import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ======= Project images (Keeping your existing local imports) ======= */
import EasyneatImg from "../../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend.jpg";
import MotogearInventoryImg from "../../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import AroundLankaTravelsImg from "../../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-hero.jpg";

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

function ProjectCard({ href, website, title, description, image, tags }) {
  const navigate = useNavigate();
  const cardRef = useIntersectionObserver();

  return (
    /* We use the global glass-card class, and add portfolio__card for specific tweaks */
    <article ref={cardRef} className="glass-card portfolio__card">
      <div
        className="portfolio__image-wrapper"
        onClick={() => href && navigate(href)}>
        <img
          src={image}
          alt={title}
          className="portfolio__img"
          loading="lazy"
        />
        <div className="portfolio__overlay">
          <span className="portfolio__overlay-btn">View Case Study</span>
        </div>
      </div>

      <div className="portfolio__content">
        <h3 className="portfolio__title">{title}</h3>

        <div className="portfolio__tags">
          {tags.map((tag, i) => (
            <span key={i} className="portfolio__tag">
              {tag}
            </span>
          ))}
        </div>

        <p className="portfolio__desc">{description.slice(0, 110)}...</p>

        {/* The restored, highly professional visit link */}
        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio__link">
            Visit Project <span className="arrow">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

export default function RecentWorkSection() {
  return (
    <section id="projects" className="section portfolio">
      <div className="container">
        <div className="portfolio__header">
          <div className="portfolio__header-text">
            <span className="badge-label text-red">Selected Works</span>
            <h2 className="portfolio__heading">
              Custom Projects <br />
              We've Built
            </h2>
          </div>
          <Link to="#contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>

        <div className="portfolio__grid">
          <ProjectCard
            href="/projects/easyNeat-cleaning-service-booking-platform"
            website="https://easyneat.com.au"
            title="EasyNeat Platform"
            description="Complete booking platform for Victoria's leading eco-friendly cleaning service. Features real-time booking, payment integration, and customer dashboards."
            image={EasyneatImg}
            tags={["Web App", "React", "Australia"]}
          />
          <ProjectCard
            href="/projects/motogear-inventory-management-system"
            website=""
            title="MotoGear POS"
            description="Professional inventory management system with stock tracking, POS system, and sales analytics dashboards for retail stores."
            image={MotogearInventoryImg}
            tags={["Inventory", "POS", "Retail"]}
          />
          <ProjectCard
            href="/projects/around-lanka-travels-tour-booking-platform"
            website="https://aroundlankatravels.com/"
            title="Around Lanka"
            description="Complete travel agency platform featuring advanced tour booking, destination galleries, and an automated inquiry management system."
            image={AroundLankaTravelsImg}
            tags={["Travel", "Booking", "Tourism"]}
          />
        </div>
      </div>
    </section>
  );
}
