import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./article.css";

import heroImg from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import ImgReports1 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard(1).webp";
import ImgReports2 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import ProductSearch1 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard(2).webp";
import ProductSearch2 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard(3).webp";

export default function MotoGearInventorySystemArticle() {
  let images = [];
  try {
    const modules = import.meta.globEager(
      "../../assets/galleries/motogear/*.{jpg,jpeg,png,webp}",
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
          MotoGear Inventory Management System | Custom Inventory Software Sri
          Lanka | Axivelt Solutions
        </title>
        <meta
          name="description"
          content="Professional inventory management system for motorcycle parts and helmet stores in Sri Lanka. Complete stock tracking, POS system, sales recording, expense management, and analytics. Custom web development for retail businesses."
        />
        <meta
          name="keywords"
          content="inventory management system Sri Lanka, inventory software Sri Lanka, stock management system, POS system Sri Lanka, retail management software, custom web applications Sri Lanka, web development projects Sri Lanka, motorcycle parts inventory, small business software, affordable inventory system Sri Lanka"
        />
        <link
          rel="canonical"
          href="https://axivelt.com/projects/motogear-inventory-management-system"
        />
      </Helmet>

      <main className="article-page">
        <div className="container">
          <header className="article-header">
            <span className="badge-label text-red">Business Software</span>
            <h1 className="article-title">MotoGear Inventory System</h1>
            <p className="article-subtitle">
              Professional inventory management system featuring comprehensive
              stock tracking, integrated POS, sales recording, expense
              management, and powerful analytics.
            </p>
          </header>

          <div className="article-hero-wrapper">
            <img src={heroImg} alt="MotoGear inventory management system" />
          </div>

          <div className="article-content">
            <section className="article-section">
              <h2>Custom Inventory Management System</h2>
              <p>
                MotoGear is a production-grade{" "}
                <strong>
                  inventory management system developed in Sri Lanka
                </strong>{" "}
                specifically designed for motorcycle parts and helmet retail
                stores. This custom web application transforms how local
                retailers manage their stock, track sales, monitor expenses, and
                make data-driven business decisions.
              </p>
            </section>

            <section className="article-section">
              <h2>Key Features & Solutions</h2>
              <h3>Comprehensive Stock Management</h3>
              <p>
                The core of this inventory software project is an intelligent
                stock tracking system that provides complete visibility over
                your inventory:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Real-time stock levels:</strong> Live tracking of
                  available quantities, low-stock alerts, and automatic reorder
                  notifications.
                </li>
                <li>
                  <strong>Product catalog management:</strong> Add unlimited
                  items with details like SKU, brand, model, category, and
                  supplier.
                </li>
                <li>
                  <strong>Stock adjustments:</strong> Record stock additions,
                  returns, damages, and transfers with full audit trails.
                </li>
                <li>
                  <strong>Product variations:</strong> Handle size, color, and
                  model variants efficiently.
                </li>
              </ul>

              <h3>Integrated Point of Sale (POS) System</h3>
              <p>
                The built-in POS solution enables seamless in-store sales
                transactions:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Fast product lookup:</strong> Quick search by name,
                  SKU, barcode, or category.
                </li>
                <li>
                  <strong>Real-time pricing:</strong> Automatic calculation of
                  totals, taxes, and discounts.
                </li>
                <li>
                  <strong>Receipt printing:</strong> Professional thermal
                  printer integration with customizable templates.
                </li>
                <li>
                  <strong>Instant inventory update:</strong> Automatic stock
                  deduction upon sale completion.
                </li>
              </ul>

              <div className="article-screens">
                <img src={ProductSearch1} alt="MotoGear inventory dashboard" />
                <img
                  src={ProductSearch2}
                  alt="POS interface and sales recording"
                />
              </div>
            </section>

            <section className="article-section">
              <h2>Beautiful Data Visualization & Analytics</h2>
              <p>
                Our retail management software includes powerful visual
                analytics that turn raw data into actionable business insights:
              </p>
              <ul className="article-list">
                <li>
                  <strong>Sales trend charts:</strong> Line graphs showing
                  revenue patterns over time.
                </li>
                <li>
                  <strong>Product performance bars:</strong> Best-selling items
                  and categories visualized.
                </li>
                <li>
                  <strong>Revenue vs expenses:</strong> Side-by-side comparison
                  graphs for profitability analysis.
                </li>
              </ul>

              <div className="article-screens">
                <img src={ImgReports1} alt="Product management interface" />
                <img src={ImgReports2} alt="Sales analytics dashboard" />
              </div>
            </section>

            <section className="article-section">
              <h2>Technology Stack & Architecture</h2>
              <ul className="article-list">
                <li>
                  <strong>Frontend:</strong> HTML5, CSS3, Vanilla JavaScript,
                  Chart.js, Bootstrap components
                </li>
                <li>
                  <strong>Backend:</strong> PHP 7.4+, MySQL Database, PDO
                  Prepared Statements
                </li>
                <li>
                  <strong>Security:</strong> Encrypted sessions, Password
                  hashing (bcrypt), CSRF tokens, SQL Injection prevention
                </li>
                <li>
                  <strong>Integrations:</strong> ESC/POS Thermal Printer
                  support, Automatic Barcode generation
                </li>
              </ul>
            </section>

            <section className="article-section">
              <h2>Project Gallery Walkthrough</h2>
              <p>
                Explore detailed screenshots of every module in this inventory
                management system. See the clean dashboards, intuitive POS
                interface, and beautiful analytics visualizations.
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
              <h2>Ready to Modernize Your Retail Business?</h2>
              <p>
                Axivelt Solutions builds custom business applications that
                eliminate manual work and boost profitability for small
                businesses in Sri Lanka.
              </p>

              <div className="article-cta-buttons">
                <Link to="/#contact" className="btn btn-primary">
                  Get Your Free Quote
                </Link>
              </div>
            </section>

            <section className="article-section">
              <h2>More Custom Web Applications</h2>
              <div className="article-related-grid">
                <Link
                  to="/projects/easyNeat-cleaning-service-booking-platform"
                  className="glass-card">
                  <span className="badge-label">Web App</span>
                  <h3>EasyNeat Platform</h3>
                  <p
                    className="article-subtitle"
                    style={{ fontSize: "0.95rem", margin: "10px 0 20px 0" }}>
                    Complete booking system with advanced scheduling and admin
                    dashboard.
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MotoGear Inventory Management System",
            url: "https://axivelt.com/projects/motogear-inventory-management-system",
            description:
              "Professional inventory management system for motorcycle parts and helmet retail stores in Sri Lanka. Features comprehensive stock tracking, integrated POS system, sales recording, expense management, receipt printing, and visual analytics. Custom software built by Axivelt Solutions for small retail businesses.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web Browser",
            offers: { "@type": "Offer", price: "0", priceCurrency: "LKR" },
            creator: {
              "@type": "Organization",
              name: "Axivelt Solutions",
              url: "https://axivelt.com",
            },
            screenshot: heroImg,
          }),
        }}
      />
    </>
  );
}
