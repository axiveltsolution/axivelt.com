import React from "react";

/* ======= SERVICES GIFs) ======= */
import gifWebsites from "../../../assets/gifs/websites.gif";
import gifWebapps from "../../../assets/gifs/webapps.gif";
import gifInventory from "../../../assets/gifs/inventory.gif";
import gifSeo from "../../../assets/gifs/seo.gif";
import gifMaintenance from "../../../assets/gifs/maintenance.gif";
import gifMigrations from "../../../assets/gifs/migrations.gif";

/* ================= Intersection Observer ================= */
function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      },
      { threshold: 0.1, ...options }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return ref;
}

function ServiceCard({ icon, title, items = [] }) {
  const [iconLoaded, setIconLoaded] = useState(false);
  const [iconError, setIconError] = useState(false);
  const cardRef = useIntersectionObserver();

  return (
    <article
      ref={cardRef}
      className="card"
      style={{
        opacity: 0,
        transform: "translateY(30px)",
        transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
      }}>
      <div className="card-icon">
        {!iconError ? (
          <img
            src={icon}
            alt={`${title} services`}
            loading="lazy"
            onLoad={() => setIconLoaded(true)}
            onError={() => setIconError(true)}
            style={{ opacity: iconLoaded ? 1 : 0, transition: "opacity 0.3s" }}
          />
        ) : (
          <div className="icon-fallback" aria-hidden="true">
            {title.charAt(0)}
          </div>
        )}
      </div>
      <div className="card-content">
        <h3 className="h3 card-title">{title}</h3>
        {items.length > 0 && (
          <ul className="card-list">
            {items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

/* ================= SERVICES ================= */
const items = [
  {
    gif: gifWebsites,
    title: "Websites (React / WordPress)",
    desc: "Corporate sites, marketing pages, blogs, CMS-backed content.",
  },
  {
    gif: gifWebapps,
    title: "Web Apps & Dashboards",
    desc: "Custom portals, role-based dashboards, bookings, automation.",
  },
  {
    gif: gifInventory,
    title: "Inventory / ERP Systems",
    desc: "Stock, orders, suppliers, reports. Integrations when needed.",
  },
  {
    gif: gifSeo,
    title: "SEO & Performance",
    desc: "Core Web Vitals, on-page SEO, analytics & search console.",
  },
  {
    gif: gifMaintenance,
    title: "Maintenance & Care Plans",
    desc: "Backups, updates, uptime monitoring, bug fixes, improvements.",
  },
  {
    gif: gifMigrations,
    title: "Migrations & Fixes",
    desc: "Move hosts, rescue broken sites, refactor legacy frontends.",
  },
];

export default function ServicesSection() {
  return (
    <>
      <section id="services" className="container svc-root">
        <h1 className="svc-h1">Our Services</h1>
        <p className="svc-muted">
          Clear scope, fixed price, fast delivery. Most corporate sites ship in
          1–2 weeks.
        </p>

        <div className="svc-grid">
          {items.map((s, i) => (
            <article className="svc-card" key={i}>
              <img
                className="svc-gif"
                src={s.gif}
                alt={s.title}
                loading="lazy"
                decoding="async"
              />
              <h3 className="svc-h3">{s.title}</h3>
              <p className="svc-muted">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
