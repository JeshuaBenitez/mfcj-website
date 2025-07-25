import React from "react";

export default function InfoSeccion() {
  return (
    <section className="info-section">
      <div className="info-section-overlay"></div>
      <div className="info-content" data-aos="fade-up" data-aos-duration="1000">
        <h2>¿Quiénes somos?</h2>
        <p>
          Somos el Movimiento Familiar Cristiano Juvenil del Sector Santa Cruz, una comunidad
          que acompaña a adolescentes y jóvenes en su crecimiento personal y espiritual.
          Fomentamos los valores cristianos a través de experiencias transformadoras,
          actividades recreativas, momentos de reflexión, oración y convivencia.
        </p>
      </div>
    </section>
  );
}
