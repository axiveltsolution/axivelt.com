import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./article.css";

import heroImg from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-project-hero.jpg";
import dash1 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-admin-dashboard(1).webp";
import dash2 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-admin-dashboard(2).webp";
import fe1 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend-2.jpg";
import fe2 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend.jpg";

export default function EasyNeatArticle() {
  let images = [];
  try {
    const modules = import.meta.globEager(
      "../../assets/galleries/easyneat/*.{jpg,jpeg,png,webp}",
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
        <title>
          EasyNeat Cleaning Service Website | React Web Development Sri Lanka -
          Axivelt
        </title>
        <meta
          name="description"
          content="Professional cleaning service web app development in Sri Lanka. Full-featured booking system, admin dashboard, and custom web application built with React. Affordable web development projects for small businesses."
        />
        <meta
          name="keywords"
          content="cleaning service web app Sri Lanka, cleaning website development, React web application development Sri Lanka, custom web applications Sri Lanka, web development projects Sri Lanka, small business web system, React projects Sri Lanka"
        />
        <link
          rel="canonical"
          href="https://axivelt.com/projects/easyNeat-cleaning-service-booking-platform"
        />
      </Helmet>

      <main className="article-page">
        <div className="container">
          <header className="article-header">
            <span className="badge-label text-red">Web Application</span>
            <h1 className="article-title">EasyNeat Booking Platform</h1>
            <p className="article-subtitle">
              Complete web application for cleaning service businesses featuring
              advanced booking systems, customer management, and a powerful
              admin dashboard.
            </p>
          </header>

          <div className="article-hero-wrapper">
            <img
              src={heroImg}
              alt="EasyNeat cleaning service booking platform"
            />
          </div>

          <div className="article-content">
            <section className="article-section">
              <h2>Custom Web Application Development</h2>
              <p>
                EasyNeat is a production-grade{" "}
                <strong>cleaning service web app developed in Sri Lanka</strong>{" "}
                that streamlines business operations from customer booking to
                service delivery. This custom web application demonstrates our
                expertise in building comprehensive digital solutions for small
                businesses looking to modernize their service operations.
              </p>
            </section>

            <section className="article-section">
              <h2>Key Features & Solutions</h2>
              <h3>Advanced Booking System</h3>
              <p>
                The centerpiece of this React web application development
                project is an intelligent multi-step booking form that guides
                customers through service selection with:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Smart address autocomplete:</strong> Google Maps
                  integration for accurate service location detection.
                </li>
                <li>
                  <strong>Real-time availability:</strong> Dynamic calendar
                  showing open slots based on location and service type.
                </li>
                <li>
                  <strong>Instant pricing calculator:</strong> Transparent cost
                  breakdown with service options and add-ons.
                </li>
                <li>
                  <strong>Mobile-optimized interface:</strong> Seamless booking
                  experience across all devices.
                </li>
              </ul>

              <h3>Professional Admin Dashboard</h3>
              <p>
                The backend management interface provides business owners with
                complete operational control:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Interactive calendar view:</strong> Drag-and-drop
                  booking assignments with color-coded status indicators.
                </li>
                <li>
                  <strong>Customer profiles:</strong> Complete history, notes,
                  preferences, and communication logs.
                </li>
                <li>
                  <strong>Staff scheduling:</strong> Assign cleaners, track
                  availability, and manage team rosters.
                </li>
                <li>
                  <strong>Analytics dashboard:</strong> Revenue tracking,
                  booking trends, and performance metrics.
                </li>
              </ul>

              <div className="article-screens">
                <img src={dash1} alt="Admin dashboard calendar view" />
                <img src={dash2} alt="Booking management interface" />
              </div>
            </section>

            <section className="article-section">
              <h2>User Interface & Customer Experience</h2>
              <p>
                The customer-facing interface prioritizes ease of use and
                conversion optimization to remove friction from the booking
                process:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Clear value proposition:</strong> Service benefits and
                  trust signals highlighted above the fold.
                </li>
                <li>
                  <strong>Step-by-step guidance:</strong> Progress bar showing
                  current stage in the booking wizard.
                </li>
                <li>
                  <strong>Real-time validation:</strong> Immediate feedback on
                  form inputs to prevent errors.
                </li>
              </ul>

              <div className="article-screens">
                <img src={fe1} alt="Mobile booking wizard interface" />
                <img src={fe2} alt="Booking confirmation screen" />
              </div>
            </section>

            <section className="article-section">
              <h2>Technology Stack</h2>
              <ul className="article-list">
                <li>
                  <strong>Frontend:</strong> React 18, Vite, React Router v6,
                  Progressive Web App (PWA)
                </li>
                <li>
                  <strong>Backend:</strong> Node.js, Express, MongoDB, Redis &
                  Bull for background jobs
                </li>
                <li>
                  <strong>Integrations:</strong> Google Maps API, SMS & Email
                  Notifications, Cloud Storage
                </li>
                <li>
                  <strong>Security:</strong> JWT authentication, Helmet.js, Rate
                  limiting, CSRF protection
                </li>
              </ul>
            </section>

            <section className="article-section">
              <h2>Project Gallery Walkthrough</h2>
              <p>
                Explore detailed screenshots showcasing the full range of
                features in this custom web application.
              </p>

              {images.length > 0 && (
                <div className="article-gallery-grid">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      type="button"
                      className="article-gallery-btn"
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

            <section className="article-cta" id="contact">
              <h2>Ready to Build Your Custom Web Application?</h2>
              <p>
                Axivelt Solutions delivers production-ready digital solutions
                tailored for service businesses in Sri Lanka.
              </p>

              <div className="article-cta-buttons">
                <Link to="/#contact" className="btn btn-primary">
                  Get Your Free Quote
                </Link>
                <a
                  href="https://easyneat.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline">
                  Visit Live Website ↗
                </a>
              </div>
            </section>

            <section className="article-section">
              <h2>More Custom Web Applications</h2>
              <div className="article-related-grid">
                <Link
                  to="/projects/motogear-inventory-management-system"
                  className="glass-card">
                  <span className="badge-label">Software</span>
                  <h3>MotoGear POS</h3>
                  <p
                    className="article-subtitle"
                    style={{ fontSize: "0.95rem", margin: "10px 0 20px 0" }}>
                    Professional inventory and POS system with stock tracking
                    and analytics.
                  </p>
                  <span className="article-related-link">
                    View Case Study <span className="arrow">→</span>
                  </span>
                </Link>

                <Link
                  to="/projects/around-lanka-travels-tour-booking-platform"
                  className="glass-card">
                  <span className="badge-label">Travel & Tourism</span>
                  <h3>Around Lanka Travels</h3>
                  <p
                    className="article-subtitle"
                    style={{ fontSize: "0.95rem", margin: "10px 0 20px 0" }}>
                    Complete travel agency platform with itinerary builder and
                    booking system.
                  </p>
                  <span className="article-related-link">
                    View Case Study <span className="arrow">→</span>
                  </span>
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      {isOpen && images.length > 0 && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lightbox-close" onClick={closeLightbox}>
            ✕
          </button>
          <button
            className="lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}>
            ◀
          </button>

          <div className="lightbox-stage" onClick={closeLightbox}>
            <img
              src={images[currentIndex]}
              alt={`Gallery view ${currentIndex + 1}`}
            />
          </div>

          <button
            className="lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}>
            ▶
          </button>
          <div className="lightbox-counter">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
