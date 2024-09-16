const allItems = [
  "apple",
  "mango",
  "banana",
  20,
  40,
  true,
  false,
  { name: "shahinur", age: 20 },
];

// console.log(allItems);
// console.log(allItems[7].name); // acces data in an array
// console.log(allItems.length); // items in an array

// array methods
const fruits = ["apple", "mango", "banana"];

// push - add item to the last position
fruits.push("orange");
// console.log(fruits);

// pop - remove item from the last positon
fruits.pop();
// console.log(fruits);

// shift - remove item from the first positon
fruits.shift();
// console.log(fruits);

// unshift - add item to the first position
fruits.unshift("pineapple");
// console.log(fruits);

let moreFruits = ["kiwi", "grapes"];
// concat - merge two or more arrays
const newFruits = fruits.concat(moreFruits);
// const newFruits = [fruits + moreFruits]; // wrong approach
// console.log(newFruits);

let animals = ["cat", "dog", "lion", "cow", "zebra"];

// slice method
let slice = animals.slice(1, 3);
console.log(slice);

// splice(startIndex, deleteCount, item1, item2)
let splice = animals.splice(3, 0, "fox", "tiger", "bear");
console.log(animals);

// sorting
animals.sort(); // a-z
animals.reverse(); // z-a
console.log(animals);
