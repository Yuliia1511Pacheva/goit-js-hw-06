const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', changeName);


function changeName(evt) {
   let userName = evt.currentTarget.value;  
    if (!userName) {
           outputName.textContent = "Anonymous"
    } else {
        outputName.textContent = userName;
       }
}
