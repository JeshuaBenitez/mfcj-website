// src/components/HeroSection.jsx
import React from "react";
import collageImg from "../assets/collage.png"; // reemplázalo con tu imagen real
import mfcjlogo from "../assets/mfcj-logo.jpg";

export default function HeroSection() {
  return (
    <header className="hero-wrapper">
      <img src={mfcjlogo} alt="mfcjlogo" className="hero-logo" />
      <div className="hero-overlay"></div>

      <section className="hero-diagonal">
        <div className="hero-text-side">
          <h1 className="hero-title">MFCJ Santa Cruz</h1>
          <p className="hero-text">
            Vive una experiencia única, llena de fe, amistad y crecimiento personal
          </p>
          <div className="hero-buttons">
            <a href="#info-jovenes" className="btn-morado">Jóvenes 15–25 años</a>
            <a href="#info-adolescentes" className="btn-rosa">Adolescentes 11–14 años</a>
          </div>
        </div>

        <div className="hero-img-side">
          <img src={collageImg} alt="Juventud MFCJ" className="hero-img" />
        </div>
      </section>
    </header>
  );
}
