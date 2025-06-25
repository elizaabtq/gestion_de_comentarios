const colors = [
  ["var(--purple)", "var(--blue)", "var(--green)"],
  ["var(--purple)", "var(--green)", "var(--blue)"],
  ["var(--green)", "var(--purple)", "var(--blue)"],
  ["var(--green)", "var(--blue)", "var(--purple)"],
  ["var(--blue)", "var(--green)", "var(--purple)"],
  ["var(--blue)", "var(--purple)", "var(--green)"],
];

const rainbowContainer = document.getElementById("rainbow-container");
const total = 25;
const animTime = 45;

for (let i = 1; i <= total; i++) {
  const div = document.createElement("div");
  div.classList.add("rainbow");

  const set = colors[Math.floor(Math.random() * colors.length)];
  div.style.boxShadow = `
    -130px 0 80px 40px white,
    -50px 0 50px 25px ${set[0]},
    0 0 50px 25px ${set[1]},
    50px 0 50px 25px ${set[2]},
    130px 0 80px 40px white
  `;

  const delay = -(i / total) * animTime;
  const duration = animTime - (animTime / total / 2 * i);
  div.style.animationDuration = `${duration}s`;
  div.style.animationDelay = `${delay}s`;

  rainbowContainer.appendChild(div);
}