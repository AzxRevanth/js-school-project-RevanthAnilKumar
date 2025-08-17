export class Modal {
    openModal(event) {
        const modal = document.getElementById('modal');
        if (!modal)
            return;
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
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
}
//# sourceMappingURL=modal.js.map