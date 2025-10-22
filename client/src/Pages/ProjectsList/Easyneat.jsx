import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

/** Auto-import all images in: src/assets/projects/easyneat/
 *  Using an absolute path (/src/...) avoids relative path mistakes.
 *  Also matches upper/lowercase extensions.
 */
const modules = import.meta.glob(
  "/src/assets/projects/easyneat/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF,gif,GIF}",
  { eager: true, import: "default" }
);
const IMAGES = Object.values(modules);

/* Utility: Fisher–Yates shuffle */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Easyneat() {
  const images = useMemo(() => shuffle(IMAGES), []);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };
  const close = () => setOpen(false);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // Keyboard + scroll lock for lightbox
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="project">
      <div className="container">
        <header className="project-header">
          <h1 className="h2">Easyneat</h1>
          <p className="muted">
            Eco-friendly cleaning across Victoria with online booking and
            transparent pricing. Built with a Node.js API and a React (Vite)
            front-end.
          </p>
        </header>

        {/* Masonry gallery or a friendly hint if empty */}
        {images.length > 0 ? (
          <ul className="masonry" aria-label="Easyneat screenshots">
            {images.map((src, i) => (
              <li key={src + i} className="masonry-item">
                <button
                  className="shot-btn"
                  onClick={() => openAt(i)}
                  aria-label="Open screenshot">
                  <img
                    src={src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 540px) 96vw, (max-width: 1024px) 46vw, 30vw"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p
            className="muted"
            style={{ textAlign: "center", margin: "24px 0" }}>
            No screenshots found in <code>src/assets/projects/easyneat/</code>.
            Add PNG/JPG/WebP images there and refresh.
          </p>
        )}

        <div className="project-actions">
          <a
            className="btn btn-primary"
            href="https://easyneat.com.au"
            target="_blank"
            rel="noopener noreferrer">
            Visit website ↗
          </a>
          <Link className="btn btn-secondary" to="/our-projects">
            Back to all projects
          </Link>
        </div>
      </div>

      {open && images.length > 0 && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) close();
          }}>
          <button
            className="lb-btn lb-prev"
            onClick={prev}
            aria-label="Previous image">
            ‹
          </button>
          <img className="lb-image" src={images[index]} alt="" />
          <button
            className="lb-btn lb-next"
            onClick={next}
            aria-label="Next image">
            ›
          </button>
          <button className="lb-close" onClick={close} aria-label="Close">
            ×
          </button>
        </div>
      )}
    </div>
  );
}
