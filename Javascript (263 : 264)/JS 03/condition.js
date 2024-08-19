// basic if statement
if (true) {
  //   console.log("block will execute");
}

let number = 10;
// console.log(number >= 10);
if (number >= 10) {
  //   console.log("number is greater than 10");
}

let isAdmin = true;

if (isAdmin) {
  //   console.log("Admin is logged in");
} else {
  //   console.log("Admin is not logged in");
}

// find if the word "Enjoy" present in the new given sentence.

let nature = "Hello, i always love to enjoy the beauty of nature";

let search = "aWAYs";

// let natureLowercase = nature.toLowerCase();
// console.log(natureLowercase);
// let searchLowercase = search.toLowerCase();
// console.log(searchLowercase);
// let searchValue = natureLowercase.search(searchLowercase);

// console.log(searchValue); // positive value

// if (searchValue === -1) {
//   console.log(search, "Not found!");
// } else {
//   console.log(search, "has been found!");
// }
let searchValue = nature.toLowerCase().search(search.toLowerCase());

if (searchValue !== -1) {
  console.log(search, "has been found!");
} else {
  console.log(search, "Not found!");
}

// let searchValue = nature.toLowerCase().includes(search.toLowerCase());

// console.log(searchValue);

// if (searchValue == true) {
//   console.log(search, "has been found!");
// } else {
//   console.log(search, "Not found!");
// }

// check if - the email adddress is gmail or not!

let emailAddress = "aiman23@yahoo.com";
let checkFor = "@gmail.com";

let searchGmail = emailAddress.toLowerCase().includes(checkFor.toLowerCase());
// console.log(searchGmail);

if (searchGmail === true) {
  console.log(emailAddress, "is a valid gmail");
} else {
  console.log(emailAddress, "is not a valid gmail");
}
