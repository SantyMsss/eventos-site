// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedEvents from './components/FeaturedEvents';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [events] = useState([
    {
      id: 1,
      title: "Conferencia de Inteligencia Artificial",
      date: "15 Oct, 2023",
      location: "Auditorio Central",
      time: "4:00 PM - 6:00 PM",
      description: "Conferencia sobre los avances en IA y su impacto en la sociedad moderna.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Festival Cultural Universitario",
      date: "20 Oct, 2023",
      location: "Plaza Central",
      time: "10:00 AM - 8:00 PM",
      description: "Disfruta de música, danza, comida y expresiones artísticas de diversas culturas.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Taller de Emprendimiento",
      date: "25 Oct, 2023",
      location: "Sala de Conferencias B",
      time: "2:00 PM - 5:00 PM",
      description: "Aprende las bases para iniciar tu startup y conoce casos de éxito.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ]);

  const [categories] = useState([
    { id: 1, name: "Conferencias", icon: "fas fa-microphone" },
    { id: 2, name: "Culturales", icon: "fas fa-music" },
    { id: 3, name: "Ciencia", icon: "fas fa-flask" },
    { id: 4, name: "Deportes", icon: "fas fa-basketball-ball" },
    { id: 5, name: "Emprendimiento", icon: "fas fa-briefcase" },
    { id: 6, name: "Académicos", icon: "fas fa-graduation-cap" }
  ]);

  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedEvents events={events} />
      <Categories categories={categories} />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;