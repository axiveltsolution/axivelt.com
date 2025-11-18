// src/pages/OurProjects.jsx
import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./OurProjects.css";

import HeroSection from "../../Components/HeroSection/HeroSection.jsx";
import HeroBg from "./../../assets/Hero/software-development-company-in-sri-lanka-axivelt-solutions-our-projects.webp";

import EasyNeatIMG from "./../../assets/projects/easyneat.au.com/australian-cleaning-company-website-easyneat.au.com-axivelt-solutions-web-development-in-sri-lanka-projects-frontend.jpg";
import MotogearIMG from "./../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import AroundLankaIMG from "./../../assets/projects/aroundlankatravels.com/sri-lanka-traveling-agency-website-aroundlankatravels.com-axivelt-solutions-web-development-in-sri-lanka-project-hero.jpg";

/**
 * OurProjects Page - SEO Optimized
 * Portfolio showcase for Axivelt Solutions
 */

const projects = [
  {
    title: "EasyNeat - Cleaning Service Booking Platform",
    description:
      "Professional booking platform and admin dashboard for cleaning service business in Victoria, Australia. Features advanced multi-step booking form with real-time availability, customer inquiry system, staff scheduling, automated notifications, and comprehensive admin dashboard. Built with React (Vite) and Node.js for exceptional performance and security.",
    image: EasyNeatIMG,
    website: "https://easyneat.com.au",
    href: "/projects/easyNeat-cleaning-service-booking-platform",
    tags: ["Booking System", "React", "Admin Dashboard", "Australia"],
    location: "Melbourne, Australia",
  },
  {
    title: "MotoGear - Inventory Management System",
    description:
      "Professional inventory management system for motorcycle helmet and parts retail store in Sri Lanka. Features comprehensive stock tracking, integrated POS system with receipt printing, sales recording, expense management, and beautiful analytics dashboards. Streamlines retail operations and eliminates manual processes with clean, intuitive interface.",
    image: MotogearIMG,
    website: "",
    href: "/projects/motogear-inventory-management-system",
    tags: ["Inventory System", "POS System", "Retail Software", "Sri Lanka"],
    location: "Colombo, Sri Lanka",
  },
  {
    title: "Around Lanka Travels - Tour Booking Platform",
    description:
      "Complete travel agency website for Sri Lankan tourism business. Features advanced tour booking system, dynamic content management dashboard, beautiful destination galleries, inquiry management, automated email notifications, and page editor for non-technical users. Empowers travel agencies to showcase tours and convert visitors into confirmed bookings.",
    image: AroundLankaIMG,
    website: "https://aroundlankatravels.com/",
    href: "/projects/around-lanka-travels-tour-booking-platform",
    tags: ["Travel Agency", "Booking System", "Tourism", "Sri Lanka"],
    location: "Sri Lanka",
  },
  // Add more projects here
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
  const { title, description, image, website, href, tags, location } = project;
  const navigate = useNavigate();
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
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
      aria-label={href ? `View ${title} case study` : title}
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="op-thumb">
        {!imgError ? (
          <img
            className="op-img"
            src={image}
            alt={`${title} - custom website development by Axivelt Solutions`}
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

        {tags && tags.length > 0 && (
          <div className="op-tags">
            {tags.map((tag, i) => (
              <span key={i} className="op-tag">
                {tag}
              </span>
            ))}
          </div>
        )}

        {location && <p className="op-location">📍 {location}</p>}

        <p className="op-desc">{description}</p>

        <div className="op-actions">
          {website && (
            <a
              className="op-visit"
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onExternalClick}
              aria-label={`Visit ${title} website (opens in new tab)`}>
              Visit Website ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function OurProjects() {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>
          Our Projects | Software Development Portfolio Sri Lanka | Axivelt
          Solutions
        </title>
        <meta
          name="description"
          content="Explore our portfolio of custom software, websites, web applications, and e-commerce platforms. Real projects delivered for businesses in Sri Lanka and internationally by Axivelt Solutions."
        />
        <meta
          name="keywords"
          content="software development portfolio Sri Lanka, web development portfolio Sri Lanka, custom software examples, custom website examples, web app portfolio, e-commerce projects Sri Lanka, Axivelt projects, website design portfolio Colombo"
        />
        <link rel="canonical" href="https://axivelt.com/our-projects" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Our Projects - Software Development Portfolio | Axivelt Solutions"
        />
        <meta
          property="og:description"
          content="See our portfolio of custom software, websites and web applications built for businesses in Sri Lanka and internationally."
        />
        <meta property="og:url" content="https://axivelt.com/our-projects" />
        <meta
          property="og:image"
          content="https://axivelt.com/og-image-projects.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Projects - Software Development Portfolio"
        />
        <meta
          name="twitter:description"
          content="Custom software, websites, web apps, and e-commerce platforms built by Axivelt Solutions."
        />
        <meta
          name="twitter:image"
          content="https://axivelt.com/og-image-projects.jpg"
        />

        {/* Schema Markup - Collection Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Software Development Projects Portfolio",
              description:
                "Portfolio of custom software, websites and web applications by Axivelt Solutions",
              url: "https://axivelt.com/our-projects",
              provider: {
                "@type": "Organization",
                name: "Axivelt Solutions",
                url: "https://axivelt.com",
              },
            }),
          }}
        />

        {/* Breadcrumb Schema */}
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
                  name: "Our Projects",
                  item: "https://axivelt.com/our-projects",
                },
              ],
            }),
          }}
        />
      </Helmet>
      <HeroSection
        title="Showcasing Our Works"
        subtitle="Here are the websites, systems, and applications we’ve developed with precision, creativity, and a focus on user experience."
        backgroundImage={HeroBg}
      />
      <section
        className="op-section section"
        aria-labelledby="op-projects-title">
        <div className="op-slab">
          <header className="op-header">
            <div>
              <div className="op-badge">Our Portfolio</div>
              <h2 id="op-projects-title" className="op-heading">
                Custom Software, Websites & Web Applications We've Built
              </h2>
              <p className="op-sub">
                Real projects delivered for businesses across Sri Lanka and
                internationally. From e-commerce platforms to booking systems -
                See how our software and web development expertise transforms
                ideas into successful digital products.
              </p>
            </div>
          </header>

          <div className="op-grid">
            {projects.map((p, i) => (
              <ProjectCard key={p.title + i} project={p} />
            ))}
          </div>

          {/* CTA Section */}
          <div
            className="op-cta"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${HeroBg})`,
            }}>
            <h2 className="op-cta-title">Ready to Start Your Project?</h2>
            <p className="op-cta-text">
              Let's build something amazing together. Get your free custom
              software or website quote today.
            </p>
            <div className="op-cta-actions">
              <Link to="/getaquote" className="op-btn-primary">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
