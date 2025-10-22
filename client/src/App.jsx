import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import Home from "./Pages/Home/Home.jsx";
import OurProjects from "./Pages/OurProjects/OurProjects.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

import ScrollToTop from "./Components/ScrollToTop.jsx";

/* Project detail pages */
import Easyneat from "./Pages/Projects/EasyneatArticle.jsx";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
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

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
