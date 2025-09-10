// components/Header.js
import React from 'react';
import './styles/Header.css'; // Asegúrate de crear este archivo CSS para los estilos 

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          <span>Eventos Universitarios</span>
        </div>
        <nav>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Eventos</a></li>
            <li><a href="#">Categorías</a></li>
            <li><a href="#">Calendario</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="btn btn-outline">Iniciar Sesión</button>
          <button className="btn btn-primary">Registrarse</button>
        </div>
      </div>
    </header>
  );
};

export default Header;