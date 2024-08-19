// **
// console.log(3 ** 2); // 3 x 3 = 9
// console.log(2 ** 3); // 2 x 2 x 2 = 8
// console.log(10 ** 3); // 10 x 10 x 10 = 1000

// % - MODULUS operator

// console.log(50 % 9);

// ++ - increment
let add = 20;
add++; // increase by 1 => 21
add++;
add++;
add++;
console.log(add); // 24

// -- - decrement
add--; // decrease by 1 => 23
add--;
add--;
add--;
add--;
console.log(add);

// +=
let number = 24;
// number = number + number;
// number += number;
console.log(number);

// -=
number -= number;
console.log(number);

// *=
let age = 45;
// age = age * age;
age *= age;
console.log(age);

// ==
let marks = 200;

console.log(marks == 100); // true - equal
console.log(marks == 300); // false - equal
console.log(marks != 200); // true - not equal

// ===
console.log("===", marks === 200); // true - equal

let value = "45";

console.log("value", value === 45); // === strict equality

// < and >

console.log(10 < 20); // true
console.log(10 > 20); // false
console.log(10 <= 20); // true
console.log(10 >= 20); // false

console.log(20 >= 20); // true

// let text1 = "A";
// let text2 = "B";
// let result = text1 < text2;
// console.log("A" >= "B");
let text1 = "John";
let text2 = "Doe";
let text3 = text1 + " " + text2;

console.log(text3);

// Following the apporach of BODMAS

let calculate = 24 + (34 * 3) / 10; // wrong approach
console.log(calculate); // result = 334.2
// according to the order of precedence javascript will do the multiplication
// first then division after that addition in the end subsctration where
// we won't have the correct results we are looking for

calculate = ((24 + 34) * 3) / 10; // best approach for correct outcomes
console.log(calculate); // result = 17.4
