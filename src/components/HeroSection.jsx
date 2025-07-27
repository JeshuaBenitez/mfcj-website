// src/components/HeroSection.jsx
import React from "react";
import collageImg from "../assets/collage.png";
import mfcjlogo from "../assets/mfcj-logo.jpg";
// import { scrollToId } from "../utils/scrollToId"; // si hiciste el helper en archivo aparte

const scrollToId = (id, offset = -20) => {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top, behavior: 'smooth' });
};

export default function HeroSection() {
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
            <button
              className="btn-morado"
              onClick={() => scrollToId("info-jovenes", -10)}
            >
              Jóvenes 15–25 años
            </button>

            <button
              className="btn-rosa"
              onClick={() => scrollToId("info-adolescentes", -10)}
            >
              Adolescentes 11–14 años
            </button>
          </div>
        </div>

        <div className="hero-img-side">
          <img src={collageImg} alt="Juventud MFCJ" className="hero-img" />
        </div>
      </section>
    </header>
  );
}
