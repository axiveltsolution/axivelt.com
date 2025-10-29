// src/pages/projects/MotoGearInventorySystemArticle.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./article.css";

import heroImg from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import ImgReports1 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard(1).webp";
import ImgReports2 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard.webp";
import ProductSearch1 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard(2).webp";
import ProductSearch2 from "../../assets/projects/motogearinventorysystem/inventory-management-system-development-axivelt-solutions-web-development-in-sri-lanka-project-dashboard(3).webp";

/* Gallery dynamic import (Vite) */
export default function MotoGearInventorySystemArticle() {
  let images = [];
  try {
    const modules = import.meta.globEager(
      "../../assets/galleries/motogear/*.{jpg,jpeg,png,webp}"
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
          href="https://axivelt.com/projects/motogear-inventory-management-system"
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
          content="MotoGear - Inventory Management System for Retail Stores | Axivelt Solutions"
        />
        <meta
          property="og:description"
          content="Complete inventory management system with POS, sales tracking, expense management, and analytics. Custom software built for motorcycle parts and helmet retail business in Sri Lanka."
        />
        <meta
          property="og:url"
          content="https://axivelt.com/projects/motogear-inventory-management-system"
        />
        <meta
          property="og:image"
          content="https://axivelt.com/projects/motogear-og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="MotoGear - Inventory Management System Sri Lanka"
        />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@axivelt" />
        <meta name="twitter:creator" content="@axivelt" />
        <meta
          name="twitter:title"
          content="MotoGear Inventory System | Custom Retail Software Sri Lanka"
        />
        <meta
          name="twitter:description"
          content="Professional inventory management system with POS, stock tracking, and analytics for retail businesses in Sri Lanka."
        />
        <meta
          name="twitter:image"
          content="https://axivelt.com/projects/motogear-og.jpg"
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
              MotoGear Inventory Management System
            </h1>
            <h2>
              Complete Retail Solution for Motorcycle Parts & Helmet Stores
            </h2>
            <p className="pa-hero-sub">
              Professional inventory management system featuring comprehensive
              stock tracking, integrated POS, sales recording, expense
              management, and powerful analytics - empowering retail businesses
              to streamline operations and boost profitability.
            </p>
          </div>

          <div className="pa-hero-image">
            <img
              src={heroImg}
              alt="MotoGear inventory management system - custom retail software Sri Lanka"
            />
          </div>
        </article>

        <section className="pa-section">
          <h2>Custom Inventory Management System for Retail Businesses</h2>
          <p>
            MotoGear is a production-grade{" "}
            <strong>inventory management system developed in Sri Lanka</strong>{" "}
            specifically designed for motorcycle parts and helmet retail stores.
            This <strong>custom web application</strong> transforms how local
            retailers manage their stock, track sales, monitor expenses, and
            make data-driven business decisions.
          </p>
          <p>
            As one of our comprehensive{" "}
            <strong>web development projects in Sri Lanka</strong>, we built a
            complete business management solution that handles everything from
            real-time inventory tracking and point-of-sale transactions to
            expense recording and visual analytics - all designed to eliminate
            manual processes and reduce operational errors for small retail
            businesses.
          </p>
        </section>

        <section className="pa-section">
          <h2>Key Features of Our Inventory Management System</h2>

          <h3>Comprehensive Stock Management</h3>
          <p>
            The core of this <strong>inventory software Sri Lanka</strong>{" "}
            project is an intelligent stock tracking system that provides
            complete visibility over your inventory:
          </p>
          <ul>
            <li>
              <strong>Product catalog management:</strong> Add unlimited items
              with details like SKU, brand, model, category, supplier, and
              specifications
            </li>
            <li>
              <strong>Real-time stock levels:</strong> Live tracking of
              available quantities, low-stock alerts, and automatic reorder
              notifications
            </li>
            <li>
              <strong>Stock adjustments:</strong> Record stock additions,
              returns, damages, and transfers with full audit trails
            </li>
            <li>
              <strong>Batch & serial tracking:</strong> Track individual items
              by batch numbers or serial codes for warranties
            </li>
            <li>
              <strong>Multi-location support:</strong> Manage inventory across
              multiple store locations or warehouses
            </li>
            <li>
              <strong>Category organization:</strong> Hierarchical product
              categorization (helmets, bike parts, accessories, etc.)
            </li>
            <li>
              <strong>Product variations:</strong> Handle size, color, and model
              variants efficiently
            </li>
          </ul>

          <h3>Integrated Point of Sale (POS) System</h3>
          <p>
            The built-in <strong>POS system Sri Lanka</strong> solution enables
            seamless in-store sales transactions:
          </p>
          <ul>
            <li>
              <strong>Fast product lookup:</strong> Quick search by name, SKU,
              barcode, or category
            </li>
            <li>
              <strong>Shopping cart interface:</strong> Add multiple items,
              adjust quantities, apply discounts
            </li>
            <li>
              <strong>Real-time pricing:</strong> Automatic calculation of
              totals, taxes, and discounts
            </li>
            <li>
              <strong>Multiple payment methods:</strong> Cash, card, mobile
              payments, and split payments
            </li>
            <li>
              <strong>Receipt printing:</strong> Professional thermal printer
              integration with customizable templates
            </li>
            <li>
              <strong>Customer information:</strong> Optional customer details
              for warranty tracking
            </li>
            <li>
              <strong>Instant inventory update:</strong> Automatic stock
              deduction upon sale completion
            </li>
            <li>
              <strong>Quick checkout:</strong> Streamlined process for fast
              customer service
            </li>
          </ul>

          <h3>Sales Recording & Transaction History</h3>
          <p>
            Complete sales tracking module that maintains detailed records of
            all transactions:
          </p>
          <ul>
            <li>
              <strong>Sales dashboard:</strong> Daily, weekly, monthly, and
              yearly sales summaries
            </li>
            <li>
              <strong>Transaction history:</strong> Searchable database of all
              completed sales with full details
            </li>
            <li>
              <strong>Invoice management:</strong> Generate, view, print, and
              void invoices
            </li>
            <li>
              <strong>Sales reports:</strong> Filter by date range, product,
              category, or staff member
            </li>
            <li>
              <strong>Return processing:</strong> Handle product returns and
              refunds with proper documentation
            </li>
            <li>
              <strong>Payment tracking:</strong> Monitor cash flow and payment
              method breakdowns
            </li>
            <li>
              <strong>Staff performance:</strong> Track individual sales by team
              members
            </li>
          </ul>

          <h3>Expense Management System</h3>
          <p>
            Comprehensive expense tracking to monitor business costs and
            profitability:
          </p>
          <ul>
            <li>
              <strong>Expense recording:</strong> Log all business expenses with
              date, category, amount, and description
            </li>
            <li>
              <strong>Expense categories:</strong> Organize costs (rent,
              utilities, salaries, purchases, marketing, etc.)
            </li>
            <li>
              <strong>Supplier payments:</strong> Track payments to inventory
              suppliers
            </li>
            <li>
              <strong>Receipt attachments:</strong> Upload and store expense
              receipts digitally
            </li>
            <li>
              <strong>Expense reports:</strong> Monthly expense summaries and
              category breakdowns
            </li>
            <li>
              <strong>Profit calculation:</strong> Automatic profit/loss
              analysis comparing revenue vs expenses
            </li>
            <li>
              <strong>Budget monitoring:</strong> Set budgets and track spending
              against targets
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Beautiful Data Visualization & Analytics</h2>
          <p>
            Our <strong>retail management software</strong> includes powerful
            visual analytics that turn raw data into actionable business
            insights:
          </p>

          <h3>Interactive Dashboard Graphs</h3>
          <ul>
            <li>
              <strong>Sales trend charts:</strong> Line graphs showing revenue
              patterns over time
            </li>
            <li>
              <strong>Product performance bars:</strong> Best-selling items and
              categories visualized
            </li>
            <li>
              <strong>Inventory levels:</strong> Visual stock status across all
              products
            </li>
            <li>
              <strong>Revenue vs expenses:</strong> Side-by-side comparison
              graphs for profitability analysis
            </li>
            <li>
              <strong>Category distribution:</strong> Pie charts showing sales
              breakdown by product type
            </li>
            <li>
              <strong>Payment method analysis:</strong> Cash vs card transaction
              visualizations
            </li>
            <li>
              <strong>Monthly comparisons:</strong> Year-over-year growth charts
            </li>
            <li>
              <strong>Low stock alerts:</strong> Visual indicators for items
              needing reorder
            </li>
          </ul>

          <h3>Comprehensive Reporting Tools</h3>
          <ul>
            <li>
              <strong>Sales reports:</strong> Detailed breakdowns by day, week,
              month, quarter, or year
            </li>
            <li>
              <strong>Inventory reports:</strong> Current stock levels,
              valuation, and movement history
            </li>
            <li>
              <strong>Profit & loss statements:</strong> Complete financial
              overview with margins
            </li>
            <li>
              <strong>Product performance reports:</strong> Identify top sellers
              and slow movers
            </li>
            <li>
              <strong>Customer purchase history:</strong> Track repeat buyers
              and average order values
            </li>
            <li>
              <strong>Export functionality:</strong> Download reports as PDF or
              Excel for accounting
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Clean, Intuitive Dashboard Design</h2>
          <p>
            The <strong>inventory management system</strong> features a
            professionally designed interface that makes complex operations
            simple:
          </p>

          <h3>Modern Dashboard Layout</h3>
          <ul>
            <li>
              <strong>At-a-glance overview:</strong> Key metrics displayed on
              homepage (total sales, inventory value, low stock items, today's
              revenue)
            </li>
            <li>
              <strong>Quick actions:</strong> One-click access to common tasks
              (add product, make sale, record expense)
            </li>
            <li>
              <strong>Visual cards:</strong> Color-coded information cards for
              different data types
            </li>
            <li>
              <strong>Responsive layout:</strong> Works perfectly on desktop,
              tablet, and mobile devices
            </li>
            <li>
              <strong>Clean navigation:</strong> Intuitive menu structure with
              logical grouping
            </li>
            <li>
              <strong>Search everywhere:</strong> Global search functionality to
              find anything quickly
            </li>
          </ul>

          <h3>User-Friendly Features</h3>
          <ul>
            <li>
              <strong>Minimal training required:</strong> Intuitive interface
              that staff can learn in minutes
            </li>
            <li>
              <strong>Contextual help:</strong> Tooltips and hints guide users
              through processes
            </li>
            <li>
              <strong>Keyboard shortcuts:</strong> Speed up operations with
              quick key combinations
            </li>
            <li>
              <strong>Dark mode option:</strong> Reduce eye strain during long
              work sessions
            </li>
            <li>
              <strong>Customizable views:</strong> Adjust layouts to match
              workflow preferences
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Technology Stack & System Architecture</h2>
          <p>
            This <strong>custom web application Sri Lanka</strong> project
            utilizes proven web technologies optimized for reliability and
            performance:
          </p>

          <h3>Frontend Development</h3>
          <ul>
            <li>
              <strong>HTML5 & CSS3:</strong> Modern semantic markup with
              responsive CSS Grid and Flexbox layouts
            </li>
            <li>
              <strong>Vanilla JavaScript:</strong> Lightweight, fast-loading
              scripts without framework overhead
            </li>
            <li>
              <strong>Chart.js:</strong> Beautiful, interactive graphs and data
              visualizations
            </li>
            <li>
              <strong>Bootstrap components:</strong> Consistent UI elements and
              responsive utilities
            </li>
            <li>
              <strong>AJAX requests:</strong> Smooth, asynchronous data loading
              without page refreshes
            </li>
            <li>
              <strong>Print stylesheets:</strong> Optimized layouts for receipt
              printing
            </li>
          </ul>

          <h3>Backend Infrastructure</h3>
          <ul>
            <li>
              <strong>PHP 7.4+:</strong> Robust server-side processing with
              object-oriented architecture
            </li>
            <li>
              <strong>MySQL database:</strong> Reliable relational database for
              structured data storage
            </li>
            <li>
              <strong>PDO prepared statements:</strong> Secure database queries
              preventing SQL injection
            </li>
            <li>
              <strong>Session management:</strong> Secure user authentication
              and access control
            </li>
            <li>
              <strong>Error handling:</strong> Comprehensive logging and
              graceful error recovery
            </li>
            <li>
              <strong>Backup automation:</strong> Scheduled database backups for
              data protection
            </li>
          </ul>

          <h3>Key Integrations</h3>
          <ul>
            <li>
              <strong>Thermal printer support:</strong> Direct printing via
              ESC/POS commands
            </li>
            <li>
              <strong>Barcode generation:</strong> Automatic barcode creation
              for products
            </li>
            <li>
              <strong>PDF generation:</strong> Export reports and invoices as
              PDFs
            </li>
            <li>
              <strong>Excel export:</strong> Data export for external analysis
            </li>
            <li>
              <strong>Email notifications:</strong> Automated alerts for low
              stock and important events
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Complete Feature Set</h2>
          <p>
            This <strong>small business software</strong> solution includes
            everything needed to run a modern retail operation:
          </p>

          <h3>Product Management</h3>
          <ol>
            <li>
              <strong>Add/Edit/Delete products:</strong> Full CRUD operations
              with image upload support
            </li>
            <li>
              <strong>Bulk import:</strong> CSV import for adding multiple
              products at once
            </li>
            <li>
              <strong>Product search & filter:</strong> Find items quickly by
              any field
            </li>
            <li>
              <strong>Price management:</strong> Set cost price, selling price,
              and profit margins
            </li>
            <li>
              <strong>Stock alerts:</strong> Automated warnings when inventory
              runs low
            </li>
          </ol>

          <h3>Sales & POS</h3>
          <ol>
            <li>
              <strong>Quick sale interface:</strong> Fast checkout for walk-in
              customers
            </li>
            <li>
              <strong>Hold/Resume sales:</strong> Park transactions and continue
              later
            </li>
            <li>
              <strong>Discount management:</strong> Apply percentage or fixed
              amount discounts
            </li>
            <li>
              <strong>Customer lookup:</strong> Retrieve past purchase history
            </li>
            <li>
              <strong>Receipt customization:</strong> Add logo, terms, and
              business info
            </li>
          </ol>

          <h3>Reporting & Analytics</h3>
          <ol>
            <li>
              <strong>Daily sales summary:</strong> End-of-day reports with cash
              reconciliation
            </li>
            <li>
              <strong>Stock valuation:</strong> Calculate total inventory value
              at cost and retail
            </li>
            <li>
              <strong>Profit margins:</strong> Analyze profitability by product
              and category
            </li>
            <li>
              <strong>Slow-moving items:</strong> Identify products not selling
              well
            </li>
            <li>
              <strong>Custom date ranges:</strong> Generate reports for any time
              period
            </li>
          </ol>

          <div className="pa-screens">
            <img
              src={ProductSearch1}
              alt="MotoGear inventory dashboard - stock management system Sri Lanka"
            />
            <img
              src={ProductSearch2}
              alt="POS interface and sales recording - retail management software"
            />
          </div>
        </section>

        <section className="pa-section pa-frontend">
          <h2>User Interface Highlights</h2>
          <p>
            Every screen in this <strong>inventory software</strong> is designed
            for speed, clarity, and ease of use:
          </p>

          <h3>Dashboard Overview</h3>
          <ul>
            <li>
              <strong>Sales metrics:</strong> Today's sales, this week's
              revenue, monthly totals
            </li>
            <li>
              <strong>Inventory status:</strong> Total products, low stock
              warnings, out-of-stock alerts
            </li>
            <li>
              <strong>Recent activity:</strong> Latest sales transactions and
              stock movements
            </li>
            <li>
              <strong>Visual graphs:</strong> Sales trends and product
              performance charts
            </li>
            <li>
              <strong>Quick actions:</strong> Shortcut buttons to frequently
              used functions
            </li>
          </ul>

          <h3>POS Terminal</h3>
          <ul>
            <li>
              <strong>Product search:</strong> Type name or scan barcode to add
              items
            </li>
            <li>
              <strong>Shopping cart:</strong> Clear list showing items,
              quantities, and prices
            </li>
            <li>
              <strong>Calculator display:</strong> Large numbers showing totals
              and change
            </li>
            <li>
              <strong>Payment buttons:</strong> Quick selection of payment
              method
            </li>
            <li>
              <strong>Print receipt:</strong> One-click thermal print with
              professional layout
            </li>
          </ul>

          <div className="pa-screens">
            <img
              src={ImgReports1}
              alt="Product management interface - inventory management system"
            />
            <img
              src={ImgReports2}
              alt="Sales analytics dashboard - custom retail software Sri Lanka"
            />
          </div>

          <p className="pa-muted" style={{ marginTop: "8px" }}>
            <em>
              Optimized for performance: Fast page loads, instant search
              results, and responsive interfaces even with thousands of products
              in the database.
            </em>
          </p>
        </section>

        <section className="pa-section">
          <h2>Security & Reliability</h2>
          <p>
            As professional <strong>software developers in Sri Lanka</strong>,
            we implemented robust security measures to protect business data:
          </p>

          <h3>Data Protection</h3>
          <ul>
            <li>
              <strong>User authentication:</strong> Secure login with password
              hashing (bcrypt)
            </li>
            <li>
              <strong>Role-based access:</strong> Different permission levels
              (Admin, Manager, Cashier)
            </li>
            <li>
              <strong>SQL injection prevention:</strong> All queries use
              prepared statements
            </li>
            <li>
              <strong>XSS protection:</strong> Input sanitization and output
              escaping
            </li>
            <li>
              <strong>CSRF tokens:</strong> Protection against cross-site
              request forgery
            </li>
            <li>
              <strong>Session security:</strong> Encrypted sessions with timeout
              controls
            </li>
          </ul>

          <h3>Data Backup & Recovery</h3>
          <ul>
            <li>
              <strong>Automated backups:</strong> Daily database backups stored
              securely
            </li>
            <li>
              <strong>Manual backup option:</strong> On-demand backup creation
            </li>
            <li>
              <strong>Data export:</strong> Export all data for external storage
            </li>
            <li>
              <strong>Audit trails:</strong> Track all changes with user and
              timestamp
            </li>
            <li>
              <strong>Error logging:</strong> Comprehensive logs for
              troubleshooting
            </li>
          </ul>
        </section>

        {/* Gallery */}
        <section className="pa-section">
          <h2>Project Gallery: System Walkthrough</h2>

          <p>
            Explore detailed screenshots of every module in this{" "}
            <strong>inventory management system Sri Lanka</strong> project. See
            the clean dashboards, intuitive POS interface, comprehensive
            reports, and beautiful analytics visualizations that make managing
            retail operations effortless.
          </p>

          {images.length === 0 ? (
            <div className="pa-gallery-empty">
              <p>
                Gallery showcases the main dashboard, inventory management
                screens, POS terminal interface, sales reports, expense
                tracking, analytics graphs, receipt printing, and admin settings
                across various screen sizes.
              </p>
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
                    alt={`MotoGear inventory management system screenshot ${
                      i + 1
                    } - custom retail software Sri Lanka by Axivelt Solutions`}
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
                alt={`MotoGear inventory system screenshot ${
                  currentIndex + 1
                } - retail management software Sri Lanka`}
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
          <h2>Why Choose Axivelt for Inventory Management Solutions</h2>
          <p>
            This <strong>inventory management system Sri Lanka</strong> project
            demonstrates our expertise in building practical business software
            that solves real operational challenges for retail stores. We
            understand the daily struggles of manual stock tracking, cash flow
            management, and sales monitoring.
          </p>

          <h3>Our Retail Software Expertise</h3>
          <ul>
            <li>
              <strong>Industry knowledge:</strong> Deep understanding of retail
              workflows and pain points
            </li>
            <li>
              <strong>Practical solutions:</strong> Features designed for
              real-world daily operations
            </li>
            <li>
              <strong>User-focused design:</strong> Interfaces that staff can
              use with minimal training
            </li>
            <li>
              <strong>Performance optimization:</strong> Fast, responsive
              systems even with large datasets
            </li>
            <li>
              <strong>Scalability:</strong> Systems that grow with your business
              expansion
            </li>
            <li>
              <strong>Local support:</strong> On-site training and ongoing
              technical assistance in Sri Lanka
            </li>
          </ul>

          <h3>Benefits of Custom Inventory Software</h3>
          <ul>
            <li>
              <strong>Eliminate manual errors:</strong> Automated calculations
              and stock tracking reduce mistakes
            </li>
            <li>
              <strong>Save time:</strong> What took hours with spreadsheets now
              takes minutes
            </li>
            <li>
              <strong>Better decisions:</strong> Data-driven insights through
              visual analytics
            </li>
            <li>
              <strong>Prevent stock-outs:</strong> Automated low-stock alerts
              ensure continuous availability
            </li>
            <li>
              <strong>Improve profitability:</strong> Track margins, expenses,
              and identify best sellers
            </li>
            <li>
              <strong>Professional operations:</strong> Printed receipts and
              organized records build customer trust
            </li>
            <li>
              <strong>One-time cost:</strong> No monthly subscription fees, you
              own the software
            </li>
          </ul>

          <h3>What Makes Our Development Approach Different</h3>
          <ul>
            <li>
              <strong>We listen:</strong> Understanding your specific business
              needs before coding
            </li>
            <li>
              <strong>Iterative development:</strong> Regular demos and feedback
              sessions during build
            </li>
            <li>
              <strong>Comprehensive training:</strong> We teach your staff to
              use every feature confidently
            </li>
            <li>
              <strong>Documentation:</strong> Clear user manuals and video
              tutorials provided
            </li>
            <li>
              <strong>Post-launch support:</strong> We're available for
              questions and minor adjustments
            </li>
            <li>
              <strong>Future-ready:</strong> Easy to add new features as your
              business evolves
            </li>
          </ul>
        </section>

        <section className="pa-section">
          <h2>Perfect for Various Retail Businesses</h2>
          <p>
            While built for MotoGear's motorcycle parts and helmet store, this{" "}
            <strong>inventory software</strong> can be adapted for many retail
            sectors:
          </p>

          <h3>Suitable Business Types</h3>
          <ul>
            <li>
              <strong>Auto parts stores:</strong> Car accessories, spare parts,
              batteries
            </li>
            <li>
              <strong>Electronics shops:</strong> Phones, computers, accessories
            </li>
            <li>
              <strong>Hardware stores:</strong> Tools, building materials,
              supplies
            </li>
            <li>
              <strong>Clothing boutiques:</strong> Apparel with size and color
              variants
            </li>
            <li>
              <strong>Sports equipment:</strong> Gear, apparel, accessories
            </li>
            <li>
              <strong>Pharmacy/medical supplies:</strong> Medicines, equipment,
              consumables
            </li>
            <li>
              <strong>General retail:</strong> Any store selling physical
              products
            </li>
          </ul>

          <h3>Customization Options</h3>
          <p>We can tailor the system to your specific needs:</p>
          <ul>
            <li>
              <strong>Custom fields:</strong> Add industry-specific product
              attributes
            </li>
            <li>
              <strong>Branded receipts:</strong> Include your logo and business
              details
            </li>
            <li>
              <strong>Multi-location:</strong> Manage multiple branches from one
              system
            </li>
            <li>
              <strong>Supplier management:</strong> Track supplier contacts and
              purchase orders
            </li>
            <li>
              <strong>Customer loyalty:</strong> Points system and membership
              features
            </li>
            <li>
              <strong>Advanced reporting:</strong> Custom reports for your
              specific KPIs
            </li>
            <li>
              <strong>Language options:</strong> Sinhala, Tamil, or English
              interfaces
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="pa-cta" id="contact">
          <h2>Ready to Modernize Your Retail Business?</h2>
          <p>
            Whether you need an <strong>inventory management system</strong>,
            POS solution, or complete{" "}
            <strong>retail management software</strong> - Axivelt Solutions
            builds custom business applications that eliminate manual work and
            boost profitability for small businesses in Sri Lanka.
          </p>

          <div className="pa-cta-features">
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">🚀</span>
              <strong>Fast Implementation:</strong> Most systems live within 4-8
              weeks
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">💰</span>
              <strong>Affordable Pricing:</strong> One-time cost, no monthly
              fees, transparent quotes
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">🔧</span>
              <strong>Full Training & Support:</strong> We teach you everything,
              ongoing help included
            </div>
            <div className="pa-cta-feature">
              <span className="pa-cta-icon">📱</span>
              <strong>Desktop & Mobile:</strong> Works on computers, tablets,
              and smartphones
            </div>
          </div>

          <div className="pa-cta-buttons">
            <Link to="/#get-a-quote" className="btn btn-primary">
              Get Your Free Inventory System Quote
            </Link>
            <Link to="/our-projects" className="btn btn-secondary">
              View More Business Software Projects
            </Link>
          </div>

          <p className="pa-cta-contact">
            <strong>Let's discuss your requirements:</strong>{" "}
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
            Explore our portfolio of <strong>custom web applications</strong>{" "}
            and <strong>business software solutions</strong> built for companies
            across various industries:
          </p>

          <div className="pa-related-grid">
            <Link
              to="/projects/easyNeat-cleaning-service-booking-platform"
              className="pa-related-card">
              <h3>EasyNeat Cleaning Service Platform</h3>
              <p>
                Complete booking system with advanced scheduling, customer
                management, and admin dashboard for cleaning service business
              </p>
              <span className="pa-related-link">View Case Study →</span>
            </Link>

            <Link
              to="/projects/around-lanka-travels-tour-booking-platform"
              className="pa-related-card">
              <h3>Around Lanka Tour Booking System</h3>
              <p>
                Complete travel agency platform with itinerary builder, content
                management, and customer booking system
              </p>
              <span className="pa-related-link">View Case Study →</span>
            </Link>

            <Link
              to="/our-projects"
              className="pa-related-card pa-related-card-all">
              <h3>Browse All Projects</h3>
              <p>
                See our complete portfolio of software development and custom
                business applications
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
              name: "MotoGear Inventory Management System",
              url: "https://axivelt.com/projects/motogear-inventory-management-system",
              description:
                "Professional inventory management system for motorcycle parts and helmet retail stores in Sri Lanka. Features comprehensive stock tracking, integrated POS system, sales recording, expense management, receipt printing, and visual analytics. Custom software built by Axivelt Solutions for small retail businesses.",
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
                "Comprehensive stock management and inventory tracking",
                "Integrated point of sale (POS) system",
                "Sales recording and transaction history",
                "Expense management and tracking",
                "Receipt printing with thermal printer support",
                "Beautiful data visualization and analytics graphs",
                "Real-time stock level monitoring",
                "Low stock alerts and notifications",
                "Product catalog with unlimited items",
                "Multi-location inventory support",
                "Sales reports and analytics",
                "Profit and loss calculations",
                "Customer purchase history",
                "Barcode generation and scanning",
                "User authentication and role-based access",
                "Data backup and export functionality",
                "Mobile-responsive interface",
                "Custom receipt templates",
              ],
              keywords:
                "inventory management system Sri Lanka, inventory software, stock management, POS system, retail management software, custom web applications Sri Lanka, small business software, motorcycle parts inventory",
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
                "MotoGear Inventory Management System - Retail Software Development Case Study",
              description:
                "Complete case study of custom inventory management system development in Sri Lanka for motorcycle parts retail store featuring POS, stock tracking, expense management, and analytics",
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
                "@id":
                  "https://axivelt.com/projects/motogear-inventory-management-system",
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
                  name: "MotoGear Inventory System",
                  item: "https://axivelt.com/projects/motogear-inventory-management-system",
                },
              ],
            }),
          }}
        />
      </main>
    </>
  );
}
