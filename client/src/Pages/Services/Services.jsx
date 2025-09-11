import "./Services.css";

// --- import the GIFs (keep these filenames in src/assets/gifs) ---
import gifWebsites from "../../assets/gifs/websites.gif";
import gifWebapps from "../../assets/gifs/webapps.gif";
import gifInventory from "../../assets/gifs/inventory.gif";
import gifSeo from "../../assets/gifs/seo.gif";
import gifMaintenance from "../../assets/gifs/maintenance.gif";
import gifMigrations from "../../assets/gifs/migrations.gif";

const items = [
  { gif: gifWebsites,   title: "Websites (React / WordPress)", desc: "Corporate sites, marketing pages, blogs, CMS-backed content." },
  { gif: gifWebapps,    title: "Web Apps & Dashboards",        desc: "Custom portals, role-based dashboards, bookings, automation." },
  { gif: gifInventory,  title: "Inventory / ERP Systems",      desc: "Stock, orders, suppliers, reports. Integrations when needed." },
  { gif: gifSeo,        title: "SEO & Performance",            desc: "Core Web Vitals, on-page SEO, analytics & search console." },
  { gif: gifMaintenance,title: "Maintenance & Care Plans",     desc: "Backups, updates, uptime monitoring, bug fixes, improvements." },
  { gif: gifMigrations, title: "Migrations & Fixes",           desc: "Move hosts, rescue broken sites, refactor legacy frontends." },
];

export default function Services(){
  return (
    <section className="container svc-root">
      <h1 className="svc-h1">Our Services</h1>
      <p className="svc-muted">Clear scope, fixed price, fast delivery. Most corporate sites ship in 1–2 weeks.</p>

      <div className="svc-grid">
        {items.map((s,i)=>(
          <article className="svc-card" key={i}>
            <img className="svc-gif" src={s.gif} alt={s.title} loading="lazy" decoding="async" />
            <h3 className="svc-h3">{s.title}</h3>
            <p className="svc-muted">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}