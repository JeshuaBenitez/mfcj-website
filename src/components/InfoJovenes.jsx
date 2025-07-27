// src/components/InfoJovenes.jsx
import React from "react";
import img01 from '../assets/img01.jpg';
import img02 from '../assets/img02.jpg';
import img03 from '../assets/img03.jpg';
import img04 from '../assets/img04.jpg';
import img05 from '../assets/img05.jpg';
import img06 from '../assets/img06.jpg';
import img07 from '../assets/img07.jpg';
import img08 from '../assets/img08.jpg';
import img09 from '../assets/img09.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';

export default function InfoJovenes() {
  return (
    <div data-aos="fade-up">
      <main className="gallery">
        <div className="gallery__item">
          <img src={img01} alt="mfcj 1"/>
        </div>
        <div className="gallery__item">
          <img src={img02} alt="mfcj 2"/>
        </div>
        <div className="gallery__item">
          <img src={img03} alt="mfcj 3"/>
        </div>
        <div className="gallery__item">
          <img src={img04} alt="mfcj 4"/>
        </div>
        <div className="gallery__item">
          <img src={img05} alt="mfcj 5"/>
        </div>
        <div className="gallery__item">
          <img src={img06} alt="mfcj 6"/>
        </div>
        <div className="gallery__item">
          <img src={img07} alt="mfcj 7"/>
        </div>
        <div className="gallery__item">
          <img src={img08} alt="mfcj 8"/>
        </div>
        <div className="gallery__item">
          <img src={img09} alt="mfcj 9"/>
        </div>
        <div className="gallery__item">
          <img src={img10} alt="mfcj 10"/>
        </div>
        <div className="gallery__item">
          <img src={img11} alt="mfcj 11"/>
        </div>
        <div className="gallery__item">
          <img src={img12} alt="mfcj 12"/>
        </div>
        <div className="gallery__item">
          <img src={img13} alt="mfcj 13"/>
        </div>
      </main>
    <section id="info-jovenes" className="info-jovenes">
      <h2 className="info-title">Retiro de Jóvenes (15–25 años)</h2>
      <p className="info-date">📅 Fechas: 6 y 7 de Septiembre</p>
      <p className="info-place">📍 Punto de encuentro: Parroquia La Santa Cruz</p>
      <p className="info-hour">🕘 Hora: 9:00 am</p>
      <p className="info-where">
        📌 Lugar del retiro:{" "}
        <a
          href="https://maps.app.goo.gl/cnvNdadCGBeTvYFh8"
          target="_blank"
          rel="noopener noreferrer"
          className="info-link"
        >
          Centro Pastoral San Rafael Guizar y Valencia
        </a>
      </p>
      <p className="info-money">💰 Cooperación: 80 pesos por persona</p>
      <div className="info-list">
        <p>✅ Qué llevar:</p>
        <ul>
          <li>• Ropa cómoda</li>
          <li>• Muda extra</li>
          <li>• Cosas de aseo personal</li>
          <li>• Cosas para dormir</li>
          <li>• Desayuno para compartir</li>
          <li>• ¡Y sobre todo, la mejor actitud!</li>
        </ul>
      </div>
      <div className="contact-buttons jovenes">
        <h2 className="contact-title">¿Tienes dudas o necesitas ayuda?</h2>
        <p className="contact-text">¡Escríbenos con confianza, estamos para apoyarte! 🙌</p>
        <div className="contact-buttons-row">
          <a
            href="https://wa.me/522722359577"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn whatsapp"
          >
            📱 WhatsApp <br /> 2722359577
          </a>
          <a
            href="https://www.instagram.com/mfcj_santacruz"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn instagram"
          >
            📸 Instagram <br /> @mfcj_santacruz
          </a>
        </div>
      </div>

    </section>
    </div>
  );
}
