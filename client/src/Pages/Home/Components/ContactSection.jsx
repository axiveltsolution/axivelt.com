import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const SERVICE_ID = "service_gmailaxivelt";
const TEMPLATE_ADMIN_ID = "template_2erh7n5";
const TEMPLATE_AUTO_ID = "template_undw9fq";
const PUBLIC_KEY = "Tg5YfwWCQAsQCGMZc";

const AXIVELT_TO_EMAIL = "axiveltofficial@gmail.com";
const AXIVELT_TO_NAME = "Axivelt Solutions";

export default function ContactSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [websites, setWebsites] = useState([]);
  const [websiteInput, setWebsiteInput] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [submitType, setSubmitType] = useState("quote");

  const handleWebsiteKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addWebsite(websiteInput.trim());
    }
  };

  const addWebsite = (link) => {
    if (!link) return;
    if (!/^https?:\/\/.+/.test(link)) {
      setWebsiteError("Invalid link. Must start with http:// or https://");
      return;
    }
    if (websites.includes(link)) {
      setWebsiteError("This website is already added");
      return;
    }
    setWebsites([...websites, link]);
    setWebsiteInput("");
    setWebsiteError("");
  };

  const removeWebsite = (index) =>
    setWebsites(websites.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    const submitter = e.nativeEvent?.submitter;
    const buttonType = submitter?.dataset?.type || submitType || "Send message";
    const friendlyType =
      buttonType === "Get a quote" || buttonType === "quote"
        ? "Get a quote"
        : "Send message";

    const form = e.currentTarget;
    const details = form.details?.value?.trim();
    if (!details) {
      setErr("Project details are required.");
      return;
    }

    const phone = form.phone?.value?.trim();
    if (phone) {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!phoneRegex.test(phone)) {
        setErr("Please enter a valid mobile number (international format).");
        return;
      }
    }

    setSending(true);
    const fd = new FormData(form);
    const payload = {
      name: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      phone: fd.get("phone")?.toString() || "",
      budget: fd.get("budget")?.toString() || "",
      details,
      websites: websites.join(", ") || "None",
      type: friendlyType,
      message:
        friendlyType === "Get a quote"
          ? "We will review your project and send a quote to your email as quickly as possible."
          : "We will contact you soon regarding your message.",
    };

    try {
      const adminPromise = emailjs.send(
        SERVICE_ID,
        TEMPLATE_ADMIN_ID,
        { ...payload, to_email: AXIVELT_TO_EMAIL, to_name: AXIVELT_TO_NAME },
        { publicKey: PUBLIC_KEY },
      );
      const autoPromise = emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTO_ID,
        {
          ...payload,
          to_email: payload.email,
          to_name: payload.name || "there",
        },
        { publicKey: PUBLIC_KEY },
      );

      await Promise.all([adminPromise, autoPromise]);

      try {
        const netlifyFd = new FormData(form);
        netlifyFd.append("form-name", "get-a-quote");
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(netlifyFd).toString(),
        });
      } catch {}

      form.reset();
      setWebsites([]);
      setWebsiteInput("");
      setSent(true);
      setTimeout(() => setSent(false), 8000);
    } catch (ex) {
      setErr(ex?.text || "Sorry, something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="badge-label text-red">Start Your Project</span>
            <h2 className="contact-title">Let's Build Something Amazing.</h2>
            <p className="contact-subtitle">
              Ready to build your custom software solution? As a leading agency
              in Sri Lanka, we provide transparent proposals and competitive
              quotes within 24 hours. No hidden costs.
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="contact-method-label">Email Us</div>
                  <a
                    href="mailto:axiveltofficial@gmail.com"
                    className="contact-method-text">
                    axiveltofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="contact-method-label">Call or WhatsApp</div>
                  <a
                    href="https://wa.me/94766980686"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-method-text">
                    +94 76 698 0686
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="contact-method-label">Location</div>
                  <span className="contact-method-text">
                    Colombo, Sri Lanka
                  </span>
                </div>
              </div>

              <div className="contact-method">
                <div className="contact-icon">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="contact-method-label">Working Hours</div>
                  <span className="contact-method-text">
                    Mon - Fri, 9:00 AM - 6:00 PM (IST)
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            <form
              name="get-a-quote"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="get-a-quote" />

              <div className="contact-row">
                <div className="contact-field">
                  <label>
                    Name <span className="text-red">*</span>
                  </label>
                  <input
                    className="contact-input"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="contact-field">
                  <label>
                    Email <span className="text-red">*</span>
                  </label>
                  <input
                    className="contact-input"
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <label>Mobile number (optional)</label>
                  <input
                    className="contact-input"
                    name="phone"
                    type="tel"
                    placeholder="+94771234567"
                  />
                </div>
                <div className="contact-field">
                  <label>Budget (optional)</label>
                  <select
                    className="contact-input"
                    name="budget"
                    defaultValue="">
                    <option value="" disabled>
                      Select a budget range
                    </option>
                    <option>Under LKR 150,000</option>
                    <option>LKR 150,000 – 400,000</option>
                    <option>LKR 400,000 – 800,000</option>
                    <option>LKR 800,000 – 1,500,000</option>
                    <option>Above LKR 1,500,000</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label>
                  Tell us about your project <span className="text-red">*</span>
                </label>
                <textarea
                  className="contact-input"
                  name="details"
                  rows="4"
                  placeholder="What software solution do you need? What problems are you trying to solve?"
                  required
                />
              </div>

              <div className="contact-field">
                <label>Reference examples (optional)</label>
                <input
                  className="contact-input"
                  type="url"
                  placeholder="Paste website/software URL and press Enter"
                  value={websiteInput}
                  onChange={(e) => setWebsiteInput(e.target.value)}
                  onKeyDown={handleWebsiteKeyDown}
                />
                <p className="contact-instruction">
                  Hit <span className="text-red">Enter</span> to add links to
                  features you like.
                </p>

                {websiteError && (
                  <p className="contact-error">{websiteError}</p>
                )}

                <div className="contact-tags">
                  {websites.map((w, i) => (
                    <span key={i} className="contact-tag">
                      {w}
                      <button type="button" onClick={() => removeWebsite(i)}>
                        ✕
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="contact-actions">
                <button
                  type="submit"
                  className="btn btn-outline"
                  disabled={sending}
                  data-type="Send message">
                  {sending ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={sending}
                  data-type="Get a quote">
                  {sending ? "Sending..." : "Get a Quote"}
                </button>
              </div>

              {sent && (
                <div
                  className="contact-success"
                  role="status"
                  aria-live="polite">
                  <p>
                    ✓ Thank you! We have received your details and will send a
                    quote within 24 hours.
                  </p>
                </div>
              )}
              {err && <p className="contact-error">{err}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
