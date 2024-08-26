const carModel = 2013; // round number / natural number / integer number
// console.log(carModel);

// console.log(typeof carModel); // number

let decimalNumber = 100.34545778; // decimal / floating point number

let sum = decimalNumber + 400;
// console.log(sum); // 500.34545778
// console.log(sum.toFixed(2)); // 500.35

// Math.round : round number - convert a number to a Round number (.5 er upore gele next value chole ashbe -> 13.5 -> 14)

let value = 99.5;
let roundNum = Math.round(value);
// console.log("Round Num:", roundNum);

// Math.ceil  - whatever the decimal value is the result will always be on the upper level. 14.03 -> 15

let ceilNum = Math.ceil(99.08);
// console.log("Ceil Number:", ceilNum);

// Math.floor - // doesn't take the upper value how higher the decimal value is!

let floorNum = Math.floor(99.99); // 99
// console.log("Floor Number:", floorNum);

// Math.abs
// abs -> // turns negative number into positive value
let absValue = -335;
// console.log("Absolute Value:", Math.abs(absValue));

let productPrice = 400;
let VAT = 45.457777;
let newVAT = VAT.toFixed(2);
let total = productPrice + parseFloat(newVAT); // CONVERT ANY STRING DECIMAL NUMBER TO A FLOATING POINT NUMBER
// console.log(total);
// console.log(parseInt(VAT)); // CONVERT ANY DECIMAL NUMBER TO A INTEGER NUMBER

const random = Math.random(); // random number generated between 0 - 1

// DICE - 1 - 6
const DICE = Math.floor(Math.random() * 6 + 1); // 1.55 =>
console.log(DICE);

// generate 4 digit OTP
const OTP = Math.floor(Math.random() * 9000 + 1000);
// console.log(OTP);

//Find the smallest number in the list
const min = Math.min(66, 44, 35, 16, 37);
// console.log(min);

// Find the largest number in the list
const max = Math.max(66, 44, 35, 16, 37);
// console.log(max);

// Checking and Condition
let newValue = "test" * 34;
// console.log(Number.isInteger(newValue));

// console.log(Number.isNaN(newValue));
// console.log(newValue);
