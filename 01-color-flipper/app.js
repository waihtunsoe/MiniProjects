const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "cyan",
  "azure",
  "blue",
  "violet",
  " magenta",
];

const btn = document.querySelector("#click-btn");
const colorName = document.querySelector(".color-name");

btn.addEventListener("click", () => {
  randomColor = colors[Math.floor(Math.random() * colors.length)]
  colorName.innerText = randomColor
  document.body.style.backgroundColor = randomColor;
});
