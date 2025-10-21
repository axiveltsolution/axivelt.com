import React, { useState } from "react";
import "./../Home.css"; // keep styles separately if you want

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      q: "How quickly can you launch a project?",
      a: "Landing pages and small sites can be delivered in 3-5 days. Business websites typically take 1-2 weeks. Larger web apps depend on scope. You'll get a realistic timeline before we begin.",
    },
    {
      q: "Do you provide SEO and marketing support?",
      a: "Yes. We ship semantic HTML, schema/OG tags, fast pages, clean URLs, XML sitemaps, analytics & conversion goals, plus ongoing on-page SEO if needed.",
    },
    {
      q: "Can you maintain and update our existing website?",
      a: "Absolutely. Our care plans include backups, security updates, performance monitoring, bug fixes, and small enhancements each month.",
    },
    {
      q: "What if we already have a design or content?",
      a: "Perfect. We'll implement your Figma/UX and wire up the CMS. If content is pending, we can launch in phases and iterate quickly.",
    },
    {
      q: "Do you work with clients outside Sri Lanka?",
      a: "Yes. We're remote-first (GMT+5:30) and used to async collaboration. We work over email, chat, and shared docs with clear weekly updates.",
    },
    {
      q: "Which technologies do you use?",
      a: "React, Node.js/Express, Vite, WordPress, and MySQL/MongoDB. Choosing the best stack for performance, security, and long-term maintainability.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <h1 className="h2" style={{ textAlign: "center", marginBottom: "3rem" }}>
        Frequently Asked Questions
      </h1>
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
