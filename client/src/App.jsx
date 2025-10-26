// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { HelmetProvider } from "react-helmet-async"; // optional here if already wrapped in index.jsx

/* ================= Components ================= */
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

/* ================= Pages ================= */
import Home from "./Pages/Home/Home.jsx";
import OurProjects from "./Pages/OurProjects/OurProjects.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

/* ================= Project Detail Pages ================= */
import Easyneat from "./Pages/Projects/EasyneatArticle.jsx";
import AroundLankaTravels from "./Pages/Projects/AroundLankaTravelsArticle.jsx";
import MotoGearInventorySystem from "./Pages/Projects/MotoGearInventorySystemArticle.jsx";

export default function App() {
  return (
    <>
      {/* Optional: If HelmetProvider is already in index.jsx, you can skip wrapping here */}
      <HelmetProvider>
        {/* Navbar */}
        <NavBar />

        {/* Routes */}
        <Routes>
          {/* Top-level pages */}
          <Route path="/" element={<Home />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route
            path="/projects"
            element={<Navigate to="/our-projects" replace />}
          />

          {/* Project detail pages */}
          <Route path="/projects/easyneat" element={<Easyneat />} />
          <Route
            path="/projects/aroundlankatravels"
            element={<AroundLankaTravels />}
          />
          <Route
            path="/projects/motogear-inventory-system"
            element={<MotoGearInventorySystem />}
          />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </HelmetProvider>
    </>
  );
}
