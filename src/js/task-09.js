const button = document.querySelector('.change-color');
const body = document.querySelector('body');
const textEl = document.querySelector('.color');

button.addEventListener("click", onClick);

function onClick(evt) {
  body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = (getRandomHexColor())
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 