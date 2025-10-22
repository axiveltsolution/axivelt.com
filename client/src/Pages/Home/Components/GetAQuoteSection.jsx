import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./../Home.css";

const SERVICE_ID = "service_gmailaxivelt";
const TEMPLATE_ADMIN_ID = "template_2erh7n5";
const TEMPLATE_AUTO_ID = "template_undw9fq";
const PUBLIC_KEY = "Tg5YfwWCQAsQCGMZc";

const AXIVELT_TO_EMAIL = "axiveltofficial@gmail.com";
const AXIVELT_TO_NAME = "Axivelt Solutions";

export default function GetAQuoteSection() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const [websites, setWebsites] = useState([]);
  const [websiteInput, setWebsiteInput] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [submitType, setSubmitType] = useState("quote");

  // Website tag input
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

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    const form = e.currentTarget;

    // Mandatory fields
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
      type: submitType,
      message:
        submitType === "quote"
          ? "We will review your project and send a quote to your email as quickly as possible."
          : "We will contact you soon regarding your message.",
    };

    try {
      // Send to admin
      const adminPromise = emailjs.send(
        SERVICE_ID,
        TEMPLATE_ADMIN_ID,
        {
          ...payload,
          to_email: AXIVELT_TO_EMAIL,
          to_name: AXIVELT_TO_NAME,
        },
        { publicKey: PUBLIC_KEY }
      );

      // Auto-reply to user
      const autoPromise = emailjs.send(
        SERVICE_ID,
        TEMPLATE_AUTO_ID,
        {
          ...payload,
          to_email: payload.email,
          to_name: payload.name || "there",
        },
        { publicKey: PUBLIC_KEY }
      );

      await Promise.all([adminPromise, autoPromise]);

      // Optional: Netlify capture
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
      console.error(ex);
      setErr(ex?.text || "Sorry, something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="get-a-quote" className="section get-quote-section">
      <h1>Get a Quote</h1>
      <p className="sub-title">
        Fill in the form below with your project details. We'll review it and
        send a personalized quote within 24 hours.
      </p>

      <form
        name="get-a-quote"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="get-quote-form">
        <input type="hidden" name="form-name" value="get-a-quote" />

        {/* Name & Email */}
        <div className="quote-row2">
          <div className="quote-field">
            <label>
              Name <span className="required">*</span>
            </label>
            <input name="name" required placeholder="Your full name" />
          </div>
          <div className="quote-field">
            <label>
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Mobile Number & Budget */}
        <div className="quote-row2">
          <div className="quote-field">
            <label>Mobile number (optional)</label>
            <input name="phone" type="tel" placeholder="+94771234567" />
          </div>
          <div className="quote-field">
            <label>Budget (optional)</label>
            <select name="budget" defaultValue="">
              <option value="" disabled>
                Select a budget range
              </option>
              <option>Under LKR 100,000</option>
              <option>LKR 100,000 – 250,000</option>
              <option>LKR 250,000 – 500,000</option>
              <option>Above LKR 500,000</option>
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div className="quote-field">
          <label>
            Project details <span className="required">*</span>
          </label>
          <textarea
            name="details"
            rows="6"
            placeholder="Describe your project: website, web app, inventory system, features, deadline, examples you like..."
            required
          />
          <p className="field-instruction">
            Include as much detail as possible so we can prepare an accurate
            quote.
          </p>
        </div>

        {/* Websites */}
        <div className="quote-websites">
          <label>Add Websites you like (optional)</label>
          <input
            type="url"
            placeholder="Paste website and hit Enter"
            value={websiteInput}
            onChange={(e) => setWebsiteInput(e.target.value)}
            onKeyDown={handleWebsiteKeyDown}
          />
          {websiteError && <p className="error-text">{websiteError}</p>}

          <div className="website-tags">
            {websites.map((w, i) => (
              <span key={i} className="website-tag">
                {w}
                <button type="button" onClick={() => removeWebsite(i)}>
                  ✕
                </button>
              </span>
            ))}
          </div>
          <p className="field-instruction">
            Paste links you like
            <span style={{ color: "#ff4757" }}> and hit enter.</span> Only valid
            URLs will be added.
          </p>
        </div>

        {/* Buttons */}
        <div className="send-row">
          <button
            type="submit"
            className="btn btn-outline"
            disabled={sending}
            onClick={() => setSubmitType("message")}>
            {sending ? "Sending..." : "Send message"}
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={sending}
            onClick={() => setSubmitType("quote")}>
            {sending ? "Sending..." : "Get a quote"}
          </button>

          {sent && (
            <div className="sent-banner" role="status" aria-live="polite">
              <p>
                Thank you for reaching out! We have received your project
                details. Our team will review it and contact you as soon as
                possible.
              </p>
            </div>
          )}
        </div>

        {err && <p className="error-text">{err}</p>}

        <p className="quote-help">
          Prefer email?{" "}
          <a href="mailto:axiveltofficial@gmail.com">
            axiveltofficial@gmail.com
          </a>
        </p>
      </form>
    </section>
  );
}
