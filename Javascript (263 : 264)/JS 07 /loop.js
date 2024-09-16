// for loop

for (let count = 10; count <= 20; count++) {
  //   console.log(count);
}

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// for (let num = 1; num <= 20; num++) {
//   //   console.log(num);
//   if (num % 2 === 0) {
//     console.log("even number", num);
//   } else {
//     console.log("odd", num);
//   }
// }

function printListofNumbers(start, end) {
  for (let i = start; i <= end; i += 3) {
    console.log(i);
  }
}

// printListofNumbers(5, 10);
// printListofNumbers(15, 20);

const fruits = ["apple", "mango", "banana", "orange", "pineapple"];

for (let value = 0; value < fruits.length; value++) {
  console.log(fruits[value]);
}
