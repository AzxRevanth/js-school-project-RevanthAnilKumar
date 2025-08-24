# Timeline App

A simple timeline application built with React and TypeScript.

## Features
- Displays events in a timeline view.
- Click or keyboard-select an event to view details in a modal.
- Responsive design for mobile, tablet, and desktop.
- Accessible for users with disabilities (WCAG compliant).

## Accessibility
- **ARIA roles and attributes**
  - Modal uses `role="dialog"` and `aria-modal="true"`.
  - Active timeline marker uses `aria-current="true"`.
- **Focus management**
  - Focus returns to the triggering timeline marker after closing modal.
  - Focus trap keeps keyboard focus inside the modal when open.
- **Keyboard navigation**
  - Timeline markers are reachable using Tab.
  - Enter/Space selects a marker.
  - Modal can be closed with Esc key.
- **Color contrast**
  - Meets WCAG AA standards.
  - Focus outlines visible on all interactive elements.
- **Other**
  - Proper heading hierarchy.
  - All interactive elements are focusable.
  - Images include meaningful `alt` text.

