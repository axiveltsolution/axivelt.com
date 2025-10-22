// src/pages/projects/EasyneatArticle.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./article.css";

import heroImg from "../../assets/projects/easyneat/img1.webp";
import dash1 from "../../assets/projects/easyneat/img1.webp";
import dash2 from "../../assets/projects/easyneat/img1.webp";

/* NEW: frontend screenshots (customer-facing UI) */
import fe1 from "../../assets/projects/easyneat/img1.webp";
import fe2 from "../../assets/projects/easyneat/img1.webp";

/* Gallery dynamic import (Vite) */
export default function EasyNeatArticle() {
  let images = [];
  try {
    const modules = import.meta.globEager(
      "../../assets/galleries/easyneat/*.{jpg,jpeg,png,webp}"
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
    [isOpen, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  return (
    <main className="pa-article section" style={{ marginTop: "2.5rem" }}>
      <article className="pa-hero">
        <div className="pa-hero-inner">
          <h1 className="pa-hero-title">
            EasyNeat — Booking platform & admin dashboard
          </h1>
          <p className="pa-hero-sub">
            An easy-to-use booking site for a national cleaning service — fast
            UX, robust admin, secure payments.
          </p>
        </div>

        <div className="pa-hero-image">
          <img src={heroImg} alt="EasyNeat booking screen" />
        </div>
      </article>

      <section className="pa-section">
        <h2>Project overview</h2>
        <p>
          EasyNeat is a production booking platform for cleaning services —
          multi-location availability, easy bookings, and a full admin dashboard
          to manage jobs, staff and billing. The primary goal was to increase
          completed bookings and reduce admin overhead.
        </p>
      </section>

      <section className="pa-section">
        <h3>What we built</h3>
        <ul>
          <li>
            <strong>Customer booking flow:</strong> guided step form with
            address autocomplete, service options, extras and instant pricing.
          </li>
          <li>
            <strong>Checkout & payments:</strong> Stripe integration with saved
            receipts and secure webhooks.
          </li>
          <li>
            <strong>Admin dashboard:</strong> calendar, booking management,
            staff rota, CSV exports and role-based access.
          </li>
          <li>
            <strong>Notifications:</strong> transactional emails and SMS
            reminders for customers and staff.
          </li>
        </ul>
      </section>

      <section className="pa-section">
        <h3>Technical notes</h3>
        <p>
          Built with a React (Vite) frontend and Node.js / Express API. Booking
          records are kept in MongoDB; background jobs (scheduling, reminders)
          are queued with Redis/Bull. The app is deployed using a
          CDN/edge-enabled provider and uses HTTPS + secure headers.
        </p>
      </section>

      <section className="pa-section">
        <h3>Performance & security</h3>
        <p>
          Images optimized to WebP, critical CSS extracted, and caching headers
          applied. Security measures include input validation, auth with JWT,
          helmet headers and rate limiting.
        </p>
      </section>

      {/* ----- NEW: Frontend interfaces (customer-facing UI) ----- */}
      <section className="pa-section pa-frontend">
        <h2>Frontend interfaces (customer-facing)</h2>
        <p>Key screens: </p>
        <ul>
          <li>
            <strong>Home / landing:</strong> service categories, hero booking
            call-to-action and trust signals (reviews, guarantees).
          </li>
          <li>
            <strong>Booking wizard:</strong> multi-step form with progress,
            address autocomplete, and instant price breakdown.
          </li>
          <li>
            <strong>Checkout & confirmation:</strong> secure card entry,
            summary, and email/sms confirmation.
          </li>
        </ul>

        <div className="pa-screens">
          <img src={fe1} alt="Booking wizard mobile screen" />
          <img src={fe2} alt="Checkout and confirmation screen" />
        </div>

        <p className="pa-muted" style={{ marginTop: "8px" }}>
          The frontend is intentionally lightweight: small JS bundles, critical
          CSS inlined for the booking form and lazy-loaded non-critical assets.
        </p>
      </section>
      {/* ----- end frontend section ----- */}

      <section className="pa-section">
        <h2>Admin interfaces</h2>
        <p>Key admin screens:</p>
        <ol>
          <li>
            <strong>Calendar:</strong> drag-and-drop assignments and visual
            availability.
          </li>
          <li>
            <strong>Booking list:</strong> filters, bulk actions and export.
          </li>
          <li>
            <strong>Customer profile:</strong> booking history, invoices, and
            notes.
          </li>
        </ol>

        <div className="pa-screens">
          <img src={dash1} alt="Calendar screen" />
          <img src={dash2} alt="Booking list screen" />
        </div>
      </section>

      {/* ---------------- Gallery ---------------- */}
      <section className="pa-section">
        <h2>Gallery</h2>

        {images.length === 0 ? (
          <div className="pa-gallery-empty">
            <p>No gallery images found.</p>
          </div>
        ) : (
          <div className="pa-gallery-grid">
            <p className="pa-muted">Click any image to open a larger view.</p>
            {images.map((src, i) => (
              <button
                key={src + i}
                type="button"
                className="pa-gallery-item"
                onClick={() => openAt(i)}
                aria-label={`Open image ${i + 1}`}>
                <img
                  src={src}
                  alt={`EasyNeat gallery ${i + 1}`}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox */}
      {isOpen && images.length > 0 && (
        <div
          className="pa-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer">
          <button
            className="pa-lb-close"
            onClick={closeLightbox}
            aria-label="Close">
            ✕
          </button>
          <button
            className="pa-lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous">
            ◀
          </button>
          <div className="pa-lb-stage" onClick={closeLightbox}>
            <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
          </div>
          <button
            className="pa-lb-next"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next">
            ▶
          </button>
        </div>
      )}

      <section className="pa-cta" id="contact">
        <h3>Want something like this?</h3>
        <p>
          We can scope, build and hand over a production-ready booking platform.
          Get in touch for a tailored quote.
        </p>
        <div className="pa-cta-cta">
          <Link to="/getaquote" className="btn btn-primary">
            Get a quote
          </Link>
          <Link to="/our-projects" className="btn btn-outline">
            See more projects
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Project",
            name: "EasyNeat booking platform",
            url: "https://yoursite.com/projects/easyneat",
            description:
              "Booking platform and admin dashboard for a cleaning service. React frontend, Node API, Stripe payments.",
          }),
        }}
      />
    </main>
  );
}
