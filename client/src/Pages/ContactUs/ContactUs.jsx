import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const SERVICE_ID = "service_gmailaxivelt";
const TEMPLATE_ADMIN_ID = "template_2erh7n5";
const TEMPLATE_AUTO_ID = "template_undw9fq";
const PUBLIC_KEY = "Tg5YfwWCQAsQCGMZc";

// optional: where you want admin emails to go (can also be set in the template)
const AXIVELT_TO_EMAIL = "axiveltofficial@gmail.com";
const AXIVELT_TO_NAME = "Axivelt Solutions";

export default function ContactUs() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErr("");
    setSending(true);

    // ✅ capture the form element BEFORE any await
    const form = e.currentTarget;
    if (!form) {
      setErr("Form not found.");
      setSending(false);
      return;
    }

    const fd = new FormData(form);
    const payload = {
      name: fd.get("name")?.toString() || "",
      email: fd.get("email")?.toString() || "",
      company: fd.get("company")?.toString() || "",
      budget: fd.get("budget")?.toString() || "",
      details: fd.get("details")?.toString() || "",
    };

    try {
      // 1) Send to Axivelt (admin)
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

      // 2) Auto-reply to customer
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

      // Optional: also log to Netlify Forms inbox (no backend)
      try {
        const netlifyFd = new FormData(form);
        netlifyFd.append("form-name", "contact");
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(netlifyFd).toString(),
        });
      } catch {
        // ignore Netlify capture errors
      }

      // ✅ now safe to reset using the captured form element
      form.reset();
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } catch (ex) {
      console.error(ex);
      setErr(ex?.text || "Sorry, something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className="container contact-root">
      <h1 className="contact-h1">Let’s build something great</h1>
      <p className="contact-muted">
        Tell us about your project. We’ll reply within 24 hours with next steps.
      </p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="contact-row2">
          <div className="contact-field">
            <label>Name</label>
            <input name="name" required placeholder="Your name" />
          </div>
          <div className="contact-field">
            <label>Email</label>
            <input type="email" name="email" required placeholder="you@example.com" />
          </div>
        </div>

        <div className="contact-row2">
          <div className="contact-field">
            <label>Company</label>
            <input name="company" placeholder="Company (optional)" />
          </div>
          <div className="contact-field">
            <label>Budget</label>
            <select name="budget" defaultValue="">
              <option value="" disabled>Select a range</option>
              <option>Under LKR 100,000</option>
              <option>LKR 100,000 – 250,000</option>
              <option>LKR 250,000 – 500,000</option>
              <option>Above LKR 500,000</option>
            </select>
          </div>
        </div>

        <div className="contact-field">
          <label>Project details</label>
          <textarea
            name="details"
            rows="6"
            placeholder="Website / Web app / Inventory system? Features, deadline, examples you like..."
          />
        </div>

        <div className="send-row">
          <button type="submit" className="contact-btn" disabled={sending}>
            {sending ? "Sending..." : "Send message"}
          </button>

          {sent && (
            <span className="sent-banner" role="status" aria-live="polite">
              ✓ Message has been sent
            </span>
          )}
        </div>

        {err && <p className="error-text">{err}</p>}

        <p className="contact-help">
          Prefer email?{" "}
          <a href="mailto:axiveltofficial@gmail.com">axiveltofficial@gmail.com</a>
        </p>
      </form>
    </section>
  );
}