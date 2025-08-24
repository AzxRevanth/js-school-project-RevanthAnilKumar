const timeline = document.getElementById('timeline');
const modalID = document.getElementById('modal');

let data = [];
let currentIndex = 0;

async function getData(){
    const url = 'events.json';
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    data = await response.json();
    console.log(data)

    renderTimeline(data)
    // return data;
}

getData();


function renderTimeline(data) {

  data.forEach(element => {
    const item = document.createElement('div');
    item.classList.add('timeline-item');
    item.innerHTML = `
      <article>
        <header>${element.title}</header>
        <h3>${element.year}</h3>
        <img src="${element.imageURL}" alt="${element.title}" />
        <p>${element.shortDescription}</p>
      </article>
    `;
    item.addEventListener('click', () => {
      openModal(element);
    });
    timeline.appendChild(item);
  });
}

function openModal(event) {
    modalID.innerHTML = `
        <div class="modal-content">
            <span id="closeModal"> X </span>
            <h2>${event.title}</h2>
            <h4>${event.year}</h4>
            <img src="${event.imageURL}" alt="${event.title}">
            <p>${event.description}</p>
        </div>
    `;
    modalID.style.display = 'block';

    document.getElementById('closeModal').addEventListener('click', () => {
        modalID.style.display = 'none';
    });
}

