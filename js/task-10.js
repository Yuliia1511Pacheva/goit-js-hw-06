const inputEl = document.querySelector('input');
console.dir(inputEl);
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

buttonCreateEl.addEventListener('click', createBoxes);
buttonDestroyEl.addEventListener('click', destroyCounts);



function createBoxes() {
  let step = 0;
  let boxList = [];
  for (let i = 0; i < inputEl.value; i += 1){
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    step += 10;
    box.style.width = `${step+20}px`;
    box.style.height = `${step+20}px`;
    console.log(box);
    boxList.push(box);
  }
  boxContainer.prepend(...boxList);
}
// createBoxes(inputEl.value);

function destroyCounts() {
  inputEl.value = "";
  boxContainer.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
