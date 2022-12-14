const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector("#click-btn");
const colorName = document.querySelector(".color-name");


btn.addEventListener('click', () => {

  let hexColor = '#';
  for (let i = 0; i < 6; i++) {
    random = hex[Math.floor(Math.random() * hex.length)];
    hexColor += random;
  }
  colorName.innerText = hexColor;
  document.body.style.backgroundColor = `${hexColor}`;
  
})
