const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const parentElement = document.querySelector('ul');

const itemsRef = ingredients.map(ingredient => {

  const item = document.createElement('li');
 
 item.textContent = ingredient;
 
  item.classList.add('item');

 return item;
}
);
parentElement.append(...itemsRef);

