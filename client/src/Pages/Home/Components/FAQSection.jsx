import React from "react";

export default function FAQSection() {
  return (
    <>
      <section id="faq" className="section">
        <div className="container">
          <div className="faq">
            <h2
              className="h2"
              style={{ textAlign: "center", marginBottom: "3rem" }}>
              Frequently asked questions
            </h2>
            <div className="faq-list">
              <details className="faq-item">
                <summary>How quickly can you launch a project?</summary>
                <p>
                  Landing pages and small sites can be delivered in 3-5 days.
                  Business websites typically take 1-2 weeks. Larger web apps
                  depend on scope. You'll get a realistic timeline before we
                  begin.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do you provide SEO and marketing support?</summary>
                <p>
                  Yes. We ship semantic HTML, schema/OG tags, fast pages, clean
                  URLs, XML sitemaps, analytics &amp; conversion goals, plus
                  ongoing on-page SEO if needed.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Can you maintain and update our existing website?
                </summary>
                <p>
                  Absolutely. Our care plans include backups, security updates,
                  performance monitoring, bug fixes, and small enhancements each
                  month.
                </p>
              </details>
              <details className="faq-item">
                <summary>What if we already have a design or content?</summary>
                <p>
                  Perfect. We'll implement your Figma/UX and wire up the CMS. If
                  content is pending, we can launch in phases and iterate
                  quickly.
                </p>
              </details>
              <details className="faq-item">
                <summary>Do you work with clients outside Sri Lanka?</summary>
                <p>
                  Yes. We're remote-first (GMT+5:30) and used to async
                  collaboration. We work over email, chat, and shared docs with
                  clear weekly updates.
                </p>
              </details>
              <details className="faq-item">
                <summary>Which technologies do you use?</summary>
                <p>
                  React, Node.js/Express, Vite, WordPress, and MySQL/MongoDB.
                  Choosing the best stack for performance, security, and
                  long-term maintainability.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
