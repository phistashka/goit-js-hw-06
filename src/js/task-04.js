let counterValue = 0; 
const counter = document.getElementById('value');


const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');


const onClickDecrementBtn = (event) => {
        counterValue -= 1;
        counter.textContent = counterValue;
      
      };
      const onClickIncrementBtn = (event) => {
        counterValue += 1;
        counter.textContent = counterValue;
      
      };
  incrementBtn.addEventListener('click', onClickIncrementBtn);
  decrementBtn.addEventListener('click', onClickDecrementBtn);
