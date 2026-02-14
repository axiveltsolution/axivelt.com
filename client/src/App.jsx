// App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import { HelmetProvider } from "react-helmet-async"; // optional here if already wrapped in index.jsx

/* ================= Components ================= */
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

/* ================= Pages ================= */
import Home from "./Pages/Home/Home.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

/* ================= Project Detail Pages ================= */
import Easyneat from "./Pages/Projects/EasyneatArticle.jsx";
import AroundLankaTravels from "./Pages/Projects/AroundLankaTravelsArticle.jsx";
import MotoGearInventorySystem from "./Pages/Projects/MotoGearInventorySystemArticle.jsx";

/* ================= Lenis ================= */
import SmoothScrolling from "./Hooks/Lenis-Scrolling.jsx";

export default function App() {
  SmoothScrolling();

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects/easyNeat-cleaning-service-booking-platform"
          element={<Easyneat />}
        />
        <Route
          path="/projects/around-lanka-travels-tour-booking-platform"
          element={<AroundLankaTravels />}
        />
        <Route
          path="/projects/motogear-inventory-management-system"
          element={<MotoGearInventorySystem />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}
