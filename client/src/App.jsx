import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import Home from "./Pages/Home/Home.jsx";
import Services from "./Pages/Services/Services.jsx";
import OurProjects from "./Pages/OurProjects/OurProjects.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";

import ScrollToTop from "./Components/ScrollToTop.jsx";

export default function App() {
  return (
    <>
    <ScrollToTop />
      <NavBar />
      <main style={{ paddingTop: "72px", minHeight: "calc(100vh - 160px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
