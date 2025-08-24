import 'react';
import type { Event } from '../types';
import { useEffect, useRef } from 'react';

type EventModalProps = {
    event: Event;
    onClose: () => void;
    triggerElement?: HTMLElement;
};

const EventModal: React.FC<EventModalProps> = 
({ event, onClose, triggerElement }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if(closeButtonRef.current) {
            closeButtonRef.current.focus();
        }
    }, []);

    useEffect(() => {

        const modal = modalRef.current;

        const focusable = modal?.querySelectorAll<HTMLElement>(
            'a[href], area[href], button, [tabindex]:not([tabindex="-1"])'
        );

        const first = focusable && focusable.length > 0 ? focusable[0] : null;
        const last = focusable && focusable.length > 0 ? focusable[focusable.length - 1] : null;
        

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
                if (triggerElement) {
                    triggerElement.focus();
                }
                return;
            }
            if (event.key === 'Tab') {
                if (event.shiftKey) {
                    if (document.activeElement === first) {
                        event.preventDefault();
                        last?.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        event.preventDefault();
                        first?.focus();
                    }
                }
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, triggerElement]);

    if (!event) return null;

    return (
      <div id="modal"
      role='dialog'
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      ref={modalRef}
      tabIndex={0}
      >
          <button 
            id='modal-close'
            ref={closeButtonRef} 
            aria-label="Close" 
            onClick={onClose}>
                X
                </button>
          <h2 id="modal-title">{event.title}</h2>
          <h4>{event.year}</h4>
          <img src={event.imageURL} alt={event.title} />
          <p id="modal-description">{event.description}</p>
      </div>
    );
};

export default EventModal;