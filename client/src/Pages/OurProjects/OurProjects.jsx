import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./OurProjects.css";

/* ======= Local project screenshots (swap to real paths as needed) ======= */
import imgEasyNeat from "../../assets/projects/easyneat/img1.webp";
import imgMotoGear from "../../assets/projects/motogear/img1.webp";
import imgAroundLanka from "../../assets/projects/aroundlanka/img1.webp";
import imgElinaPix from "../../assets/projects/elinapix/img1.webp";
import imgFitZone from "../../assets/projects/fitzone/img1.webp";
import imgGadgetHub from "../../assets/projects/gadgethub/img1.webp";

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
  }, []);
  return ref;
}

function ProjectCard({ href, website, title, description, image, websiteLabel = "Visit website" }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardRef = useIntersectionObserver();

  const Wrapper = href ? Link : "div";
  const wrapperProps = href ? { to: href, "aria-label": `View ${title} project details` } : {};
  const onExternalClick = (e) => e.stopPropagation();

  return (
    <Wrapper
      ref={cardRef}
      {...wrapperProps}
      className="work"
      style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)" }}
    >
      <div className="work-thumb">
        {!imageError ? (
          <img
            className="work-img"
            src={image}
            alt={`${title} project preview`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            style={{ opacity: imageLoaded ? 1 : 0, transition: "opacity 0.4s" }}
          />
        ) : (
          <div className="image-fallback"><div className="project-placeholder">{title?.charAt(0) || "P"}</div></div>
        )}
        {!imageLoaded && !imageError && <div className="image-placeholder" />}
      </div>

      <div className="work-body">
        <h4 className="work-title">{title}</h4>
        <p className="muted work-tag">{description}</p>

        {website && (
          <a
            className="work-visit"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onExternalClick}
            aria-label={`Open ${title} website (new tab)`}
          >
            {websiteLabel} ↗
          </a>
        )}
      </div>
    </Wrapper>
  );
}

export default function OurProjects() {
  const projects = [
    {
      title: "Easyneat",
      description: "EasyNeat provides reliable, eco-friendly cleaning services across Victoria with an easy online booking system and clear, upfront pricing. The platform is powered by a Node.js API and a React (Vite) front-end for speed, security, and a seamless customer experience. A powerful, advanced admin dashboard is included to manage bookings, customers, and services with ease.",
      image: imgEasyNeat,
      website: "https://easyneat.com.au",
      href: "/projects/easyneat", // card click -> detail page
    },
    {
      title: "MotoGear",
      description: "MotoGear delivers quality motorcycle helmets and bike spare parts with a smooth shopping experience and clear pricing. The site is powered by WordPress and a custom PHP/HTML/CSS inventory management system for real-time stock control and fast product updates.",
      image: imgMotoGear,
      website: "https://motogear.lk/",
      href: "/projects/motogear",
    },
    {
      title: "AroundLankaTravels",
      description: "AroundLankaTravels.com brings authentic Sri Lankan tourism experiences with professional service and tailored travel packages. The site is built with React for a modern, engaging interface and Node.js for a fast, reliable backend to ensure smooth bookings and real-time updates. An integrated admin dashboard allows the client to easily customize and manage the website content.",
      image: imgAroundLanka,
      // website: "...",
    },
    {
      title: "ElinaPix",
      description: "ElinaPix showcases the work of a professional photographer in France with a clean portfolio and elegant galleries. The website is powered by WordPress, delivering a seamless viewing experience and easy content updates for stunning photography displays.",
      image: imgElinaPix,
      website: "https://elinapix.com/",
      href: "/projects/elinapix"
    },
    {
      title: "FitZone",
      description: "Fitzone offers a modern gym management web app with class schedules, membership tracking, and workout updates. Built using PHP, HTML, CSS, and JavaScript, it provides a smooth user experience and easy management for both trainers and members. An advanced admin panel is included to efficiently manage site content, members, and operations.",
      image: imgFitZone,
      href: "/projects/fitzone"
    },
    {
      title: "GadgetHub",
      description: "The Gadget Hub offers a smart gadget shopping platform with real-time price comparison, stock checks, and order tracking. Built using React and Node.js, it delivers a fast, reliable experience for customers and ensures smooth management through its streamlined ordering system.",
      image: imgGadgetHub,
      href: "/projects/gadgethub"
    },
  ];

  return (
    <div className="projects">
      <div className="container">
        <header className="projects-header">
          <h1 className="h2">Projects</h1>
          <p className="muted">A selection of recent work — websites, dashboards, and custom web apps.</p>
        </header>

        <div className="projects-grid">
          {projects.map((p, i) => <ProjectCard key={p.title + i} {...p} />)}
        </div>
      </div>
    </div>
  );
}
