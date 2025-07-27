// src/components/ContactSection.jsx
import React from "react";

export default function ContactSection() {
  return (
    <div data-aos="fade-up">
    <section id="contact" className="contact-section">
      <h2 className="contact-title">¿Dudas o más información?</h2>
      <p className="contact-text">¡Escríbenos y con gusto te ayudamos!</p>
      
      <div className="contact-buttons">
        <a
          href="https://wa.me/522722359577"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn whatsapp"
        >
          📱 WhatsApp: 2721656576
        </a>
        <a
          href="https://www.instagram.com/mfcj_santacruz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn instagram"
        >
          📸 Instagram: @mfcj_santacruz
        </a>
      </div>
    </section>
    </div>
  );
}
