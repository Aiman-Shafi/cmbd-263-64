const car = {
  name: "BMW",
  model: 2014,
  weight: "800kg",
  color: "red",
  isNew: false,
};

console.log(typeof car); // object
console.log(car.name, car.model, car.weight);

let person = {
  name: "israt",
  age: 25,
  isMarried: false,
  isGraduated: true,
};

// Using Dot Notation:
console.log(person.age);
console.log(person.name);

// Using Bracket Notation:
console.log(person["name"]);

// Adding & Modifying Properties
person.name = "Rakib";
person.address = "Dhanmondi"; // new property created
console.log(person);
console.log(person.address);

// Deleting properties

delete person.address;
delete car.color;

console.log(person);
console.log(car);
