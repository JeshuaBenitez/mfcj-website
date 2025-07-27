// src/components/HeroSection.jsx
import React from "react";
import collageImg from "../assets/collage.png";
import mfcjlogo from "../assets/mfcj-logo.jpg";

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 10;
  window.scrollTo({ top: y, behavior: "smooth" });
};

export default function HeroSection() {
  const handleNav = (e, id) => {
    e.preventDefault();
    scrollToId(id);
  };

  return (
    <header className="hero-wrapper">
      <img src={mfcjlogo} alt="mfcjlogo" className="hero-logo" />
      <div className="hero-overlay" />

      <section className="hero-diagonal">
        <div className="hero-text-side">
          <h1 className="hero-title">MFCJ Santa Cruz</h1>
          <p className="hero-text">
            Vive una experiencia única, llena de fe, amistad y crecimiento personal
          </p>
        </div>
        <div className="hero-img-side">
          <img src={collageImg} alt="Juventud MFCJ" className="hero-img" />
        </div>
      </section>
    </header>
  );
}
