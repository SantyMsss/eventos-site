// components/Categories.js
import React from 'react';
import './styles/Categories.css'; // Asegúrate de crear este archivo CSS para los estilos

const Categories = ({ categories }) => {
  const handleCategoryClick = (categoryName) => {
    alert(`Mostrando eventos de la categoría: ${categoryName}`);
  };

  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">Explora por Categorías</h2>
        <div className="categories-grid">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => handleCategoryClick(category.name)}
            >
              <i className={category.icon}></i>
              <h3>{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;