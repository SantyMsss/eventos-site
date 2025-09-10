// components/HowItWorks.js
import React from 'react';
import './styles/HowItWorks.css'; // Asegúrate de crear este archivo CSS para los estilos

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="container">
        <h2 className="section-title">¿Cómo Funciona?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Explora Eventos</h3>
            <p>Navega por todas las categorías y encuentra eventos de tu interés.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Regístrate</h3>
            <p>Crea una cuenta para guardar eventos y recibir notificaciones.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Participa</h3>
            <p>Asiste a los eventos y vive experiencias enriquecedoras.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;