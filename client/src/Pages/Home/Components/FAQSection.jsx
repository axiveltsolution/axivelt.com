import React, { useState } from "react";
import "./../Home.css"; // keep styles separately if you want

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How long does it take to build a website?",
      a: "Most business websites are delivered within 2-4 weeks from project start. Landing pages can be completed in 5-7 days. Complex web systems development Sri Lanka projects like inventory management or booking platforms typically take 6-12 weeks with phased rollouts. You'll receive a realistic timeline in our proposal.",
    },
    {
      q: "Do you provide website maintenance and support?",
      a: "Yes! We offer comprehensive maintenance packages that include automatic backups, security updates, performance monitoring, bug fixes, and content updates. You’ll also get 24/7 uptime monitoring and fast response times via WhatsApp, email, and phone.",
    },
    {
      q: "Will my website be mobile-friendly and SEO optimized?",
      a: "Absolutely. Every website we build is fully responsive (mobile, tablet, desktop) and follows SEO best practices from day one. We optimize page speed, implement proper meta tags, create XML sitemaps, add schema markup, and integrate Google Analytics and Search Console to help your site rank higher and attract more customers.",
    },
    {
      q: "Can you help with hosting and domain registration?",
      a: "Yes, we handle the complete technical setup. We can register your .lk or .com domain, set up reliable hosting (we recommend providers based on your budget and traffic), configure business email accounts, install SSL certificates for security, and ensure everything is properly connected before launch.",
    },
    {
      q: "Do you work with clients outside Colombo?",
      a: "Yes! While we're based in Colombo, we serve businesses throughout Sri Lanka - Kandy, Galle, Jaffna, and beyond. We're also experienced working with international clients in Australia, UK, and other countries. We operate remotely with clear communication via video calls, email, and project management tools.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Definitely! We can refresh your current website with a modern design, improved speed, and better SEO performance - all while keeping your existing content and branding. Whether you need a small visual upgrade or a full rebuild, we’ll make sure your site looks great and performs even better.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <h2 className="h1" style={{ textAlign: "center" }}>
        Frequently Asked Questions
      </h2>
      <p
        className="sub-title"
        style={{
          textAlign: "center",
          margin: "0 auto 2rem",
        }}>
        Common questions about our website development services in Sri Lanka.
        Don't see your question? Contact us directly, we're here to help!
      </p>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "open" : ""}`}
            onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {item.q}
              <span className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </span>
            </div>
            <div
              className="faq-answer"
              style={{
                maxHeight: activeIndex === index ? "200px" : "0",
                opacity: activeIndex === index ? 1 : 0,
              }}>
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
