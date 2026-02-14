import React, { useState } from "react";

const faqs = [
  {
    q: "How long does it take to develop custom software?",
    a: "Development timelines vary based on project complexity. Simple business applications take 4-8 weeks, inventory or CRM systems typically require 8-16 weeks, and complex enterprise solutions may take 16-24 weeks or more.",
  },
  {
    q: "Do you provide software maintenance and support?",
    a: "Yes! We offer comprehensive maintenance packages including bug fixes, security updates, and performance optimization. Support plans start from Rs. 25,000/month with priority response times.",
  },
  {
    q: "What technologies do you use for development?",
    a: "We use modern, industry-standard technologies including React and Node.js for web applications, PostgreSQL and MongoDB for databases, and cloud platforms like AWS for hosting.",
  },
  {
    q: "Can you integrate the software with our existing systems?",
    a: "Absolutely! We specialize in API development and third-party integrations. We can connect your new software with accounting platforms, payment gateways, and CRM tools.",
  },
  {
    q: "Do you work with clients outside Colombo?",
    a: "Yes! While based in Colombo, we serve businesses throughout Sri Lanka and internationally. We operate remotely with clear communication via video calls and regular demos.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="faq__header">
          <span className="badge-label text-red">Help Center</span>
          <h2 className="faq__title">Frequently Asked Questions</h2>
          <p className="faq__subtitle">
            Common questions about our software solutions and development
            services.
          </p>
        </div>

        {/* Linear FAQ List */}
        <div className="faq__list">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`faq__item ${isOpen ? "faq__item--open" : ""}`}
                onClick={() => toggleFAQ(index)}>
                <div className="faq__question">
                  <span>{item.q}</span>
                  <div className="faq__icon"></div>
                </div>
                <div className="faq__answer">
                  <div className="faq__answer-inner">
                    <p>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
