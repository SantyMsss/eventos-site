// components/FeaturedEvents.js
import React, { useState } from 'react';
import EventCard from './EventCard';
import EventModal from './EventModal';

const FeaturedEvents = ({ events }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleDetails = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <section className="container">
      <h2 className="section-title">Eventos Destacados</h2>
      <div className="events-grid">
        {events.map(event => (
          <EventCard key={event.id} event={event} onDetails={handleDetails} />
        ))}
      </div>

      <EventModal event={selectedEvent} onClose={closeModal} />
    </section>
  );
};

export default FeaturedEvents;