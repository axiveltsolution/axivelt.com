import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";

/* ==== COMPONENTS === */
import GetAQuote from "./Components/GetAQuoteSection.jsx";
import Hero from "./Components/HeroSection.jsx";
import Cta from "./Components/CTASection.jsx";
import Services from "./Components/ServicesSection.jsx";
import RecentWork from "./Components/RecentWorkSection.jsx";
import Status from "./Components/StatusSection.jsx";
import FAQ from "./Components/FAQSection.jsx";
import About from "./Components/AboutSection.jsx";
import WhyChooseUs from "./Components/WhyChooseUsSection.jsx";
import Testimonial from "./Components/TestimonialSection.jsx";

/* ============================= Home Page ============================= */
export default function Home() {
  return (
    <>
      <Helmet>
        {/* ========== PRIMARY META TAGS ========== */}
        <title>
          Web Development Company Sri Lanka | Custom Websites & Web Apps |
          Axivelt Solutions
        </title>
        <meta
          name="description"
          content="Leading web development company in Sri Lanka specializing in custom websites, web applications, and inventory systems. Affordable pricing, fast delivery. Serving Colombo, Kandy, Galle & beyond. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="web development company Sri Lanka, website development Sri Lanka, custom websites Sri Lanka, web systems development Sri Lanka, software development company Sri Lanka, affordable web development Sri Lanka, web developer Colombo, React developer Sri Lanka, Node.js developer, e-commerce website Sri Lanka, inventory management system, business website Sri Lanka"
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
        <link rel="canonical" href="https://axivelt.com/" />

        {/* Geo Tags for Local SEO */}
        <meta name="geo.region" content="LK-1" />
        <meta name="geo.placename" content="Colombo" />
        <meta name="geo.position" content="6.9271;79.8612" />
        <meta name="ICBM" content="6.9271, 79.8612" />

        {/* ========== OPEN GRAPH (Facebook, LinkedIn) ========== */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Axivelt Solutions" />
        <meta
          property="og:title"
          content="Web Development Company Sri Lanka | Custom Websites & Web Applications"
        />
        <meta
          property="og:description"
          content="Leading web development company in Sri Lanka. We build custom websites, web apps, and inventory systems with React & Node.js. Affordable pricing, transparent quotes. Based in Colombo."
        />
        <meta property="og:url" content="https://axivelt.com/" />
        <meta
          property="og:image"
          content="https://axivelt.com/og-image-home.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Axivelt Solutions - Web Development Company Sri Lanka"
        />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@axivelt" />
        <meta name="twitter:creator" content="@axivelt" />
        <meta
          name="twitter:title"
          content="Web Development Company Sri Lanka | Axivelt Solutions"
        />
        <meta
          name="twitter:description"
          content="Custom websites, web apps & inventory systems. Leading web development company in Colombo, Sri Lanka. Get your free quote today!"
        />
        <meta
          name="twitter:image"
          content="https://axivelt.com/og-image-home.jpg"
        />

        {/* ========== ADDITIONAL SEO META ========== */}
        <meta name="theme-color" content="#07070b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* ========== SCHEMA MARKUP - LOCAL BUSINESS ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://axivelt.com/#organization",
              name: "Axivelt Solutions",
              alternateName: "Axivelt",
              description:
                "Leading web development company in Sri Lanka specializing in custom websites, web applications, and inventory management systems.",
              url: "https://axivelt.com",
              telephone: "+94-76-698-0686",
              email: "axiveltofficial@gmail.com",
              logo: {
                "@type": "ImageObject",
                url: "https://axivelt.com/logo.png",
                width: 512,
                height: 512,
              },
              image: {
                "@type": "ImageObject",
                url: "https://axivelt.com/og-image-home.jpg",
                width: 1200,
                height: 630,
              },
              priceRange: "Rs. 75,000 - Rs. 800,000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colombo",
                addressRegion: "Western Province",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 6.9271,
                longitude: 79.8612,
              },
              areaServed: [
                {
                  "@type": "City",
                  name: "Colombo",
                },
                {
                  "@type": "City",
                  name: "Kandy",
                },
                {
                  "@type": "City",
                  name: "Galle",
                },
                {
                  "@type": "Country",
                  name: "Sri Lanka",
                },
              ],
              sameAs: [
                "https://www.facebook.com/share/1Ek3LgcVKT/",
                "https://www.instagram.com/axiveltsolutions",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "35",
                bestRating: "5",
                worstRating: "1",
              },
            }),
          }}
        />

        {/* ========== SCHEMA MARKUP - PROFESSIONAL SERVICE ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Axivelt Solutions",
              description:
                "Professional web development and software development services in Sri Lanka",
              url: "https://axivelt.com",
              telephone: "+94-76-698-0686",
              email: "axiveltofficial@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colombo",
                addressCountry: "LK",
              },
              serviceType: [
                "Web Development",
                "Custom Website Development",
                "Web Application Development",
                "E-commerce Development",
                "Inventory Management Systems",
                "Website Maintenance",
                "SEO Optimization",
              ],
              areaServed: {
                "@type": "Country",
                name: "Sri Lanka",
              },
            }),
          }}
        />

        {/* ========== SCHEMA MARKUP - SERVICES OFFERED ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Web Development Services",
              description:
                "Our comprehensive web development services in Sri Lanka",
              itemListElement: [
                {
                  "@type": "Service",
                  position: 1,
                  name: "Custom Website Development",
                  description:
                    "Responsive business websites, e-commerce platforms, and landing pages built with React",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 2,
                  name: "Web Application Development",
                  description:
                    "Custom portals, booking systems, CRM dashboards, and SaaS platforms",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 3,
                  name: "Inventory Management Systems",
                  description:
                    "Complete web systems for inventory, stock tracking, and order processing",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 4,
                  name: "SEO & Performance Optimization",
                  description:
                    "Technical SEO, Core Web Vitals optimization, and Google Analytics setup",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 5,
                  name: "Website Maintenance & Support",
                  description:
                    "Automated backups, security updates, uptime monitoring, and bug fixes",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
              ],
            }),
          }}
        />

        {/* ========== SCHEMA MARKUP - BREADCRUMB ========== */}
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
              ],
            }),
          }}
        />

        {/* ========== SCHEMA MARKUP - WEBSITE ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://axivelt.com/#website",
              url: "https://axivelt.com",
              name: "Axivelt Solutions",
              description: "Web Development Company in Sri Lanka",
              publisher: {
                "@id": "https://axivelt.com/#organization",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://axivelt.com/?s={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ========== SCHEMA MARKUP - FAQ ========== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How much does a custom website cost in Sri Lanka?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our website development Sri Lanka pricing starts from Rs. 75,000 for basic business websites. E-commerce sites range from Rs. 200,000-400,000, and custom web applications from Rs. 300,000-800,000 depending on features. We provide detailed, transparent quotes with no hidden costs after understanding your specific requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to build a website?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Most business websites are delivered within 2-4 weeks from project start. Landing pages can be completed in 5-7 days. Complex web systems development Sri Lanka projects like inventory management or booking platforms typically take 6-12 weeks with phased rollouts.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide website maintenance and support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer comprehensive maintenance packages including automatic backups, security updates, performance monitoring, bug fixes, and content updates. Our affordable care plans start from Rs. 15,000/month with 24/7 uptime monitoring and fast response times.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will my website be mobile-friendly and SEO optimized?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. Every website we build is fully responsive (mobile, tablet, desktop) and follows SEO best practices from day one. We optimize page speed, implement proper meta tags, create XML sitemaps, add schema markup, and integrate Google Analytics and Search Console.",
                  },
                },
              ],
            }),
          }}
        />
      </Helmet>

      <div className="home">
        {/* HERO */}
        <Hero />

        {/* CTA */}
        <Cta />

        {/* SERVICES */}
        <Services />

        {/* TESTIMONIAL */}
        <Testimonial />

        {/* RECENT WORK (exactly three) */}
        <RecentWork />

        {/* STATS */}
        <Status />

        {/* ABOUT */}
        <About />

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* Get A Quote SECTION */}
        <GetAQuote />

        {/* FAQ */}
        <FAQ />
      </div>
    </>
  );
}
