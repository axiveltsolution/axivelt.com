// src/pages/OurProjects.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./OurProjects.css";

/**
 * Simple projects page — edit the `projects` array manually.
 * Uses namespaced classes (op-*) so styles do not conflict.
 */

const projects = [
  {
    title: "Easyneat",
    description:
      "EasyNeat provides reliable, eco-friendly cleaning services with an easy online booking system and clear pricing. Node.js API + React front-end and admin dashboard.",
    image: "/assets/projects/easyneat/img1.webp",
    website: "https://easyneat.com.au",
    href: "/projects/easyneat",
  },
  {
    title: "MotoGear",
    description:
      "MotoGear sells motorcycle helmets & spare parts with a smooth shopping experience. WordPress + custom PHP inventory integration.",
    image: "/assets/projects/motogear/img1.webp",
    website: "https://motogear.lk/",
    href: "/projects/motogear",
  },
  {
    title: "AroundLankaTravels",
    description:
      "AroundLankaTravels shows curated Sri Lanka tours with booking flows and responsive brochure pages.",
    image: "/assets/projects/aroundlanka/img1.webp",
    href: "/projects/aroundlanka",
  },
  // add more projects here
];

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
  }, []); // eslint-disable-line
  return ref;
}

function ProjectCard({ project }) {
  const { title, description, image, website, href } = project;
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const cardRef = useIntersectionObserver();

  const onExternalClick = (e) => e.stopPropagation();

  return (
    <article
      ref={cardRef}
      className="op-card"
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
      onClick={() => href && navigate(href)}
      onKeyDown={(e) => {
        if (!href) return;
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          navigate(href);
        }
      }}
      aria-label={href ? `Open ${title} project` : title}>
      <div className="op-thumb">
        {!imgError ? (
          <img
            className="op-img"
            src={image}
            alt={`${title} preview`}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            style={{ opacity: imgLoaded ? 1 : 0 }}
          />
        ) : (
          <div className="op-image-fallback">
            <div className="op-project-placeholder">
              {title?.charAt(0) || "P"}
            </div>
          </div>
        )}
        {!imgLoaded && !imgError && <div className="op-image-placeholder" />}
      </div>

      <div className="op-body">
        <h4 className="op-title">{title}</h4>

        <p className="op-desc">
          {readMore
            ? description
            : description.length > 140
            ? description.slice(0, 140) + "..."
            : description}
        </p>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          {website && (
            <a
              className="op-visit"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onExternalClick}
              aria-label={`Open ${title} website (new tab)`}>
              Visit website ↗
            </a>
          )}
          {description && description.length > 140 && (
            <button
              type="button"
              className="op-readmore"
              onClick={(e) => {
                e.stopPropagation();
                setReadMore((v) => !v);
              }}
              aria-expanded={readMore}>
              {readMore ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

export default function OurProjects() {
  return (
    <section className="op-section section" aria-labelledby="op-projects-title">
      <div className="op-slab">
        <header className="op-header">
          <div>
            <h1 id="op-projects-title" className="op-heading">
              All projects
            </h1>
            <p className="op-sub">
              A manually-managed list of projects — edit the `projects` array in
              this file.
            </p>
          </div>
        </header>

        <div className="op-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.title + i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
