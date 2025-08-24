import React, { useState, useRef } from 'react';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import type { Event } from './types';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const handleEventSelect = (event: Event) => {
    setTriggerElement(document.activeElement as HTMLElement);
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
    };

  return (
    <>
      <Header />
      <Timeline onEventSelect={handleEventSelect} />
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={handleCloseModal}
          triggerElement={triggerElement ?? undefined}
        />
      )}
    </>
  );
};

export default App;
