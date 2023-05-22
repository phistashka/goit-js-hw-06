const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');




const getInputValue = ({ target }) =>
  (nameOutput.innerText = target.value ? target.value : 'Anonymous');
 
  nameInput.addEventListener('input', getInputValue );