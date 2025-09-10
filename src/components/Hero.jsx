// components/Hero.js
import React, { useState } from 'react';
import './styles/Hero.css'; // Asegúrate de crear este archivo CSS para los estilos

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      alert(`Buscando: ${searchTerm}`);
      setSearchTerm('');
    } else {
      alert('Por favor, ingresa un término de búsqueda');
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <h1>Encuentra los mejores eventos universitarios</h1>
        <p>Conferencias, talleres, actividades culturales y mucho más. ¡No te pierdas nada de lo que pasa en tu universidad!</p>
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Buscar eventos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            <i className="fas fa-search"></i> Buscar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;