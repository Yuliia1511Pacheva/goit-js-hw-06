const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');


decrBtn.addEventListener('click', decreaseCount);
incrBtn.addEventListener('click', increaseCount);
let countValue = 0;
 
function increaseCount() {
    countValue += 1;
    valueEl.textContent = countValue;
}


function decreaseCount() {
    countValue -= 1;
    valueEl.textContent = countValue;
}
