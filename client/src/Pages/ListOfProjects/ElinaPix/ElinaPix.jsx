import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./ElinaPix.css";

const modules = import.meta.glob(
  "/src/assets/projects/elinapix/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP,avif,AVIF,gif,GIF}",
  { eager: true, import: "default" }
);
const IMAGES = Object.values(modules);

function shuffle(a){ const b=a.slice(); for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];} return b; }

export default function ElinaPix() {
  const images = useMemo(() => shuffle(IMAGES), []);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const openAt=(i)=>{setIndex(i);setOpen(true)}; const close=()=>setOpen(false);
  const prev=()=>setIndex(i=>(i-1+images.length)%images.length);
  const next=()=>setIndex(i=>(i+1)%images.length);

  useEffect(()=>{ if(!open) return;
    const onKey=(e)=>{ if(e.key==="Escape") close(); if(e.key==="ArrowLeft") prev(); if(e.key==="ArrowRight") next(); };
    document.addEventListener("keydown",onKey);
    const prevOverflow=document.body.style.overflow; document.body.style.overflow="hidden";
    return ()=>{ document.removeEventListener("keydown",onKey); document.body.style.overflow=prevOverflow; };
  },[open]);

  return (
    <div className="project">
      <div className="container">
        <header className="project-header">
          <h1 className="h2">ElinaPix</h1>
          <p className="muted">
            Photography portfolio with elegant galleries. Built on WordPress for seamless viewing and easy content updates.
          </p>
        </header>

        {images.length ? (
          <ul className="masonry" aria-label="ElinaPix screenshots">
            {images.map((src,i)=>(
              <li key={src+i} className="masonry-item">
                <button className="shot-btn" onClick={()=>openAt(i)} aria-label="Open screenshot">
                  <img src={src} alt="" loading="lazy" decoding="async"
                       sizes="(max-width:540px)96vw,(max-width:1024px)46vw,30vw" />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="muted" style={{textAlign:"center",margin:"24px 0"}}>
            No screenshots found in <code>src/assets/projects/elinapix/</code>.
          </p>
        )}

        <div className="project-actions">
          <a className="btn btn-primary" href="https://elinapix.com/" target="_blank" rel="noopener noreferrer">
            Visit website ↗
          </a>
          <Link className="btn btn-secondary" to="/our-projects">Back to all projects</Link>
        </div>
      </div>

      {open && images.length>0 && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer"
             onClick={(e)=>{ if(e.target.classList.contains("lightbox")) close(); }}>
          <button className="lb-btn lb-prev" onClick={prev} aria-label="Previous image">‹</button>
          <img className="lb-image" src={images[index]} alt="" />
          <button className="lb-btn lb-next" onClick={next} aria-label="Next image">›</button>
          <button className="lb-close" onClick={close} aria-label="Close">×</button>
        </div>
      )}
    </div>
  );
}
