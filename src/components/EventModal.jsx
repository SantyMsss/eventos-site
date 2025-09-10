// components/EventModal.jsx
import React from 'react';
import './styles/EventModal.css';

const EventModal = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="event-modal-overlay" onClick={onClose}>
      <div className="event-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>
        <div className="modal-image">
          <img src={event.image} alt={event.title} />
        </div>
        <div className="modal-content">
          <h2>{event.title}</h2>
          <p className="modal-date">{event.date} — {event.time}</p>
          <p className="modal-location"><i className="fas fa-map-marker-alt"></i> {event.location}</p>
          <p className="modal-description">{event.description}</p>
          {/* Campos adicionales de ejemplo */}
          {event.speakers && (
            <div className="modal-section">
              <h4>Ponentes</h4>
              <ul>
                {event.speakers.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
          )}

          {event.organizer && (
            <div className="modal-section">
              <h4>Organizador</h4>
              <p>{event.organizer}</p>
            </div>
          )}

          <div className="modal-actions">
            <button className="btn btn-outline" onClick={onClose}>Cerrar</button>
            <button className="btn btn-primary">Registrar asistencia</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
