// src/components/Footer.jsx
import React from "react";
import mfcjlogo from "../assets/mfcj-logo.jpg";

export default function Footer() {
  return (
    <div data-aos="fade-up">
      <footer className="footer">
        <img src={mfcjlogo} alt="mfcjlogo" className="footer-logo" />
        <p className="footer-text">
          © {new Date().getFullYear()} Movimiento Familiar Cristiano Juvenil - Santa Cruz.  
          <br />
          Sitio creado con ❤️ por el equipo MFCJ.
        </p>
      </footer>
    </div>
  );
}
