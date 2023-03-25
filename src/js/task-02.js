const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeItems = elements => {
    return elements.map(el => {
        const itemEl = document.createElement("li");
        itemEl.classList.add("item");
        itemEl.textContent = el;
        console.log(itemEl);
        return itemEl;
    })
};

const items = makeItems(ingredients);
const ulEl = document.querySelector("#ingredients");
ulEl.prepend(...items);