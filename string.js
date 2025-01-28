let str = "Helllo";
console.log(str);
console.log(typeof str);
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let text = "Hello world";
console.log(text.charAt(0));
console.log(text.charAt(7));
console.log(text.charAt(1));
console.log(text[0]);

// charCodeAt()
// console.log(text.charCodeAt(7))
// console.log(text.charCodeAt(1))

//at
console.log(text.at(2)); // l
console.log(text.at(0)); //h

// Concat()
let t1 = "Hello";
let t2 = "World";
console.log(t1.concat(t2));
let t3 = " ";
console.log(t1.concat(t3, t2));

// slice()
console.log(text.slice(-11, -6)); // string counts forward and not backward
console.log(text.slice(5));
console.log(text.slice(7));
console.log(text.slice(7, 12));
console.log(text.slice(0));

// nb slice and substring works the same way but substring does not allow negative

// substring()
console.log(text.substring(7, 12));
console.log(text.substring(0));
console.log(text.substring(3));

// sub str
const storeSubstr = text.substr(0, 4);
console.log(storeSubstr);

// Replace()
let story =
  "Daniel is a boy and he is 5 years old and Daniel loves playing football";
let story2 = story.replace("Daniel", "John");
console.log(story2);
let newStory = story.replace(/Daniel/g, "John");
console.log(newStory);
const greet = "Hello world";
console.log(greet.replace(/hello/i, "blessing"));

// let newStory = story.replaceAll("Daniel", "John")
// console.log(newStory)

// split is used to change array to string

text = "Hello world";

// console.log(text.split)
console.log(text.split(" "));

// trim()
let space = "    Hello       ";
console.log(space.length);
console.log(space.trim());
console.log(space.trim().length);

const toReverse = "Hello world";
let splitted = toReverse.split("");
let reversed = splitted.reverse();
let joined = reversed.join("");
console.log(joined);

// for in loops
let myName = "Hakeem";
for (let x in myName) {
  // console.log(x)
  console.log(myName[x]);
}

function reverser(value) {
  const splitted = value.split("");
  const reversed = splitted.reverse();
  const joined = reversed.join("");

  return joined;
}
console.log(reverser("madam"));
console.log(reverser("Blessing"));

// function fileExtension(value){
const value = "index.html";
const isValid = value.includes(".");
console.log(isValid);
const dot = value.indexOf(".") + 1;
console.log(dot);

const sliced = value.slice(dot);
console.log(sliced);

function fileExtension(fileName) {
  const included = fileName.includes(".");

  if (included) {
    const dot = fileName.indexOf(".") + 1;
    const sliced = fileName.slice(dot);
    return sliced;
  } else {
    console.log("Error: valid file name");
  }
}
