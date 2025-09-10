// components/EventCard.js
import React from 'react';
import './styles/Events.css';

// Componente único: recibe `event` y `onDetails`.
const EventCard = ({ event, onDetails }) => {
  return (
    <div className="event-card">
      <div className="event-image">
        <img src={event.image} alt={event.title} />
      </div>
      <div className="event-content">
        <span className="event-date">{event.date}</span>
        <h3 className="event-title">{event.title}</h3>
        <div className="event-info">
          <i className="fas fa-map-marker-alt"></i>
          <span>{event.location}</span>
        </div>
        <div className="event-info">
          <i className="fas fa-clock"></i>
          <span>{event.time}</span>
        </div>
        <p>{event.description}</p>
        <button
          className="btn btn-primary"
          onClick={() => onDetails && onDetails(event)}
        >
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default EventCard;