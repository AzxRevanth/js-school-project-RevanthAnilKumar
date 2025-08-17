import type { Event, ModalHandler } from './types.js'

export class Modal implements ModalHandler {
  openModal(event: Event): void {
    const modal = document.getElementById('modal');
    if (!modal) return;

    modal.innerHTML = `
      <div class="modal-content">
          <span id="closeModal">X</span>
          <h2>${event.title}</h2>
          <h4>${event.year}</h4>
          <img src="${event.imageURL}" alt="${event.title}">
          <p>${event.description}</p>
      </div>
    `;

    modal.style.display = 'block';

    const closeBtn = document.getElementById('closeModal');
    closeBtn?.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
}

