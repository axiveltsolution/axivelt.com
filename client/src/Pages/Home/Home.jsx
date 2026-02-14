import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import "./Home.css";

/* ==== COMPONENTS === */
import Hero from "./Components/HeroSection.jsx";
import Cta from "./Components/CTASection.jsx";
import Services from "./Components/ServicesSection.jsx";
import RecentWork from "./Components/RecentWorkSection.jsx";
import Status from "./Components/StatusSection.jsx";
import FAQ from "./Components/FAQSection.jsx";
import About from "./Components/AboutSection.jsx";
import WhyChooseUs from "./Components/WhyChooseUsSection.jsx";
import Contact from "./Components/ContactSection.jsx";
import Testimonial from "./Components/TestimonialSection.jsx";
import { ContactIcon } from "lucide-react";

/* ============================= Home Page ============================= */
export default function Home() {
  return (
    <>
      <Helmet>
        {/* ========== PRIMARY META TAGS ========== */}
        <title>
          Software Solutions Company Sri Lanka | Custom Software Development,
          Enterprise Systems & Digital Solutions | Axivelt Solutions
        </title>
        <meta
          name="description"
          content="Leading software solutions company in Sri Lanka specializing in custom software development, enterprise applications, inventory systems, CRM solutions, and business automation. Affordable pricing, fast delivery. Serving Colombo, Kandy, Galle & beyond. Get your free quote today!"
        />
        <meta
          name="keywords"
          content="software solutions company Sri Lanka, software development company Sri Lanka, custom software development Sri Lanka, enterprise software Sri Lanka, business software solutions, inventory management system Sri Lanka, CRM software Sri Lanka, business automation Sri Lanka, ERP system Sri Lanka, custom applications Sri Lanka, software company Colombo, React developer Sri Lanka, Node.js development, digital transformation Sri Lanka, software consulting Sri Lanka"
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
          content="Software Solutions Company Sri Lanka | Custom Software Development & Enterprise Systems"
        />
        <meta
          property="og:description"
          content="Leading software solutions company in Sri Lanka. We build custom software, enterprise applications, inventory systems, CRM solutions, and business automation tools. Affordable pricing, transparent quotes. Based in Colombo."
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
          content="Axivelt Solutions - Software Solutions Company Sri Lanka"
        />

        {/* ========== TWITTER CARD ========== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@axivelt" />
        <meta name="twitter:creator" content="@axivelt" />
        <meta
          name="twitter:title"
          content="Software Solutions Company Sri Lanka | Axivelt Solutions"
        />
        <meta
          name="twitter:description"
          content="Custom software development, enterprise applications, inventory systems & business automation. Leading software solutions company in Colombo, Sri Lanka. Get your free quote today!"
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
                "Leading software solutions company in Sri Lanka specializing in custom software development, enterprise applications, inventory management systems, CRM solutions, and business automation.",
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
              priceRange: "Rs. 75,000 - Rs. 1,500,000",
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
                "Professional software solutions and custom software development services in Sri Lanka",
              url: "https://axivelt.com",
              telephone: "+94-76-698-0686",
              email: "axiveltofficial@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Colombo",
                addressCountry: "LK",
              },
              serviceType: [
                "Custom Software Development",
                "Enterprise Software Solutions",
                "Business Automation",
                "Inventory Management Systems",
                "CRM Software Development",
                "ERP Solutions",
                "Web Application Development",
                "Mobile App Development",
                "E-commerce Solutions",
                "API Development & Integration",
                "Database Design & Management",
                "Software Consulting",
                "Digital Transformation",
                "Cloud Solutions",
                "Software Maintenance & Support",
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
              name: "Software Solutions & Development Services",
              description:
                "Our comprehensive software solutions and custom development services in Sri Lanka",
              itemListElement: [
                {
                  "@type": "Service",
                  position: 1,
                  name: "Custom Software Development",
                  description:
                    "Tailored software solutions built from scratch to meet your unique business requirements and workflows",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 2,
                  name: "Enterprise Applications",
                  description:
                    "Scalable enterprise solutions including CRM systems, ERP software, and business management platforms",
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
                    "Complete inventory and warehouse management solutions with real-time tracking, reporting, and automation",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 4,
                  name: "Business Automation Solutions",
                  description:
                    "Automate repetitive tasks, streamline workflows, and improve efficiency with custom automation tools",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 5,
                  name: "Web & Mobile Applications",
                  description:
                    "Modern web applications and mobile apps built with React, Node.js, and cutting-edge technologies",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 6,
                  name: "API Development & Integration",
                  description:
                    "RESTful APIs, third-party integrations, and seamless system connectivity solutions",
                  provider: {
                    "@type": "Organization",
                    name: "Axivelt Solutions",
                  },
                  areaServed: "Sri Lanka",
                },
                {
                  "@type": "Service",
                  position: 7,
                  name: "Software Maintenance & Support",
                  description:
                    "Ongoing maintenance, updates, bug fixes, and 24/7 technical support for your software systems",
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
              description: "Software Solutions Company in Sri Lanka",
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
                  name: "How much does custom software development cost in Sri Lanka?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Our custom software development pricing starts from Rs. 150,000 for basic business applications. Inventory management systems range from Rs. 300,000-600,000, CRM and ERP solutions from Rs. 400,000-1,000,000, and complex enterprise applications from Rs. 800,000-1,500,000+ depending on features and complexity. We provide detailed, transparent quotes with no hidden costs after analyzing your specific requirements.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How long does it take to develop custom software?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Development timelines vary based on project complexity. Simple business applications take 4-8 weeks, inventory or CRM systems typically require 8-16 weeks, and complex enterprise solutions may take 16-24 weeks or more. We follow agile methodology with phased rollouts, allowing you to start using core features while we continue development.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Do you provide software maintenance and support?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, feature enhancements, database management, and technical support. Our support plans start from Rs. 25,000/month with priority response times and regular system monitoring.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What technologies do you use for software development?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "We use modern, industry-standard technologies including React and Node.js for web applications, React Native for mobile apps, PostgreSQL and MongoDB for databases, and cloud platforms like AWS. We choose the best tech stack based on your specific needs, scalability requirements, and budget.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you integrate the software with our existing systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Absolutely. We specialize in API development and third-party integrations. We can connect your new software with existing systems, accounting software, payment gateways, email services, and other business tools to create a seamless workflow across your organization.",
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

        <Contact />

        {/* FAQ */}
        <FAQ />
      </div>
    </>
  );
}
