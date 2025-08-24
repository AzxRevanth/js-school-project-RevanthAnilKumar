import { Modal } from './modal.js';
const modal = new Modal();
export function renderTimeline(data) {
    const timeline = document.getElementById("timeline");
    if (!timeline)
        return;
    timeline.innerHTML = "";
    data.forEach(element => {
        const item = document.createElement("div");
        item.classList.add("timeline-item");
        item.innerHTML = `
      <article>
        <header>${element.title}</header>
        <h3>${element.year}</h3>
        <img src="${element.imageURL}" alt="${element.title}" />
        <p>${element.shortDescription}</p>
      </article>
    `;
        item.addEventListener("click", () => {
            modal.openModal(element);
        });
        timeline.appendChild(item);
    });
}
//# sourceMappingURL=renderer.js.map