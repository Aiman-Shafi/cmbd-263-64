let num1 = 20;
let num2 = 30;

// let num3 = 20;
// let num4 = 30;

// let add = num1 + num2;
// let add2 = 30 + 40;
// let add3 = num3 + num4;

// console.log(add3);

function add(num1 = 0, num2 = 10, num3 = 1) {
  console.log("add:", num1 + num2 + num3);
  console.log("subtract:", num1 - num2);
  console.log("multiply:", num1 * num2);
}

// add(20, 40, 40);
// add(50, 40, 10);
// add(50, 100, 50);
// add();

function greetUser(name = "User", time = "Morning") {
  let sentence = `hello ${name} 👋🏻, Good ${time}`;
  console.log(sentence);
}

// greetUser("Mahi", "Evening");

function searchWord(search, nature = "hello world") {
  //   let nature = "Hello Nature!";
  //   let search = "nature";

  //   let searchValue = nature.toLowerCase().search();

  //   console.log(nature.toLowerCase().search(search.toLowerCase()));

  //   if (searchValue !== -1 && search !== "") {
  //     console.log(search, "has been found!");
  //   } else {
  //     console.log(search, "Not found!");
  //   }

  let searchValue = nature.toLowerCase().includes(search.toLowerCase());

  if (searchValue == true && search !== "") {
    console.log(search, "has been found!");
  } else {
    console.log(search, "Not found!");
  }
}

// searchWord("flood", "Bangladesh is currently flood affected!");
// searchWord("current", "Bangladesh is currently flood affected!");
// searchWord("test", "Bangladesh is currently flood affected!");

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

// console.log(multiply(29, 49));
// let result = multiply(39, 49);
// console.log(result);

// arrow function
const division = (num1, num2) => {
  let addition = num1 + num2;
  return addition;
};

const checkEven = (num) => {
  if (num % 2 == 0) {
    return "Even";
  } else {
    return "Odd Number";
  }
};

// console.log(checkEven(31));
// console.log(division(20, 30));

//Immediately Invoked Function Expression

(function () {
  console.log("my name is islam");
})();

const newSum = (function (num1, num2) {
  console.log(num1 + num2);
})(20, 30);
