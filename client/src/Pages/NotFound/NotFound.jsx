import "./NotFound.css";

export default function NotFound(){
  return (
    <section className="container nf-root">
      <h1 className="nf-h1">Page not found</h1>
      <p className="nf-muted">The page you were looking for doesn’t exist.</p>
      <a className="nf-btn" href="/">Go home</a>
    </section>
  );
}
