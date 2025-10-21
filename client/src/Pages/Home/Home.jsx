import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

/* ==== PAGES === */

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

/* ============================= Page ============================= */
export default function Home() {
  return (
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
  );
}
