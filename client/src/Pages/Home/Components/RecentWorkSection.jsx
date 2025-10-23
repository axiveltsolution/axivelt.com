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

  const toggleReadMore = (e) => {
    e.stopPropagation();
    setReadMore(!readMore);
  };

  return (
    <article
      ref={cardRef}
      className="work"
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
      // onClick={() => href && navigate(href)}
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
            alt={`${title} project preview`}
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
        <h4 className="work-title">{title}</h4>
        <p className="muted work-tag">
          {readMore
            ? description
            : description.slice(0, 150) +
              (description.length > 150 ? "..." : "")}
        </p>

        {website && (
          <a
            className="work-visit"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onExternalClick}
            aria-label={`Open ${title} website (new tab)`}>
            {websiteLabel} ↗
          </a>
        )}

        {description.length > 150 && href && (
          <button
            type="button"
            className="rw-read-more-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate(href); // goes to /projects/easyneat
            }}>
            Read More
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
              <h1 className="h2 section-title">Recent work</h1>
              <p className="rw-section-h-sub-title sub-title">
                Clear scope, fixed price, fast delivery. Most corporate sites
                ship in 1–2 weeks.
              </p>
            </div>

            <Link to="/our-projects" className="link-muted section-link">
              View more projects →
            </Link>
          </div>

          <div className="grid grid-3 grid-projects">
            <ProjectCard
              href="/projects/easyneat"
              website="https://easyneat.com.au"
              title="Easyneat.com"
              description="EasyNeat provides reliable, eco-friendly cleaning services across Victoria with an easy online booking system and clear, upfront pricing. The platform is powered by a Node.js API and a React (Vite) front-end for speed, security, and a seamless customer experience. A powerful, advanced admin dashboard is included to manage bookings, customers, and services with ease."
              image={imgEasyNeat}
            />
            <ProjectCard
              href="/our-projects"
              website="https://motogear.lk/"
              title="Motogear.lk"
              description="MotoGear delivers quality motorcycle helmets and bike spare parts with a smooth shopping experience and clear pricing. The site is powered by WordPress and a custom PHP/HTML/CSS inventory management system for real-time stock control and fast product updates."
              image={imgGadgetHub}
            />
            <ProjectCard
              href="/our-projects"
              website="https://elinapix.com/"
              title="Elinapix.com"
              description="ElinaPix showcases the work of a professional photographer in France with a clean portfolio and elegant galleries. The website is powered by WordPress, delivering a seamless viewing experience and easy content updates for stunning photography displays."
              image={imgElinapix}
            />
          </div>
        </div>
      </section>
    </>
  );
}
