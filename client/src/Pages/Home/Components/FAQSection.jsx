import React, { useState } from "react";
import "./../Home.css"; // keep styles separately if you want

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How long does it take to develop custom software?",
      a: "Development timelines vary based on project complexity. Simple business applications take 4-8 weeks, inventory or CRM systems typically require 8-16 weeks, and complex enterprise solutions may take 16-24 weeks or more. We follow agile methodology with phased rollouts, allowing you to start using core features while we continue development of advanced functionality.",
    },
    {
      q: "Do you provide software maintenance and support?",
      a: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, feature enhancements, database management, and technical support. Our support plans start from Rs. 25,000/month with priority response times, regular system monitoring, and guaranteed uptime. We're available via WhatsApp, email, and phone for urgent issues.",
    },
    {
      q: "What technologies do you use for software development?",
      a: "We use modern, industry-standard technologies including React and Node.js for web applications, React Native for mobile apps, PostgreSQL and MongoDB for databases, and cloud platforms like AWS for hosting. We choose the best tech stack based on your specific needs, scalability requirements, and budget - ensuring your software is fast, secure, and maintainable.",
    },
    {
      q: "Can you integrate the software with our existing systems?",
      a: "Absolutely! We specialize in API development and third-party integrations. We can connect your new software with existing systems, accounting software (QuickBooks, Zoho Books), payment gateways, email services, CRM platforms, and other business tools to create a seamless workflow across your organization. We handle all technical integration work.",
    },
    {
      q: "Do you work with clients outside Colombo?",
      a: "Yes! While we're based in Colombo, we serve businesses throughout Sri Lanka - Kandy, Galle, Jaffna, and beyond. We're also experienced working with international clients in Australia, UK, and other countries. We operate remotely with clear communication via video calls, screen sharing, project management tools, and regular demos to keep you updated on progress.",
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
        Common questions about our software solutions and development services
        in Sri Lanka. Don't see your question? Contact us directly, we're here
        to help!
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
                maxHeight: activeIndex === index ? "400px" : "0",
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
