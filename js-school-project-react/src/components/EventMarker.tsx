import React from 'react';
import { type Event } from '../types';

interface EventMarkerProps {
  event: Event;
  onClick?: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, onClick }) => {
  return (
    <div className="timeline-item" onClick={onClick} style={{ cursor: onClick ? 'pointer' : 'default' }}>
      <h3>{event.title}</h3>
      <p>{event.year}</p>
      <p>{event.shortDescription}</p>
    </div>
  );
};

export default EventMarker;
