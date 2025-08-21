import 'react';
import type { Event } from '../types';

type EventModalProps = {
    event: Event;
    onClose: () => void;
};

const EventModal: React.FC<EventModalProps> = 
({ event, onClose }) => {
    if (!event) return null;

    return (
      <div id="modal">
          <span id="modal-close" onClick={onClose}>X</span>
          <h2>{event.title}</h2>
          <h4>{event.year}</h4>
          <img src={event.imageURL} alt={event.title} />
          <p>{event.description}</p>
      </div>
    );
};

export default EventModal;