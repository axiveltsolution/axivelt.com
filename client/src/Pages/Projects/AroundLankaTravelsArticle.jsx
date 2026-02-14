import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./article.css";

import heroImg from "../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-hero.jpg";
import dash1 from "../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-admin-dashboard(3).webp";
import dash2 from "../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-admin-dashboard(4).webp";
import fe1 from "../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-frontend01.jpg";
import fe2 from "../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-frontend02.webp";

export default function AroundLankaTravelsArticle() {
  let images = [];
  try {
    const modules = import.meta.globEager(
      "../../assets/img-gallery/aroundLankaTravels/*.{jpg,jpeg,png,webp}",
    );
    images = Object.keys(modules)
      .sort()
      .map((k) => modules[k].default);
  } catch (e) {
    images = [];
  }

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openAt = (i) => {
    setCurrentIndex(i);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

  const onKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [isOpen, images.length],
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <>
      <Helmet>
        {/* Your exactly preserved SEO Tags */}
        <title>
          Around Lanka Travels Website | Travel Agency Web Development Sri Lanka
          | Axivelt Solutions
        </title>
        <meta
          name="description"
          content="Professional travel agency website development in Sri Lanka. Complete booking platform with tour packages, inquiry system, admin dashboard & content management. Custom React web application for tourism businesses. View our case study!"
        />
        <meta
          name="keywords"
          content="travel agency website Sri Lanka, tourism website development Sri Lanka, tour booking system Sri Lanka, React web application development Sri Lanka, custom web applications Sri Lanka, web development projects Sri Lanka, travel website design, booking platform development, React projects Sri Lanka, software projects for small business"
        />
        <link
          rel="canonical"
          href="https://axivelt.com/projects/around-lanka-travels-tour-booking-platform"
        />
      </Helmet>

      <main className="article-page">
        <div className="container">
          {/* HEADER & HERO */}
          <header className="article__header">
            <span className="badge-label text-red">Travel & Tourism</span>
            <h1 className="article__title">Around Lanka Travels</h1>
            <p className="article__subtitle">
              Professional tourism website featuring advanced tour booking
              system, dynamic content management, stunning galleries, and
              comprehensive admin dashboard.
            </p>
          </header>

          <div className="article__hero-wrapper">
            <img src={heroImg} alt="Around Lanka Travels tourism website" />
          </div>

          {/* ARTICLE CONTENT */}
          <div className="article__content">
            <section className="article__section">
              <h2>Travel Agency Website Development</h2>
              <p>
                Around Lanka Travels is a full-featured{" "}
                <strong>travel agency website developed in Sri Lanka</strong>{" "}
                that transforms how tourism businesses connect with travelers.
                This custom web application combines beautiful visual design
                with powerful booking functionality, making it easy for agencies
                to showcase destinations, manage tour packages, and convert
                visitors into confirmed bookings.
              </p>
            </section>

            <section className="article__section">
              <h2>Key Features & Solutions</h2>
              <h3>Advanced Tour Booking System</h3>
              <p>
                The heart of this React web application is an intelligent
                booking platform that guides travelers through tour selection
                with:
              </p>
              <ul className="article__list">
                <li>
                  <strong>Multi-step booking form:</strong> Intuitive wizard
                  interface collecting travel dates, group size, and special
                  requirements.
                </li>
                <li>
                  <strong>Real-time availability:</strong> Dynamic calendar
                  showing open tour dates and seat availability.
                </li>
                <li>
                  <strong>Instant quote generation:</strong> Automatic pricing
                  calculation based on season, group size, and selected add-ons.
                </li>
                <li>
                  <strong>Mobile-first design:</strong> Seamless browsing and
                  booking experience across all devices.
                </li>
              </ul>

              <h3>Dynamic Content Management Dashboard</h3>
              <p>
                The powerful admin interface gives travel agencies complete
                control over their website content without needing technical
                knowledge:
              </p>
              <ul className="article__list">
                <li>
                  <strong>Tour package management:</strong> Add, edit, or remove
                  tours with full control over descriptions, itineraries,
                  pricing, and images.
                </li>
                <li>
                  <strong>Gallery management:</strong> Upload and organize
                  destination photos with drag-and-drop functionality.
                </li>
                <li>
                  <strong>Inquiry tracking:</strong> Status management (pending,
                  responded, converted, closed) with automated reminders.
                </li>
              </ul>

              <div className="article__screens">
                <img src={dash1} alt="Admin dashboard booking calendar" />
                <img src={dash2} alt="Content management interface" />
              </div>
            </section>

            <section className="article__section">
              <h2>Stunning Visual Design & Customer Interface</h2>
              <p>
                Our approach prioritizes visual storytelling that inspires
                wanderlust and drives bookings:
              </p>
              <ul className="article__list">
                <li>
                  <strong>Interactive maps:</strong> Google Maps integration
                  showing tour routes and pickup points.
                </li>
                <li>
                  <strong>Currency converter:</strong> Automatic price display
                  in multiple currencies.
                </li>
                <li>
                  <strong>Detailed itineraries:</strong> Day-by-day breakdown
                  with expandable sections and inclusions/exclusions lists.
                </li>
              </ul>

              <div className="article__screens">
                <img src={fe1} alt="Tour booking interface" />
                <img src={fe2} alt="Tour details page" />
              </div>
            </section>

            <section className="article__section">
              <h2>Technology Stack</h2>
              <ul className="article__list">
                <li>
                  <strong>Frontend:</strong> React 18, Vite, React Router v6,
                  TailwindCSS, Framer Motion
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express, MongoDB, Mongoose
                  ODM, JWT Authentication
                </li>
                <li>
                  <strong>Integrations:</strong> NodeMailer (SMTP), Google Maps
                  API, AWS S3/Cloudinary
                </li>
                <li>
                  <strong>Performance:</strong> Lighthouse Score 95+, Lazy
                  Loading, WebP Image Optimization
                </li>
              </ul>
            </section>

            {/* GALLERY SYSTEM */}
            <section className="article__section">
              <h2>Project Gallery Walkthrough</h2>
              <p>
                Browse detailed screenshots showcasing every aspect of this
                travel agency web development project.
              </p>

              {images.length > 0 && (
                <div className="article__gallery-grid">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      className="article__gallery-btn"
                      onClick={() => openAt(i)}>
                      <img
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </section>

            {/* CTA SECTION */}
            <section className="article__cta" id="contact">
              <h2>Ready to Build Your Travel Agency Website?</h2>
              <p>
                Axivelt Solutions creates custom digital experiences that
                inspire bookings and grow your tourism business in Sri Lanka.
              </p>

              {/* Using Global Buttons! */}
              <div className="article__cta-buttons">
                <Link to="/#contact" className="btn btn-primary">
                  Get Your Free Quote
                </Link>
                <a
                  href="https://aroundlankatravels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline">
                  Visit Live Website ↗
                </a>
              </div>
            </section>

            {/* RELATED PROJECTS (Using Global Glass Cards!) */}
            <section className="article__section">
              <h2>More Custom Web Applications</h2>
              <div className="article__related-grid">
                <Link
                  to="/projects/easyNeat-cleaning-service-booking-platform"
                  className="glass-card">
                  <span className="badge-label">Web App</span>
                  <h3>EasyNeat Platform</h3>
                  <p
                    className="article__subtitle"
                    style={{ fontSize: "0.95rem", margin: "10px 0 20px 0" }}>
                    Complete booking system with advanced scheduling and admin
                    dashboard.
                  </p>
                  <span className="article__related-link">
                    View Case Study <span className="arrow">→</span>
                  </span>
                </Link>

                <Link
                  to="/projects/motogear-inventory-management-system"
                  className="glass-card">
                  <span className="badge-label">Software</span>
                  <h3>MotoGear POS</h3>
                  <p
                    className="article__subtitle"
                    style={{ fontSize: "0.95rem", margin: "10px 0 20px 0" }}>
                    Professional inventory and POS system with stock tracking
                    and analytics.
                  </p>
                  <span className="article__related-link">
                    View Case Study <span className="arrow">→</span>
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FULLSCREEN LIGHTBOX */}
      {isOpen && images.length > 0 && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox__close" onClick={closeLightbox}>
            ✕
          </button>
          <button
            className="lightbox__prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}>
            ◀
          </button>

          <div className="lightbox__stage" onClick={closeLightbox}>
            <img
              src={images[currentIndex]}
              alt={`Gallery view ${currentIndex + 1}`}
            />
          </div>

          <button
            className="lightbox__next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}>
            ▶
          </button>
          <div className="lightbox__counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
