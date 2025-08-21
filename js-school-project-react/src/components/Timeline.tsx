import React, { useEffect, useState } from 'react';
import EventMarker from './EventMarker';
import type { Event } from '../types';

interface TimelineProps {
  onEventSelect?: (event: Event) => void;
}

const Timeline: React.FC<TimelineProps> = ({ onEventSelect }) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/events.json')
      .then((response) => response.json())
      .then((data: Event[]) => {
        setEvents(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <>Loading...</>;
  }

  return (
    <div id="timeline">
      {events.map((event, index) => (
        <EventMarker
          key={index} 
          event={event}
          onClick={() => onEventSelect && onEventSelect(event)}
        />
      ))}
    </div>
  );
};

export default Timeline;
