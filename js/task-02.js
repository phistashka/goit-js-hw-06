const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const parentElement = document.querySelector('ul');

ingredients.forEach((ingredient) => {

  const listItem = document.createElement('li');

 
  listItem.textContent = ingredient;


  listItem.classList.add('item');

  
  parentElement.appendChild(listItem);
});