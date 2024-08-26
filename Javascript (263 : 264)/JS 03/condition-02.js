// else if

// 90+ -> Grade A+
// 80+ -> Grade A
// 70 -> Grade B
// 60 -> Grade C
// 50 -> Grade D
// below ->  50 fail

const average = 39;

// if (average >= 90) {
//   console.log("Grade A+");
// } else if (average >= 80) {
//   console.log("Grade A");
// } else if (average >= 70) {
//   console.log("Grade B");
// } else if (average >= 60) {
//   console.log("Grade C");
// } else if (average >= 50) {
//   console.log("Grade D");
// } else if (average >= 40) {
//   console.log("Grade D+");
// } else {
//   console.log("fail");
// }

// LOGICAL OPEARTOR

// OR -> ||
// AND -> &&

// Logical OR

// console.log(true || true); // true
// console.log(true || false); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(true || false || false || false || false); // true

let userName = "clerk99";
let password = "3456@#$$";
let pincode = "1234";

// if (userName === "clerk100" || password === "3456@#$$" || pincode === "2345") {
//   console.log("user is logged in!");
// } else {
//   console.log("wrong credentials");
// }

let direction = "straight";

// if (direction === "left" || direction === "right") {
//   console.log("he is in the correct direction");
// } else {
//   console.log("he is in the wrong direction");
// }

// Logical AND

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false
// console.log(true && true && true && false); // false

// if (userName === "clerk99" && password === "3456@#$$" && pincode === "1234") {
//   console.log("user is logged in!");
// } else {
//   console.log("wrong credentials");
// }

let age = 40;

if (age) {
  console.log("age is here");
}

// Falsey Values In Javascript

// undefined
// null
// 0
// ""
// NaN
// false

// ternary

// condition ? true : false

let darkmode = true;

darkmode ? console.log("Dark is on! 🌚 ") : console.log("Light mode is on! ☀️");

let personAge = 39;

personAge >= 40
  ? console.log("elder person")
  : console.log("younger or less than 40");
