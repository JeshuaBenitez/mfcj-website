// src/components/InfoAdolescentes.jsx
import React from "react";

export default function InfoAdolescentes() {
  return (
    <div data-aos="fade-up">
    <section id="info-adolescentes" className="info-adolescentes">s
      <h2 className="info-title">Retiro de Adolescentes (11–14 años)</h2>
      <p className="info-date">📅 Fecha: 30 de Agosto</p>
      <p className="info-place">📍 Punto de encuentro: Parroquia La Santa Cruz</p>
      <p className="info-hour">🕘 Hora: 9:00 am</p>
      <p className="info-where">
        📌 Lugar del retiro:{" "}
        <a
          href="https://maps.app.goo.gl/X6ZTwnrimfmp2xj3A"
          target="_blank"
          rel="noopener noreferrer"
          className="info-link"
        >
          Casa de las hermanas de la Veracruz
        </a>
      </p>
      <p className="info-money">💰 Cooperación: 60 pesos</p>
      <div className="info-list">
        <p>✅ Qué llevar:</p>
        <ul>
          <li>• Ropa cómoda</li>
          <li>• Desayuno para compartir</li>
          <li>• ¡Y sobre todo, la mejor actitud!</li>
        </ul>
      </div>
      <div className="contact-buttons adolescentes">
        <h2 className="contact-title">¿Dudas o más información?</h2>
        <p className="contact-text">¡No te preocupes! 💖 Estamos para ayudarte 🙂</p>
        <div className="contact-buttons">
          <a
            href="https://wa.me/522722359577"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp"
          >
            <span className="emoji">📱</span>
            <div className="text">
              <strong>WhatsApp</strong><br />
              2722359577
            </div>
          </a>
          <a
            href="https://www.instagram.com/mfcj_santacruz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn instagram"
          >
            <span className="emoji">📸</span>
            <div className="text">
              <strong>Instagram</strong><br />
              @mfcj_santacruz
            </div>
          </a>
        </div>
      </div>
    </section>
    </div>
  );
}
