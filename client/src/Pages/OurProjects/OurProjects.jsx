import "./OurProjects.css";

const items = [
  { name:'GadgetHub', desc:'E-commerce + distributor quotes. ASP.NET API + React.' },
  { name:'FixMate.lk', desc:'Service booking platform (MERN). Multi-role dashboards.' },
  { name:'LankaSafeTours', desc:'Tour site on WordPress with booking & payments.' },
  { name:'MotoGear POS', desc:'Inventory & sales system with thermal receipts.' },
  { name:'Kumara Arcade', desc:'Retail promo campaigns with WhatsApp broadcasts.' },
  { name:'EasyNeat AU', desc:'Cleaning services site with booking wizard.' },
];

export default function OurProjects(){
  return (
    <section className="container work-root">
      <h1 className="work-h1">Projects</h1>
      <p className="work-muted">A few highlights of what we build.</p>

      <div className="work-grid">
        {items.map((p,i)=>(
          <article key={i} className="work-card">
            <div className="work-thumb"></div>
            <div className="work-body">
              <h3 className="work-h3">{p.name}</h3>
              <p className="work-muted">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
