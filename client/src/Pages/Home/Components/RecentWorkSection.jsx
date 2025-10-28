import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

/* ======= Project images (local) ======= */
import imgGadgetHub from "../../../assets/projects/gadgethub/img1.webp";
import imgEasyNeat from "../../../assets/projects/easyneat/img1.webp";
import imgElinapix from "../../../assets/projects/elinapix/img1.webp";

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

function ProjectCard({
  href,
  website,
  title,
  description,
  image,
  tags,
  websiteLabel = "Visit website",
}) {
  const navigate = useNavigate();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const cardRef = useIntersectionObserver();

  const onExternalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <article
      ref={cardRef}
      className="work"
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
      onKeyDown={(e) => {
        if (!href) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(href);
        }
      }}>
      <div className="work-thumb">
        {!imageError ? (
          <img
            className="work-img"
            src={image}
            alt={`${title} - custom website development by Axivelt Solutions Sri Lanka`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            onClick={() => href && navigate(href)}
          />
        ) : (
          <div className="image-fallback">
            <div className="project-placeholder">{title?.charAt(0) || "P"}</div>
          </div>
        )}
        {!imageLoaded && !imageError && <div className="image-placeholder" />}
      </div>

      <div className="work-body">
        <h3 className="work-title">{title}</h3>
        <p className="muted work-tag">
          {readMore
            ? description
            : description.slice(0, 150) +
              (description.length > 150 ? "..." : "")}
        </p>

        {tags && (
          <div
            className="work-tags"
            style={{ marginTop: "0.5rem", marginBottom: "0.75rem" }}>
            {tags.map((tag, i) => (
              <span
                key={i}
                className="chip"
                style={{
                  fontSize: "0.75rem",
                  padding: "0.25rem 0.5rem",
                  marginRight: "3px",
                  marginBottom: "2px",
                }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {website && (
          <a
            className="work-visit"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onExternalClick}
            aria-label={`Visit ${title} website (opens in new tab)`}>
            {websiteLabel} ↗
          </a>
        )}

        {description.length > 150 && href && (
          <button
            type="button"
            className="rw-read-more-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate(href);
            }}>
            View Full Case Study
          </button>
        )}
      </div>
    </article>
  );
}

export default function RecentWorkSection() {
  return (
    <>
      <section id="projects" className="section rw-section">
        <div className="slab">
          <div className="section-header">
            <div>
              <div
                className="badge"
                style={{ display: "inline-block", marginBottom: "1rem" }}>
                Our Portfolio
              </div>
              <h2 className="h2 section-title">Custom Websites We've Built</h2>
              <p className="rw-section-h-sub-title sub-title">
                Real projects delivered for businesses across Sri Lanka and
                internationally. From booking platforms to e-commerce sites. See
                how our web development expertise brings ideas to life.
              </p>
            </div>

            <Link
              to="/our-projects"
              className="link-muted section-link view-all-projects-link">
              View all projects →
            </Link>
          </div>

          <div className="grid grid-3 grid-projects">
            <ProjectCard
              href="/projects/easyNeat-cleaning-service-booking-platform"
              website="https://easyneat.com.au"
              title="EasyNeat - Cleaning Services Platform"
              description="Complete booking platform for Victoria's leading eco-friendly cleaning service. Features include real-time booking system, payment integration, customer dashboard, and advanced admin panel for managing services, customers, and schedules. Built with React (Vite) and Node.js API for fast, secure performance."
              image={imgEasyNeat}
              tags={["Web Application", "React", "Node.js", "Australia"]}
            />
            <ProjectCard
              href="/projects/motogear-inventory-management-system"
              website=""
              title="MotoGear - Inventory Management System"
              description="Professional inventory management system for motorcycle helmet and parts retail store in Sri Lanka. Features comprehensive stock tracking, integrated POS system, sales recording, expense management, receipt printing, and beautiful analytics dashboards. Streamlines retail operations and eliminates manual processes."
              image={imgGadgetHub}
              tags={["Inventory System", "POS System", "Retail Software"]}
            />
            <ProjectCard
              href="/projects/around-lanka-travels-tour-booking-platform"
              website="https://aroundlankatravels.com/"
              title="Around Lanka Travels - Tour Booking Platform"
              description="Complete travel agency website for Sri Lankan tourism business. Features advanced tour booking system, dynamic content management, beautiful destination galleries, inquiry management, automated email notifications, and comprehensive admin dashboard. Empowers travel agencies to showcase tours and convert visitors into confirmed bookings."
              image={imgGadgetHub}
              tags={["Travel Agency", "Booking System", "Tourism"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
