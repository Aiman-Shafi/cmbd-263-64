// console.log("testing..");

// Destructuring

const users = ["Ashik", "fahim", "Israt", "Ashik"];

//Without Destructuring
// console.log(users[2]);
// console.log(users[0]);

const [name1, user1, user3] = users;

// console.log(user3, name1, user1);

const fruits = ["apple", "orange", "banana", "kiwi"];

const [f1, f2, f3] = fruits;

const userData = [
  { name: "Aiman", age: 34 },
  { name: "Fahim", age: 44 },
];

const [person1, person2] = userData;

// console.log(person2.name);

const userProfile = {
  username: "avatar1234",
  occupation: "frontend dev",
  age: 45,
  country: "Pakistan",
};

const userProfile2 = {
  username: "devnerd34",
  occupation: "software dev",
  age: 34,
  country: "Pakistan",
};

// console.log(userProfile.username);

const sentence = `${userProfile.username} is really good at ${userProfile.occupation}. He is from ${userProfile.country}
`;

const { occupation, username, age, country } = userProfile;

const sentence2 = `${username} is really good at ${occupation}. He is from ${country}
`;

// console.log(sentence2);

function createSentence({ username, occupation, country }) {
  const sentence2 = `${username} is really good at ${occupation}. He is from ${country}
`;
  console.log(sentence2);
}

// createSentence(userProfile2);

//spread operator
const group1 = [1, 2, 3, 4, 5, 6, 7];
const group2 = [10, 11, 23];

const combine = group1.concat(group2);
// console.log(combine);

// console.log(group1 + group2);
const group = [...group1, ...group2, ...fruits];
// console.log(group);

function add(x, y, z, m, n) {
  console.log(x + y + z);
  console.log(m, n);
}

// add(...group1);

// spread for object

const newProfile = {
  ...userProfile,
  address: "13/2 Dhanmondi",
  postCode: 1288,
};

// console.log(newProfile);

// Call Back Functions

function greet(name, showMessage) {
  showMessage();
  console.log("Hello", name);
}

function sayGoodBye() {
  console.log("Good bye...");
}

greet("Alice", sayGoodBye);

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  console.log("I'm clicked...");
});

setTimeout(() => {
  console.log("Hi.. i'm a callback..");
}, 2000);
