// src/pages/projects/AroundLankaTravelsArticle.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./article.css";

import heroImg from "../../assets/projects/aroundlanka/img1.webp";
import dash1 from "../../assets/projects/aroundlanka/img1.webp";
import dash2 from "../../assets/projects/aroundlanka/img1.webp";
import fe1 from "../../assets/projects/aroundlanka/img1.webp";
import fe2 from "../../assets/projects/aroundlanka/img1.webp";

/* Gallery dynamic import (Vite) */
export default function AroundLankaTravelsArticle() {
  let images = [];
  console.log("Loaded gallery images:", images);

  try {
    const modules = import.meta.globEager(
      "../../assets/img-gallery/aroundLankaTravels/*.{jpg,jpeg,png,webp}"
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
        <link rel="canonical" href="https://axivelt.com/projects/aroundlanka" />

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
          content="Around Lanka Travels - Travel Agency Website Development | Axivelt Solutions"
        />
        <meta
          property="og:description"
          content="Custom travel agency website with booking system, tour packages, inquiry management, and admin dashboard. React-based web application for tourism business in Sri Lanka."
        />
        <meta
          property="og:url"
          content="https://axivelt.com/projects/aroundlanka"
        />
        <meta
          property="og:image"
          content="https://axivelt.com/projects/aroundlanka-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Around Lanka Travels - Travel Website Development Sri Lanka"
        />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@axivelt" />
        <meta name="twitter:creator" content="@axivelt" />
        <meta
          name="twitter:title"
          content="Around Lanka Travels Website | Travel Agency Web Development Sri Lanka"
        />
        <meta
          name="twitter:description"
          content="Complete travel agency website with booking system, tour management, and admin dashboard. Custom React development for tourism businesses."
        />
        <meta
          name="twitter:image"
          content="https://axivelt.com/projects/aroundlanka-og.jpg"
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
            <h1 className="pa-hero-title">
              Around Lanka Travels — Complete Travel Agency Website Development
              in Sri Lanka
            </h1>
            <p className="pa-hero-sub">
              Professional tourism website featuring advanced tour booking
              system, dynamic content management, stunning galleries, and
              comprehensive admin dashboard — empowering travel agencies to grow
              their business online.
            </p>
          </div>

          <div className="pa-hero-image">
            <img
              src={heroImg}
              alt="Around Lanka Travels tourism website - travel agency web development Sri Lanka"
            />
          </div>
        </article>

        <section className="pa-section">
          <h2>Travel Agency Website Development for Sri Lankan Tourism</h2>
          <p>
            Around Lanka Travels is a full-featured{" "}
            <strong>travel agency website developed in Sri Lanka</strong> that
            transforms how tourism businesses connect with travelers. This{" "}
            <strong>custom web application</strong> combines beautiful visual
            design with powerful booking functionality, making it easy for
            agencies to showcase destinations, manage tour packages, and convert
            visitors into confirmed bookings.
          </p>
          <p>
            As one of our flagship{" "}
            <strong>web development projects in Sri Lanka</strong>, we built a
            complete digital ecosystem that handles everything from tour
            discovery and inquiry management to automated email communications
            and real-time content updates — all designed specifically for the
            unique needs of travel and tourism businesses.
          </p>
        </section>

        <section className="pa-section">
          <h2>Key Features of Our Tourism Website Development Solution</h2>

          <h3>Advanced Tour Booking System</h3>
          <p>
            The heart of this <strong>React web application development</strong>{" "}
            project is an intelligent booking platform that guides travelers
            through tour selection with:
          </p>
          <ul>
            <li>
              <strong>Multi-step booking form:</strong> Intuitive wizard
              interface collecting travel dates, group size, accommodation
              preferences, and special requirements
            </li>
            <li>
              <strong>Tour package showcase:</strong> Rich media galleries
              displaying destinations, itineraries, inclusions, and pricing
            </li>
            <li>
              <strong>Real-time availability:</strong> Dynamic calendar showing
              open tour dates and seat availability
            </li>
            <li>
              <strong>Instant quote generation:</strong> Automatic pricing
              calculation based on season, group size, and selected add-ons
            </li>
            <li>
              <strong>Mobile-first design:</strong> Seamless browsing and
              booking experience across all devices
            </li>
            <li>
              <strong>Package customization:</strong> Flexible options allowing
              travelers to modify itineraries
            </li>
          </ul>

          <h3>Comprehensive Inquiry Management System</h3>
          <p>
            Beyond standard bookings, this{" "}
            <strong>travel website development</strong> solution includes a
            sophisticated inquiry system that captures and organizes:
          </p>
          <ul>
            <li>
              <strong>Custom tour requests:</strong> Detailed forms for tailored
              travel experiences
            </li>
            <li>
              <strong>Quick contact forms:</strong> Fast response collection on
              every tour page
            </li>
            <li>
              <strong>Automated email notifications:</strong> Instant alerts to
              staff when new inquiries arrive
            </li>
            <li>
              <strong>Inquiry tracking:</strong> Status management (pending,
              responded, converted, closed)
            </li>
            <li>
              <strong>Response templates:</strong> Pre-written replies for
              common questions
            </li>
            <li>
              <strong>Follow-up reminders:</strong> Automated prompts ensuring
              no lead goes cold
            </li>
          </ul>

          <h3>Dynamic Content Management Dashboard</h3>
          <p>
            The powerful admin interface gives travel agencies complete control
            over their website content without needing technical knowledge:
          </p>
          <ul>
            <li>
              <strong>Page editor:</strong> Visual WYSIWYG editor for creating
              and updating any page content
            </li>
            <li>
              <strong>Tour package management:</strong> Add, edit, or remove
              tours with full control over descriptions, itineraries, pricing,
              and images
            </li>
            <li>
              <strong>Gallery management:</strong> Upload and organize
              destination photos with drag-and-drop functionality
            </li>
            <li>
              <strong>Blog/news section:</strong> Publish travel tips,
              destination guides, and company updates
            </li>
            <li>
              <strong>SEO controls:</strong> Edit meta titles, descriptions, and
              keywords for every page
            </li>
            <li>
              <strong>Menu builder:</strong> Customize navigation structure
              without coding
            </li>
            <li>
              <strong>Testimonials manager:</strong> Approve and display
              customer reviews
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Stunning Visual Design for Travel & Tourism</h2>
          <p>
            Our <strong>tourism website development Sri Lanka</strong> approach
            prioritizes visual storytelling that inspires wanderlust and drives
            bookings:
          </p>

          <h3>Beautiful Gallery Systems</h3>
          <ul>
            <li>
              <strong>Destination galleries:</strong> High-resolution photo
              showcases for each tour package
            </li>
            <li>
              <strong>Lightbox viewer:</strong> Full-screen image browsing with
              smooth transitions
            </li>
            <li>
              <strong>Video integration:</strong> Embed YouTube videos and
              virtual tours
            </li>
            <li>
              <strong>Before/after sliders:</strong> Interactive comparisons for
              seasonal destinations
            </li>
            <li>
              <strong>Instagram feed:</strong> Live social media integration
              showcasing recent trips
            </li>
            <li>
              <strong>Image optimization:</strong> Fast-loading WebP format with
              lazy loading
            </li>
          </ul>

          <h3>Interactive User Interface Elements</h3>
          <ul>
            <li>
              <strong>Interactive maps:</strong> Google Maps integration showing
              tour routes and pickup points
            </li>
            <li>
              <strong>Tour comparison tool:</strong> Side-by-side package
              comparisons
            </li>
            <li>
              <strong>Review sections:</strong> Star ratings, testimonials, and
              TripAdvisor integration
            </li>
            <li>
              <strong>Weather widgets:</strong> Real-time destination weather
              information
            </li>
            <li>
              <strong>Currency converter:</strong> Automatic price display in
              multiple currencies
            </li>
            <li>
              <strong>Live chat widget:</strong> Instant visitor assistance
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Automated Email Communication System</h2>
          <p>
            Professional, branded email automation keeps customers informed and
            engaged throughout their journey:
          </p>

          <h3>Customer Email Workflows</h3>
          <ul>
            <li>
              <strong>Booking confirmation:</strong> Instant receipt with tour
              details, payment summary, and next steps
            </li>
            <li>
              <strong>Pre-travel reminders:</strong> Automated emails 7 days, 3
              days, and 1 day before departure
            </li>
            <li>
              <strong>Itinerary delivery:</strong> Detailed day-by-day plans
              with maps and contact numbers
            </li>
            <li>
              <strong>Post-trip follow-up:</strong> Thank you emails with review
              requests
            </li>
            <li>
              <strong>Newsletter campaigns:</strong> Seasonal promotions and
              travel inspiration
            </li>
            <li>
              <strong>Inquiry responses:</strong> Automatic acknowledgment when
              inquiries are submitted
            </li>
          </ul>

          <h3>Internal Staff Notifications</h3>
          <ul>
            <li>
              <strong>New booking alerts:</strong> Instant notifications to
              operations team
            </li>
            <li>
              <strong>Inquiry notifications:</strong> Real-time alerts for new
              customer questions
            </li>
            <li>
              <strong>Daily booking summary:</strong> Morning digest of all new
              bookings
            </li>
            <li>
              <strong>Payment confirmations:</strong> Alerts when payments are
              processed
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Technology Stack & React Project Architecture</h2>
          <p>
            This <strong>React project in Sri Lanka</strong> utilizes
            cutting-edge web technologies optimized for performance,
            scalability, and user experience:
          </p>

          <h3>Frontend Development</h3>
          <ul>
            <li>
              <strong>React 18 with Vite:</strong> Ultra-fast development builds
              and optimized production bundles
            </li>
            <li>
              <strong>React Router v6:</strong> Smooth page transitions with
              lazy-loaded routes
            </li>
            <li>
              <strong>Framer Motion:</strong> Smooth animations and page
              transitions
            </li>
            <li>
              <strong>React Hook Form:</strong> Performant form handling with
              validation
            </li>
            <li>
              <strong>TailwindCSS:</strong> Responsive utility-first styling
              system
            </li>
            <li>
              <strong>React Query:</strong> Efficient data fetching and caching
            </li>
            <li>
              <strong>Swiper.js:</strong> Touch-enabled image carousels and
              sliders
            </li>
          </ul>

          <h3>Backend Infrastructure</h3>
          <ul>
            <li>
              <strong>Node.js & Express:</strong> RESTful API with robust
              middleware
            </li>
            <li>
              <strong>MongoDB:</strong> Flexible document database for tours,
              bookings, and content
            </li>
            <li>
              <strong>Mongoose ODM:</strong> Schema validation and data modeling
            </li>
            <li>
              <strong>NodeMailer:</strong> Professional email delivery with
              templates
            </li>
            <li>
              <strong>JWT Authentication:</strong> Secure admin and user
              sessions
            </li>
            <li>
              <strong>Multer:</strong> File upload handling for images and
              documents
            </li>
            <li>
              <strong>Express Validator:</strong> Input sanitization and
              validation
            </li>
          </ul>

          <h3>Third-Party Integrations</h3>
          <ul>
            <li>
              <strong>Google Maps API:</strong> Interactive tour route mapping
            </li>
            <li>
              <strong>Email service (SMTP):</strong> Reliable transactional
              email delivery
            </li>
            <li>
              <strong>Cloud storage (AWS S3 / Cloudinary):</strong> Scalable
              image hosting
            </li>
            <li>
              <strong>Google Analytics:</strong> Visitor tracking and conversion
              monitoring
            </li>
            <li>
              <strong>Facebook Pixel:</strong> Social media advertising
              integration
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Comprehensive Admin Dashboard</h2>
          <p>
            The administrative interface provides travel agencies with
            enterprise-grade tools for managing their entire online presence:
          </p>

          <h3>Booking & Customer Management</h3>
          <ol>
            <li>
              <strong>Booking dashboard:</strong> Visual calendar showing all
              confirmed tours, available capacity, and upcoming departures with
              status indicators (confirmed, pending, completed, cancelled).
            </li>
            <li>
              <strong>Customer database:</strong> Complete profiles with booking
              history, communication logs, preferences, and special
              requirements.
            </li>
            <li>
              <strong>Inquiry management:</strong> Centralized inbox for all
              customer inquiries with response tracking, priority flags, and
              assignment features.
            </li>
            <li>
              <strong>Payment tracking:</strong> Record deposits, installments,
              and final payments with automated receipt generation.
            </li>
            <li>
              <strong>Reporting tools:</strong> Revenue analytics, popular
              tours, seasonal trends, and customer acquisition sources.
            </li>
          </ol>

          <h3>Content & Website Management</h3>
          <ol>
            <li>
              <strong>Page editor:</strong> Visual drag-and-drop editor allowing
              non-technical staff to update any page content, add sections, and
              modify layouts.
            </li>
            <li>
              <strong>Tour package builder:</strong> Create new tours with
              multi-day itineraries, pricing tiers, image galleries, and
              availability calendars.
            </li>
            <li>
              <strong>Gallery manager:</strong> Organize destination photos into
              collections, add captions, set featured images, and bulk upload.
            </li>
            <li>
              <strong>Blog management:</strong> Publish travel guides,
              destination highlights, and company news with SEO optimization
              tools.
            </li>
            <li>
              <strong>Menu & navigation:</strong> Configure header menus, footer
              links, and sidebar widgets without touching code.
            </li>
            <li>
              <strong>Settings panel:</strong> Control site-wide options like
              contact information, social media links, business hours, and
              payment methods.
            </li>
          </ol>

          <div className="pa-screens">
            <img
              src={dash1}
              alt="Admin dashboard booking calendar - travel agency web development Sri Lanka"
            />
            <img
              src={dash2}
              alt="Content management interface - custom web application"
            />
          </div>
        </section>

        <section className="pa-section pa-frontend">
          <h2>Customer-Facing Interface Design</h2>
          <p>
            The public-facing website creates an immersive browsing experience
            that showcases Sri Lankan destinations beautifully while maintaining
            excellent usability:
          </p>

          <h3>Homepage & Tour Discovery</h3>
          <ul>
            <li>
              <strong>Hero banner:</strong> Stunning full-width imagery with
              compelling call-to-action
            </li>
            <li>
              <strong>Featured tours:</strong> Highlighted packages with
              attractive cards showing images, pricing, and quick details
            </li>
            <li>
              <strong>Destination categories:</strong> Browse tours by region
              (Cultural Triangle, Southern Coast, Hill Country, etc.)
            </li>
            <li>
              <strong>Search & filters:</strong> Find perfect tours by duration,
              budget, activity type, or season
            </li>
            <li>
              <strong>Trust signals:</strong> Customer testimonials, safety
              certifications, and secure booking badges
            </li>
          </ul>

          <h3>Tour Detail Pages</h3>
          <ul>
            <li>
              <strong>Photo galleries:</strong> Large, high-quality destination
              images with lightbox viewer
            </li>
            <li>
              <strong>Detailed itinerary:</strong> Day-by-day breakdown with
              expandable sections
            </li>
            <li>
              <strong>Inclusions & exclusions:</strong> Clear lists of what's
              covered
            </li>
            <li>
              <strong>Interactive map:</strong> Visual route display with key
              stops marked
            </li>
            <li>
              <strong>Pricing table:</strong> Transparent cost breakdown by
              season and group size
            </li>
            <li>
              <strong>Related tours:</strong> Suggested alternatives and
              extensions
            </li>
            <li>
              <strong>Booking form:</strong> Sticky sidebar or floating button
              for easy conversion
            </li>
          </ul>

          <div className="pa-screens">
            <img
              src={fe1}
              alt="Tour booking interface - tourism website development Sri Lanka"
            />
            <img src={fe2} alt="Tour details page - React web application" />
          </div>

          <p className="pa-muted" style={{ marginTop: "8px" }}>
            <em>
              Performance-optimized architecture: Progressive image loading,
              route-based code splitting, and aggressive caching strategies
              ensure fast page loads even on slower connections.
            </em>
          </p>
        </section>

        <section className="pa-section">
          <h2>Performance Optimization & SEO</h2>
          <p>
            As a leading <strong>web development company in Sri Lanka</strong>,
            we implemented comprehensive optimization for search visibility and
            user experience:
          </p>

          <h3>Technical SEO Implementation</h3>
          <ul>
            <li>
              <strong>Server-side rendering (SSR):</strong> Pre-rendered pages
              for instant Google crawling
            </li>
            <li>
              <strong>Dynamic meta tags:</strong> Unique titles and descriptions
              for every tour package
            </li>
            <li>
              <strong>Schema markup:</strong> Rich snippets for tours, reviews,
              and business info
            </li>
            <li>
              <strong>XML sitemap:</strong> Auto-generated for efficient search
              indexing
            </li>
            <li>
              <strong>Canonical URLs:</strong> Prevent duplicate content issues
            </li>
            <li>
              <strong>Structured data:</strong> TourPackage, Review, and
              LocalBusiness schemas
            </li>
            <li>
              <strong>Open Graph tags:</strong> Beautiful social media sharing
              cards
            </li>
          </ul>

          <h3>Performance Enhancements</h3>
          <ul>
            <li>
              <strong>Image optimization:</strong> Next-gen WebP format with
              automatic resizing
            </li>
            <li>
              <strong>Lazy loading:</strong> Images load only when scrolled into
              view
            </li>
            <li>
              <strong>Code splitting:</strong> JavaScript bundles split by route
            </li>
            <li>
              <strong>CDN delivery:</strong> Global content delivery for fast
              access worldwide
            </li>
            <li>
              <strong>Browser caching:</strong> Aggressive cache headers for
              returning visitors
            </li>
            <li>
              <strong>Minification:</strong> Compressed CSS, JS, and HTML
            </li>
            <li>
              <strong>Critical CSS:</strong> Inline above-the-fold styles for
              instant rendering
            </li>
          </ul>

          <h3>Core Web Vitals Results</h3>
          <ul>
            <li>
              <strong>Largest Contentful Paint (LCP):</strong> Under 1.8 seconds
            </li>
            <li>
              <strong>First Input Delay (FID):</strong> Less than 50ms
            </li>
            <li>
              <strong>Cumulative Layout Shift (CLS):</strong> Below 0.05
            </li>
            <li>
              <strong>Lighthouse Performance Score:</strong> 95+ consistently
            </li>
            <li>
              <strong>Mobile-friendliness:</strong> 100% Google Mobile-Friendly
              Test
            </li>
          </ul>
        </section>

        {/* Gallery */}
        <section className="pa-section">
          <h2>Project Gallery: Complete Website Walkthrough</h2>

          <p>
            Browse detailed screenshots showcasing every aspect of this{" "}
            <strong>travel agency web development</strong> project. From
            stunning tour galleries to powerful admin tools, see how we create
            comprehensive digital solutions for tourism businesses in Sri Lanka.
          </p>

          {images.length === 0 ? (
            <div className="pa-gallery-empty">
              <p>Gallery showcases.</p>
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
                    alt={`Around Lanka Travels tourism website screenshot ${
                      i + 1
                    } - travel agency web development Sri Lanka by Axivelt Solutions`}
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
                alt={`Around Lanka Travels website screenshot ${
                  currentIndex + 1
                } - tourism web development Sri Lanka`}
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
          <h2>Why Choose Axivelt for Travel Website Development</h2>
          <p>
            This <strong>tourism website development Sri Lanka</strong> project
            demonstrates our deep understanding of the travel industry's unique
            digital needs. We've helped multiple agencies transform their online
            presence and increase bookings through strategic web solutions.
          </p>

          <h3>Our Travel Industry Expertise</h3>
          <ul>
            <li>
              <strong>Industry knowledge:</strong> Understanding of tourism
              workflows, peak seasons, and customer behavior
            </li>
            <li>
              <strong>Visual storytelling:</strong> Creating emotional
              connections through stunning imagery and compelling content
            </li>
            <li>
              <strong>Conversion optimization:</strong> Booking forms and CTAs
              designed to maximize inquiries
            </li>
            <li>
              <strong>Mobile-first approach:</strong> Majority of travel
              research happens on phones
            </li>
            <li>
              <strong>International best practices:</strong> Features inspired
              by leading global travel platforms
            </li>
            <li>
              <strong>Local context:</strong> Understanding Sri Lankan market
              and tourist expectations
            </li>
          </ul>

          <h3>What Sets Our Web Development Projects Apart</h3>
          <ul>
            <li>
              <strong>Complete solutions:</strong> Not just websites, but
              comprehensive booking and management systems
            </li>
            <li>
              <strong>User empowerment:</strong> Admin dashboards that make you
              independent
            </li>
            <li>
              <strong>Future-proof technology:</strong> Built on modern React
              stack that scales
            </li>
            <li>
              <strong>Ongoing partnership:</strong> We stay involved for
              training, support, and growth
            </li>
            <li>
              <strong>Transparent pricing:</strong> Clear quotes with no
              surprise costs
            </li>
            <li>
              <strong>Fast delivery:</strong> Most projects live within 8-12
              weeks
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="pa-cta" id="contact">
          <h2>Ready to Build Your Travel Agency Website?</h2>
          <p>
            Whether you need a <strong>tour booking system</strong>, destination
            showcase website, or complete{" "}
            <strong>travel agency web application</strong> — Axivelt Solutions
            creates custom digital experiences that inspire bookings and grow
            your tourism business in Sri Lanka.
          </p>

          <div className="pa-cta-features">
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">🚀</span>
              <strong>Fast Launch:</strong> Beautiful travel websites delivered
              in 8-12 weeks
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">💰</span>
              <strong>Affordable Packages:</strong> Transparent pricing tailored
              for travel agencies
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">🔧</span>
              <strong>Full Training:</strong> We teach you to manage content
              independently
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">📱</span>
              <strong>Mobile Excellence:</strong> Stunning on every device
              travelers use
            </div>
          </div>

          <div className="pa-cta-buttons">
            <Link to="/#get-a-quote" className="btn btn-primary">
              Get Your Free Travel Website Quote
            </Link>
            <Link to="/our-projects" className="btn btn-secondary">
              View More Tourism Projects
            </Link>
          </div>

          <p className="pa-cta-contact">
            <strong>Let's discuss your project:</strong>{" "}
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
            <Link to="/projects/easyneat" className="pa-related-card">
              <h3>EasyNeat Cleaning Service Platform</h3>
              <p>
                Complete booking system with advanced scheduling, customer
                management, and admin dashboard for cleaning service business
              </p>
              <span className="pa-related-link">View Case Study →</span>
            </Link>

            <Link to="/projects/motogear" className="pa-related-card">
              <h3>MotoGear E-commerce Platform</h3>
              <p>
                Full-featured online store with inventory management, order
                processing, and customer portal for motorcycle parts retailer
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

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Around Lanka Travels - Travel Agency Website",
              url: "https://axivelt.com/projects/aroundlanka",
              description:
                "Professional travel agency website developed in Sri Lanka. Custom React web application with tour booking system, inquiry management, dynamic content editing, email automation, and comprehensive admin dashboard. Built by Axivelt Solutions for tourism businesses.",
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
                "Advanced tour booking form with multi-step wizard",
                "Dynamic content management system",
                "Beautiful destination galleries with lightbox viewer",
                "Comprehensive inquiry management system",
                "Automated email notifications for customers and staff",
                "Admin dashboard with booking calendar",
                "Tour package builder and editor",
                "Page content editor for non-technical users",
                "Image gallery manager with bulk upload",
                "Blog and news management",
                "SEO optimization tools",
                "Mobile-responsive design",
                "Google Maps integration",
                "Customer testimonials and reviews",
                "Multi-currency support",
              ],
              keywords:
                "travel agency website Sri Lanka, tourism website development, tour booking system, React web application development Sri Lanka, custom web applications, web development projects Sri Lanka, travel website design, React projects Sri Lanka",
            }),
          }}
        />

        {/* Additional Schema - Article */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline:
                "Around Lanka Travels - Travel Agency Website Development Case Study",
              description:
                "Complete case study of custom travel agency website development in Sri Lanka featuring booking system, content management, and admin dashboard",
              author: {
                "@type": "Organization",
                name: "Axivelt Solutions",
                url: "https://axivelt.com",
              },
              publisher: {
                "@type": "Organization",
                name: "Axivelt Solutions",
                logo: {
                  "@type": "ImageObject",
                  url: "https://axivelt.com/logo.png",
                },
              },
              datePublished: "2024-01-15",
              dateModified: "2024-01-15",
              image: heroImg,
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://axivelt.com/projects/aroundlanka",
              },
            }),
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://axivelt.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projects",
                  item: "https://axivelt.com/our-projects",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Around Lanka Travels",
                  item: "https://axivelt.com/projects/aroundlanka",
                },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}
