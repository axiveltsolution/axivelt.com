// src/pages/projects/EasyneatArticle.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./article.css";

import heroImg from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-project-hero.jpg";
import dash1 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-admin-dashboard(1).webp";
import dash2 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-admin-dashboard(2).webp";
import fe1 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend-2.jpg";
import fe2 from "../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend.jpg";

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
    <>
      <Helmet>
        {/* ========== PRIMARY META TAGS ========== */}
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
        <meta name="author" content="Axivelt Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://axivelt.com/projects/easyNeat-cleaning-service-booking-platform"
        />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="LK-1" />
        <meta name="geo.placename" content="Colombo" />
        <meta name="geo.position" content="6.9271;79.8612" />
        <meta name="ICBM" content="6.9271, 79.8612" />

        {/* ========== OPEN GRAPH (Facebook, LinkedIn) ========== */}
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Axivelt Solutions" />
        <meta
          property="og:title"
          content="EasyNeat - Cleaning Service Booking Platform | Axivelt Solutions"
        />
        <meta
          property="og:description"
          content="Custom React-based booking platform for cleaning services in Sri Lanka. Advanced booking forms, admin management, and complete web system."
        />
        <meta
          property="og:url"
          content="https://axivelt.com/projects/easyNeat-cleaning-service-booking-platform"
        />
        <meta
          property="og:image"
          content="https://axivelt.com/projects/easyneat-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="EasyNeat - Cleaning Service Website Development Sri Lanka"
        />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@axivelt" />
        <meta name="twitter:creator" content="@axivelt" />
        <meta
          name="twitter:title"
          content="EasyNeat Cleaning Service Website | React Web Development Sri Lanka"
        />
        <meta
          name="twitter:description"
          content="Complete cleaning service booking platform with admin dashboard. Custom React web application for service businesses in Sri Lanka."
        />
        <meta
          name="twitter:image"
          content="https://axivelt.com/projects/easyneat-og.jpg"
        />

        {/* ========== ADDITIONAL SEO META ========== */}
        <meta name="theme-color" content="#07070b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </Helmet>

      <main className="pa-article section">
        <article className="pa-hero">
          <div className="pa-hero-inner">
            <h1 className="pa-hero-title">EasyNeat Cleaning Service Website</h1>
            <h2>Professional Booking Platform Development in Sri Lanka</h2>
            <p className="pa-hero-sub">
              Complete web application for cleaning service businesses featuring
              advanced booking systems, customer management, and powerful admin
              dashboard - developed by Axivelt Solutions.
            </p>
          </div>

          <div className="pa-hero-image">
            <img
              src={heroImg}
              alt="EasyNeat cleaning service booking platform - React web development Sri Lanka"
            />
          </div>
        </article>

        <section className="pa-section">
          <h2>Custom Web Application Development for Cleaning Services</h2>
          <p>
            EasyNeat is a production-grade{" "}
            <strong>cleaning service web app developed in Sri Lanka</strong>{" "}
            that streamlines business operations from customer booking to
            service delivery. This <strong>custom web application</strong>{" "}
            demonstrates our expertise in building comprehensive digital
            solutions for small businesses looking to modernize their service
            operations.
          </p>
          <p>
            As part of our{" "}
            <strong>web development projects in Sri Lanka</strong>, we created a
            fully integrated platform that handles real-time booking
            availability, automated customer communications, staff scheduling,
            and complete business analytics - all designed specifically for the
            cleaning services industry.
          </p>
        </section>

        <section className="pa-section">
          <h2>Key Features of Our Cleaning Website Development Solution</h2>

          <h3>Advanced Booking System</h3>
          <p>
            The centerpiece of this{" "}
            <strong>React web application development</strong> project is an
            intelligent multi-step booking form that guides customers through
            service selection with:
          </p>
          <ul>
            <li>
              <strong>Smart address autocomplete:</strong> Google Maps
              integration for accurate service location detection
            </li>
            <li>
              <strong>Real-time availability checking:</strong> Dynamic calendar
              showing open slots based on location and service type
            </li>
            <li>
              <strong>Instant pricing calculator:</strong> Transparent cost
              breakdown with service options and add-ons
            </li>
            <li>
              <strong>Mobile-optimized interface:</strong> Seamless booking
              experience across all devices
            </li>
            <li>
              <strong>Progress indicators:</strong> Clear visual feedback
              throughout the booking journey
            </li>
          </ul>

          <h3>Customer Inquiry Management System</h3>
          <p>
            Beyond bookings, this <strong>small business web system</strong>{" "}
            includes a comprehensive inquiry handling module that captures and
            manages customer questions, quote requests, and service
            consultations through structured forms and automated follow-up
            workflows.
          </p>

          <h3>Professional Admin Dashboard</h3>
          <p>
            The backend management interface provides business owners with
            complete operational control:
          </p>
          <ul>
            <li>
              <strong>Interactive calendar view:</strong> Drag-and-drop booking
              assignments with color-coded status indicators
            </li>
            <li>
              <strong>Booking management:</strong> Filter, search, sort, and
              bulk-update bookings efficiently
            </li>
            <li>
              <strong>Customer profiles:</strong> Complete history, notes,
              preferences, and communication logs
            </li>
            <li>
              <strong>Staff scheduling:</strong> Assign cleaners, track
              availability, and manage team rosters
            </li>
            <li>
              <strong>Analytics dashboard:</strong> Revenue tracking, booking
              trends, and performance metrics
            </li>
            <li>
              <strong>Data export tools:</strong> Generate CSV reports for
              accounting and analysis
            </li>
            <li>
              <strong>Role-based access:</strong> Secure permission levels for
              admins, managers, and staff
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Technology Stack & React Project Architecture</h2>
          <p>
            This <strong>React project in Sri Lanka</strong> leverages modern
            web technologies to deliver exceptional performance, security, and
            user experience:
          </p>

          <h3>Frontend Development</h3>
          <ul>
            <li>
              <strong>React 18 with Vite:</strong> Lightning-fast builds and
              optimal bundle sizes
            </li>
            <li>
              <strong>React Router v6:</strong> Smooth navigation with
              lazy-loaded routes
            </li>
            <li>
              <strong>Custom hooks:</strong> Reusable logic for forms, API
              calls, and state management
            </li>
            <li>
              <strong>Responsive CSS:</strong> Mobile-first design with CSS Grid
              and Flexbox
            </li>
            <li>
              <strong>Progressive Web App (PWA):</strong> Offline capability and
              app-like experience
            </li>
          </ul>

          <h3>Backend Infrastructure</h3>
          <ul>
            <li>
              <strong>Node.js & Express:</strong> Scalable REST API with
              middleware architecture
            </li>
            <li>
              <strong>MongoDB:</strong> Flexible document database for bookings,
              customers, and business data
            </li>
            <li>
              <strong>Redis & Bull:</strong> Background job processing for
              emails, SMS, and scheduled tasks
            </li>
            <li>
              <strong>JWT authentication:</strong> Secure token-based user
              sessions
            </li>
            <li>
              <strong>Input validation:</strong> Server-side security with Joi
              schemas
            </li>
          </ul>

          <h3>Third-Party Integrations</h3>
          <ul>
            <li>
              <strong>Email notifications:</strong> Automated booking
              confirmations and reminders
            </li>
            <li>
              <strong>SMS integration:</strong> Text message alerts for
              customers and staff
            </li>
            <li>
              <strong>Google Maps API:</strong> Address validation and service
              area mapping
            </li>
            <li>
              <strong>Cloud storage:</strong> Secure file uploads and document
              management
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Performance Optimization & Web Standards</h2>
          <p>
            As part of our commitment to delivering high-quality{" "}
            <strong>custom website development</strong>, we implemented
            comprehensive optimization strategies:
          </p>
          <ul>
            <li>
              <strong>Image optimization:</strong> WebP format with lazy loading
              and responsive srcsets
            </li>
            <li>
              <strong>Code splitting:</strong> Route-based chunking for faster
              initial page loads
            </li>
            <li>
              <strong>Critical CSS extraction:</strong> Above-the-fold styles
              inlined for instant rendering
            </li>
            <li>
              <strong>CDN delivery:</strong> Edge caching for global performance
            </li>
            <li>
              <strong>Lighthouse score 95+:</strong> Excellent performance,
              accessibility, and SEO metrics
            </li>
            <li>
              <strong>Fast Time to Interactive:</strong> Under 2 seconds on 3G
              connections
            </li>
          </ul>

          <h3>Security Implementation</h3>
          <ul>
            <li>
              <strong>HTTPS enforcement:</strong> SSL/TLS encryption for all
              traffic
            </li>
            <li>
              <strong>Helmet.js security headers:</strong> Protection against
              common web vulnerabilities
            </li>
            <li>
              <strong>Rate limiting:</strong> API throttling to prevent abuse
            </li>
            <li>
              <strong>SQL injection prevention:</strong> Parameterized queries
              and ORM usage
            </li>
            <li>
              <strong>XSS protection:</strong> Content sanitization and CSP
              headers
            </li>
            <li>
              <strong>CSRF tokens:</strong> Protection for state-changing
              operations
            </li>
          </ul>
        </section>

        <section className="pa-section pa-frontend">
          <h2>User Interface Design & Customer Experience</h2>
          <p>
            The customer-facing interface prioritizes ease of use and conversion
            optimization. Our <strong>cleaning website development</strong>{" "}
            approach focuses on removing friction from the booking process while
            maintaining professional aesthetics.
          </p>

          <h3>Homepage & Landing Experience</h3>
          <ul>
            <li>
              <strong>Clear value proposition:</strong> Service benefits
              highlighted above the fold
            </li>
            <li>
              <strong>Trust signals:</strong> Customer reviews, service
              guarantees, and industry certifications
            </li>
            <li>
              <strong>Service categories:</strong> Visual cards for different
              cleaning types (residential, commercial, deep clean)
            </li>
            <li>
              <strong>Prominent CTA buttons:</strong> Multiple entry points to
              the booking wizard
            </li>
            <li>
              <strong>Social proof:</strong> Customer testimonials and completed
              job counter
            </li>
          </ul>

          <h3>Booking Wizard Interface</h3>
          <ul>
            <li>
              <strong>Step-by-step guidance:</strong> Progress bar showing
              current stage
            </li>
            <li>
              <strong>Smart defaults:</strong> Pre-filled information based on
              user context
            </li>
            <li>
              <strong>Real-time validation:</strong> Immediate feedback on form
              inputs
            </li>
            <li>
              <strong>Save & resume:</strong> Ability to save incomplete
              bookings
            </li>
            <li>
              <strong>Price transparency:</strong> Live calculation with
              itemized breakdown
            </li>
          </ul>

          <div className="pa-screens">
            <img
              src={fe1}
              alt="Mobile booking wizard interface - cleaning service web app Sri Lanka"
            />
            <img
              src={fe2}
              alt="Booking confirmation screen - React web development"
            />
          </div>

          <p className="pa-muted" style={{ marginTop: "8px" }}>
            <em>
              Lightweight frontend architecture: ~150KB initial JavaScript
              bundle, critical CSS inlined, non-essential features lazy-loaded
              for optimal performance.
            </em>
          </p>
        </section>

        <section className="pa-section">
          <h2>Admin Dashboard & Business Management Tools</h2>
          <p>
            The administrative interface empowers business owners with
            professional tools for operational management:
          </p>

          <h3>Core Dashboard Features</h3>
          <ol>
            <li>
              <strong>Visual booking calendar:</strong> Month, week, and day
              views with drag-and-drop rescheduling, color-coded status
              (pending, confirmed, completed, cancelled), and quick-edit popups
              for booking details.
            </li>
            <li>
              <strong>Comprehensive booking list:</strong> Advanced filters
              (date range, status, service type, location), bulk actions
              (confirm, reassign, export), inline editing, and custom sorting
              options.
            </li>
            <li>
              <strong>Customer relationship management:</strong> Individual
              customer profiles with complete booking history, contact
              preferences, special notes, invoices, and communication timeline.
            </li>
            <li>
              <strong>Staff management module:</strong> Cleaner profiles with
              availability calendars, assigned bookings, performance metrics,
              and contact information.
            </li>
            <li>
              <strong>Business analytics:</strong> Revenue charts, booking
              volume trends, popular services, customer acquisition sources, and
              staff productivity reports.
            </li>
          </ol>

          <div className="pa-screens">
            <img
              src={dash1}
              alt="Admin dashboard calendar view - custom web application Sri Lanka"
            />
            <img
              src={dash2}
              alt="Booking management interface - software projects for small business"
            />
          </div>
        </section>

        {/* Gallery */}
        <section className="pa-section">
          <h2>Project Gallery: Complete Platform Walkthrough</h2>

          <p>
            Explore detailed screenshots showcasing the full range of features
            in this <strong>custom web application</strong>. From
            customer-facing booking interfaces to powerful admin tools, see how
            we deliver complete digital solutions for service businesses in Sri
            Lanka.
          </p>

          {images.length === 0 ? (
            <div className="pa-gallery-empty">
              <p>Gallery images showcase</p>
            </div>
          ) : (
            <div className="pa-gallery-grid">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  className="pa-gallery-item"
                  onClick={() => openAt(i)}
                  aria-label={`Open gallery image ${i + 1}`}>
                  <img
                    src={src}
                    alt={`EasyNeat cleaning service platform screenshot ${
                      i + 1
                    } - React web development Sri Lanka by Axivelt Solutions`}
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
            aria-label="Image gallery viewer">
            <button
              className="pa-lb-close"
              onClick={closeLightbox}
              aria-label="Close gallery">
              ✕
            </button>
            <button
              className="pa-lb-prev"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image">
              ◀
            </button>
            <div className="pa-lb-stage" onClick={closeLightbox}>
              <img
                src={images[currentIndex]}
                alt={`EasyNeat cleaning service web app screenshot ${
                  currentIndex + 1
                } - custom web development Sri Lanka`}
              />
            </div>
            <button
              className="pa-lb-next"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image">
              ▶
            </button>
            <div className="pa-lb-counter">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        )}

        <section className="pa-section">
          <h2>Why Choose Axivelt for Your Service Business Web Development</h2>
          <p>
            This <strong>cleaning website development</strong> project
            exemplifies our approach to building{" "}
            <strong>custom web applications in Sri Lanka</strong> for
            service-based businesses. We understand the unique operational
            challenges of managing bookings, staff, and customer relationships.
          </p>

          <h3>Our Development Process</h3>
          <ol>
            <li>
              <strong>Requirements analysis:</strong> We study your business
              workflow and pain points
            </li>
            <li>
              <strong>UI/UX design:</strong> Custom mockups aligned with your
              brand identity
            </li>
            <li>
              <strong>Agile development:</strong> Iterative builds with weekly
              progress demos
            </li>
            <li>
              <strong>Quality assurance:</strong> Comprehensive testing across
              devices and browsers
            </li>
            <li>
              <strong>Deployment & training:</strong> Smooth launch with team
              onboarding
            </li>
            <li>
              <strong>Ongoing support:</strong> Maintenance, updates, and
              feature enhancements
            </li>
          </ol>

          <h3>What Makes Our Web Development Projects Stand Out</h3>
          <ul>
            <li>
              <strong>Business-focused solutions:</strong> Technology that
              solves real operational problems
            </li>
            <li>
              <strong>Scalable architecture:</strong> Systems that grow with
              your business
            </li>
            <li>
              <strong>User-centric design:</strong> Interfaces optimized for
              conversion and usability
            </li>
            <li>
              <strong>Clean, maintainable code:</strong> Easy to update and
              extend in the future
            </li>
            <li>
              <strong>Local expertise:</strong> Understanding of Sri Lankan
              market and business context
            </li>
            <li>
              <strong>Affordable pricing:</strong> Transparent quotes designed
              for small business budgets
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="pa-cta" id="contact">
          <h2>Ready to Build Your Custom Web Application?</h2>
          <p>
            Whether you need a <strong>cleaning service web app</strong>,
            booking platform, business management system, or any{" "}
            <strong>custom website development</strong> - Axivelt Solutions
            delivers production-ready digital solutions tailored for small
            businesses in Sri Lanka.
          </p>

          <div className="pa-cta-features">
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">🚀</span>
              <strong>Fast Delivery:</strong> Most projects completed within
              6-12 weeks
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">💰</span>
              <strong>Affordable Web Developer:</strong> Fixed quotes,
              transparent pricing, no hidden fees
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">🔧</span>
              <strong>Complete Support:</strong> Training, maintenance, and
              feature updates included
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">📱</span>
              <strong>Mobile-Optimized:</strong> Responsive design for
              smartphones, tablets, and desktops
            </div>
          </div>

          <div className="pa-cta-buttons">
            <Link to="/#get-a-quote" className="btn btn-primary">
              Get Your Free Project Quote
            </Link>
            <Link to="/our-projects" className="btn btn-secondary">
              View More Web Development Projects
            </Link>
            <a
              href="https://easyneat.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline">
              Visit Live Website ↗
            </a>
          </div>

          <p className="pa-cta-contact">
            <strong>Get in touch:</strong>{" "}
            <a href="mailto:axiveltofficial@gmail.com">
              axiveltofficial@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="https://wa.me/94766980686"
              target="_blank"
              rel="noopener noreferrer">
              WhatsApp +94 76 698 0686
            </a>
          </p>
        </section>

        {/* Related Projects */}
        <section className="pa-section pa-related">
          <h2>
            More Custom Web Applications & Development Projects in Sri Lanka
          </h2>
          <p>
            Explore our portfolio of <strong>React projects</strong> and{" "}
            <strong>custom web applications</strong> built for businesses across
            various industries:
          </p>

          <div className="pa-related-grid">
            <Link
              to="/projects/motogear-inventory-management-system"
              className="pa-related-card">
              <h3>MotoGear Inventory Management System</h3>
              <p>
                Professional inventory and POS system with stock tracking, sales
                recording, expense management, and analytics for motorcycle
                parts and helmet retail store
              </p>
              <span className="pa-related-link">View Case Study →</span>
            </Link>

            <Link
              to="/projects/around-lanka-travels-tour-booking-platform"
              className="pa-related-card">
              <h3>Around Lanka Tour Booking System</h3>
              <p>
                Complete travel agency platform with itinerary builder, email
                SMTP and customer booking management
              </p>
              <span className="pa-related-link">View Case Study →</span>
            </Link>

            <Link
              to="/our-projects"
              className="pa-related-card pa-related-card-all">
              <h3>Browse All Projects</h3>
              <p>
                See our complete portfolio of software development and web
                application projects
              </p>
              <span className="pa-related-link">View Full Portfolio →</span>
            </Link>
          </div>
        </section>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "EasyNeat Cleaning Service Web Application",
              url: "https://axivelt.com/projects/easyNeat-cleaning-service-booking-platform",
              description:
                "Professional cleaning service booking platform developed in Sri Lanka. Custom React web application with advanced booking system, inquiry management, admin dashboard, and customer relationship tools. Built by Axivelt Solutions for small business digital transformation.",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "LKR",
              },
              creator: {
                "@type": "Organization",
                name: "Axivelt Solutions",
                url: "https://axivelt.com",
              },
              screenshot: heroImg,
              featureList: [
                "Advanced booking form with real-time availability",
                "Customer inquiry management system",
                "Administrative dashboard with calendar view",
                "Staff scheduling and assignment",
                "Customer relationship management",
                "Automated email and SMS notifications",
                "Business analytics and reporting",
                "Mobile-responsive interface",
                "Secure authentication and role-based access",
              ],
              keywords:
                "cleaning service web app Sri Lanka, React web application development, custom web applications, web development projects Sri Lanka, small business web system, affordable web developer Sri Lanka",
            }),
          }}
        />
      </main>
    </>
  );
}
