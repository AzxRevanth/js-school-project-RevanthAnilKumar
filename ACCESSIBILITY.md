# Accessibility

## ARIA Roles and Attributes
- Modal: uses `role="dialog"` and `aria-modal="true"` for screen readers.
- Timeline markers: `role="button"`, `tabIndex=0`, `aria-pressed` indicates selection.
- Active timeline marker can use `aria-current="true"`.

## Focus Management
- Focus returns to the triggering marker after closing the modal.
- Focus trap inside the modal is not implemented — users can Tab out of the modal.

## Keyboard Navigation
- Timeline markers are reachable using Tab.
- Enter or Space selects a marker and opens the modal.
- Modal can close via the close button; pressing Esc is not implemented.

## Color Contrast
- Timeline markers and text meet WCAG AA contrast standards.
- White text on red background and dark text on white background are readable.
- Focus outlines are visible for keyboard navigation.

## Other Considerations
- Headings (`h2`, `h3`) are used for proper hierarchy.
- All interactive elements are focusable.
- Images in the modal should have meaningful `alt` text.
