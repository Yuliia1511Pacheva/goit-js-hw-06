const categoriesEl = document.querySelector("#categories");
// console.log(categoriesEl);
// const listItems = categoriesEl.children;
// console.log(listItems);

// const listItems2 = document.querySelectorAll('categoriesEl.children');
// console.log(listItems2);



const items = document.querySelectorAll('#categories li.item');

const quantityOfCateg = categoriesEl.children.length;
console.log(`Number of categories:`, quantityOfCateg);

items.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});