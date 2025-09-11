import "./ContactUs.css";

export default function ContactUs(){
  return (
    <section className="container contact-root">
      <h1 className="contact-h1">Let’s build something great</h1>
      <p className="contact-muted">Tell us about your project. We’ll reply within 24 hours with next steps.</p>

      <form name="contact" method="POST" data-netlify="true" className="contact-form">
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
          <textarea name="details" rows="6" placeholder="Website / Web app / Inventory system? Features, deadline, examples you like..." />
        </div>
        <button type="submit" className="contact-btn">Send message</button>
        <p className="contact-help">Prefer email? <a href="mailto:axiveltofficial@gmail.com">axiveltofficial@gmail.com</a></p>
      </form>
    </section>
  );
}
