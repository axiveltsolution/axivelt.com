import React from "react";
import "./HeroSection.css";

export default function HeroSection({
  title = "Your Title Here",
  subtitle = "Your subtitle or description goes here.",
  backgroundImage = "",
}) {
  return (
    <section
      className="page-hero hero-section"
      style={{
        height: "60vh",
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.35)),
          url(${backgroundImage})
        `,
      }}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p style={{ color: "white" }}>{subtitle}</p>
      </div>
    </section>
  );
}
