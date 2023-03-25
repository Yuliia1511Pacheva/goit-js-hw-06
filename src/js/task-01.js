const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);
const listItems = [...categoriesEl.children];
// console.log(listItems);


const quantityOfCateg = categoriesEl.children.length;
console.log(`Number of categories:`, quantityOfCateg);

listItems.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});