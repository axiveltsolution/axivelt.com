import { useEffect, useMemo, useState } from "react";
import "./OurProjects.css";

/** Auto-import every image in /assets/gallery (Vite feature).
 *  Supported: jpg, jpeg, png, webp, avif, gif
 *  Put files in: src/assets/gallery/...
 */
const modules = import.meta.glob(
  "../../assets/gallery/**/*.{jpg,jpeg,png,webp,avif,gif}",
  { eager: true, import: "default" }
);
const SOURCE_IMAGES = Object.values(modules);

/* Utility: Fisher–Yates shuffle */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function OurProjects() {
  // Randomize once per mount
  const images = useMemo(() => shuffle(SOURCE_IMAGES), []);

  // Lightbox
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = (i) => { setIndex(i); setOpen(true); };
  const close  = () => setOpen(false);
  const prev   = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next   = () => setIndex((i) => (i + 1) % images.length);

  // Keyboard + scroll lock
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
    <div className="projects">
      <h1 className="sr-only">Projects Gallery</h1>

      <div className="container">
        <ul className="gallery" aria-label="Projects image gallery">
          {images.map((src, i) => (
            <li className="gallery-item" key={src + i}>
              <button
                className="thumb"
                onClick={() => openAt(i)}
                aria-label="Open image"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 540px) 95vw, (max-width: 1024px) 45vw, 30vw"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={(e) => {
            if (e.target.classList.contains("lightbox")) close();
          }}
        >
          <button className="lb-btn lb-prev" onClick={prev} aria-label="Previous image">‹</button>
          <img className="lb-image" src={images[index]} alt="" />
          <button className="lb-btn lb-next" onClick={next} aria-label="Next image">›</button>

          <button className="lb-close" onClick={close} aria-label="Close">×</button>
        </div>
      )}
    </div>
  );
}
