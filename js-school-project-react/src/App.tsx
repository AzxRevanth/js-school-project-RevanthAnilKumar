import React, { useState } from 'react';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import type { Event } from './types';
import './App.css'; 
import Header from './components/Header';


const App: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <>
      <Header />
      <Timeline onEventSelect={(event: Event) => setSelectedEvent(event)} />
      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </>
  );
};

export default App;
