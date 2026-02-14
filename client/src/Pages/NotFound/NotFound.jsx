import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container not-found__container">
        <span className="badge-label text-red">404 Error</span>
        <h1 className="not-found__title">Page Not Found.</h1>
        <p className="not-found__subtitle">
          The page you are looking for doesn't exist, has been moved, or is
          temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Homepage
        </Link>
      </div>
    </main>
  );
}
