const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', changeName);


function changeName(evt) {
   let userName = evt.currentTarget.value.trim();  
    if (!userName) {
           outputName.textContent = "Anonymous"
    } else {
        outputName.textContent = userName;
       }
}
