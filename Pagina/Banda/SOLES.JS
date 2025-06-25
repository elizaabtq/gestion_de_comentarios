 const icons = [
  "fas fa-trumpet", "fas fa-trombone", "fas fa-flute", "fas fa-music",
  "fas fa-music", "fas fa-lyre", "fas fa-drum", "fas fa-drum-steelpan",
  "fas fa-drum", "fas fa-drum", "fas fa-saxophone", "fas fa-saxophone"
];

const names = [
  "Guitarra", "Trompeta", "Saxofón", "Flauta", "Batería", "Campanas", "Tuba", "Micrófono", "Auriculares", "Violín"
];

const videos = [
  "https://www.youtube.com/embed/2vjPBrBU-TM", "https://www.youtube.com/embed/9aGO5-q9DzY",
  "https://www.youtube.com/embed/9AUo0rOj6bs", "https://www.youtube.com/embed/q5kXcVHTFx8",
  "https://www.youtube.com/embed/3lTuH08pJiY", "https://www.youtube.com/embed/lFqhd-qWwhY",
  "https://www.youtube.com/embed/4kby62V3bT4", "https://www.youtube.com/embed/hpIM7uG7sZo",
  "https://www.youtube.com/embed/N7zmcEpYQ3g", "https://www.youtube.com/embed/B9X3CgqWQ78"
];

const container = document.getElementById("circle-container");
const display = document.getElementById("center-display");
const displayIcon = display.querySelector("i");
const displayName = display.querySelector("h2");
const cardContainer = document.getElementById("cards-container");

const radius = 200;
const iconElements = [];
let selectedIndex = 0;
let expandedCard = null;

icons.forEach((iconClass, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "icon-wrapper";

  const icon = document.createElement("div");
  icon.className = "icon";
  icon.innerHTML = `<i class="${iconClass}"></i>`;
  wrapper.appendChild(icon);
  container.appendChild(wrapper);
  iconElements.push(icon);
});

function positionIcons() {
  iconElements.forEach((el, i) => {
    const angle = (i / iconElements.length) * 2 * Math.PI;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    el.parentElement.style.left = `${250 + x}px`;
    el.parentElement.style.top = `${250 + y}px`;
  });
}

function updateSelection() {
  iconElements.forEach(el => el.classList.remove("active"));
  const currentIcon = iconElements[selectedIndex];
  currentIcon.classList.add("active");

  displayIcon.className = currentIcon.querySelector("i").className;
  displayName.textContent = names[selectedIndex];
}

function toggleExpandCard() {
  if (expandedCard) {
    cardContainer.removeChild(expandedCard);
    expandedCard = null;
    return;
  }

  const card = document.createElement("div");
  card.className = "card expanded";

  const content = document.createElement("div");
  content.className = "content";
  content.innerHTML = `<h2>${names[selectedIndex]}</h2><p>Información sobre el instrumento ${names[selectedIndex]}.</p>`;

  const video = document.createElement("div");
  video.className = "video";
  video.innerHTML = `<iframe src="${videos[selectedIndex]}" allowfullscreen></iframe>`;

  card.appendChild(content);
  card.appendChild(video);
  cardContainer.appendChild(card);
  expandedCard = card;
}

function autoRotate() {
  selectedIndex = (selectedIndex + 1) % icons.length;
  updateSelection();
}

positionIcons();
updateSelection();
setInterval(autoRotate, 3000); // cada 3 segundos

