import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Home.css";

/* ==== PAGES === */

import ContactUs from "./Components/ContactUsSection.jsx";
import Hero from "./Components/HeroSection.jsx";
import Cta from "./Components/CTASection.jsx";
import Services from "./Components/ServicesSection.jsx";
import RecentWork from "./Components/RecentWorkSection.jsx";
import Status from "./Components/StatusSection.jsx";
import Value from "./Components/ValueSection.jsx";
import FAQ from "./Components/FAQSection.jsx";
import About from "./Components/AboutSection.jsx";

/* ================= Scroll to #hash ================= */
function useScrollToHash() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);
}

/* ============================= Page ============================= */
export default function Home() {
  useScrollToHash();

  return (
    <div className="home">
      {/* HERO */}
      <Hero />
      {/* CTA */}
      <Cta />

      {/* SERVICES */}
      <Services />
      {/* RECENT WORK (exactly three) */}
      <RecentWork />
      {/* STATS */}
      <Status />
      {/* ABOUT */}
      <About />
      {/* VALUE */}
      <Value />
      {/* CONTACT US SECTION */}
      <ContactUs />
      {/* FAQ */}
      <FAQ />
    </div>
  );
}
