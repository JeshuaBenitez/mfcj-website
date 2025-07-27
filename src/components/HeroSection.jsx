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

          <div className="hero-buttons">
            <a
              href="#info-jovenes"
              className="btn-morado"
              onClick={(e) => handleNav(e, "info-jovenes")}
              onTouchStart={(e) => handleNav(e, "info-jovenes")}
            >
              Jóvenes 15–25 años
            </a>

            <a
              href="#info-adolescentes"
              className="btn-rosa"
              onClick={(e) => handleNav(e, "info-adolescentes")}
              onTouchStart={(e) => handleNav(e, "info-adolescentes")}
            >
              Adolescentes 11–14 años
            </a>
          </div>
        </div>

        <div className="hero-img-side">
          <img src={collageImg} alt="Juventud MFCJ" className="hero-img" />
        </div>
      </section>
    </header>
  );
}
