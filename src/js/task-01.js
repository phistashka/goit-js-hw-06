const categoriesList = document.querySelector("#categories");

const listItem = categoriesList.querySelectorAll(".item");

console.log("Number of categories:", listItem.length)

listItem.forEach ((item) => {
   
    const headingText = item.querySelector('h2').textContent;
  
   
    const itemCount = item.querySelectorAll('li').length;
  
    console.log(`Category: ${headingText}`);
    console.log(`Elements: ${itemCount}`);
  });

