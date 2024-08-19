// variables

// 1. var
// 2. let
// 3. const

// using var

// var age, person, job, title;

number = 20;
var number;

// console.log(number);

// using let

// let age, job, title;

let job = "Programmer";
job = "Backend Developer"; // we can reuse variables, they are mutable/changeable
job = "Frontend Developer";

// console.log(job);

// person = "Nadim"; // ReferenceError: Cannot access 'person' before initialization
// let person;

// from the above example we can see that var works outside the scope where let does not.

// example with var
var carModel = 2039;

{
  var carModel = 2012;
  console.log(carModel);
}

console.log(carModel);

// example with let
let carName = "BMW"; // global

{
  let carName = "Audi"; // local variable
  console.log(carName);
}

console.log(carName);

// example with const
const userName = "Nadim";
console.log(userName);

// userName = "Abul hossain"; // TypeError: Assignment to constant variable.
