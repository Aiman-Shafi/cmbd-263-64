// write a function called reservseString that takes a string as an argument and returns the reverse of the string.

// input - "hello"
// output - "olleh"

function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("JavaScript Problem Solving"));
// console.log(reverseString("Hello"));

// write a function called wordExist that two string as an agrument one of them is a sentence and a word. Now the function should search the word in the sentence and returns if it exists or not.

function wordExist(searchWord, sentence) {
  let search = sentence.includes(searchWord); // true or false

  if (search) {
    return `${searchWord} is present in the sentence`;
  } else {
    return `${searchWord} not found!`;
  }
}

// console.log(wordExist("python", "python is a popular programming language"));

// Create a function called getLongWords that takes a string (sentence) and a number n. It returns an array of words that are longer than n characters.

// input -  python is a popular programming language, 8
// output - programming language

let sentence = "python is a popular programming language";

// let split = sentence.split(" ");
// console.log(split.filter((word) => word.length >= 4));

// let value = "javascript";
// console.log(value.length);

function getLongWords(sentence, n) {
  let arrayOfWords = sentence.split(" ").filter((word) => word.length >= n);
  return arrayOfWords;
}

// console.log(getLongWords(sentence, 8));

// Create a function called removeCharacter, that takes a string and a letter to remove. The function should return the sentence / string with all occurences of the specified letter removed.

// input = python , p
// output = ython

// let split = sentence.split("p").join("");
// console.log(split);

function removeCharacter(sentence, letter) {
  let split = sentence.toLowerCase().split(letter.toLowerCase()).join("");
  return split;
}

// console.log(removeCharacter(sentence, "P"));

// array methods

let arr = [1, 23, 3, 4, 5, 6, 7, 33, 45, 24, 60];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// * map
// arr.map((item) => console.log(item));

// * forEach
// arr.forEach((item) => console.log(item + 2));

// * filter
const evenNumber = arr.filter((data) => data % 2 == 0);
// console.log(evenNumber);

// remove a duplicate from an array

let fruits = ["apple", "orange", "kiwi", "kiwi", "guava", "apple"];

// fruits.forEach((item, index) => console.log(item, index));

// console.log(fruits.indexOf(fruits[1]));

let removeDuplicate = fruits.filter((item, index) => {
  return fruits.indexOf(item) === index;
});

console.log(removeDuplicate);
