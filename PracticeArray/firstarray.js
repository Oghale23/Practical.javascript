const Colour = [
  "red",
  "blue",
  "pink",
  "yellow",
  "purple",
  "brown",
  "white",
  "ash",
  "green",
  "black",
];

Colour[0];
const firstColour = Colour[0];
console.log(firstColour);


colour.shift()
colour.unshift("purple ")
console.log(colour)

Colour[0];
const middleColour = Colour[4];
console.log(middleColour);

Colour[0];
const lastColour = Colour[9];
console.log(lastColour);

// create an array with 5 numbers , update(change) the value of the first and the fourth element then print updated elements
const numbers = [1, 2, 3, 4, 5];
numbers[0] = 5;
numbers[3] = 9;
console.log(numbers);

const fruits = ["apple", "banana", "cherry"];
const fruit2 = new Array("grape", "orange");
console.log(fruit2);

delete fruits[2];
delete fruits[0];
console.log(fruits);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArr = arr1.concat(arr2);
console.log(newArr.length);
console.log(newArr);

const letters = ["a", "b", "c", "d", "e"];

const joinLetters = letters.join("* ");
console.log(joinLetters);
// root.innerHTML = joinLetters
