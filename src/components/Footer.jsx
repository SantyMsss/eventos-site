// components/Footer.js
import React, { useState } from 'react';
import './styles/Footer.css'; // Asegúrate de crear este archivo CSS para los estilos

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      alert(`Gracias por suscribirte con: ${email}`);
      setEmail('');
    } else {
      alert('Por favor, ingresa tu correo electrónico');
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Eventos Uceva</h3>
            <p>La plataforma líder para descubrir y promocionar eventos en el ámbito universitario.</p>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="footer-column">
            <h3>Enlaces Rápidos</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Eventos</a></li>
              <li><a href="#">Categorías</a></li>
              <li><a href="#">Calendario</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Contacto</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> Universidad Nacional, Ciudad</li>
              <li><i className="fas fa-phone"></i> (123) 456-7890</li>
              <li><i className="fas fa-envelope"></i> info@eventosuniversitarios.edu</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Boletín Informativo</h3>
            <p>Suscríbete para recibir notificaciones de próximos eventos.</p>
            <form onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Suscribirse</button>
            </form>
          </div>
        </div>
        <div className="copyright">
          <p>&copy; 2023 Eventos Uceva. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;