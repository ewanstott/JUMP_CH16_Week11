// Try/Catch
// try {
//   console.log(myName);
// } catch (error) {
//   console.log("Something went wrong above", error);
// } finally {
//   console.log("This always runs");
// }

// Scope (make sure this is understood - var. important!)

// global scope === bad

// if 'var' is not used, you create in global scope
// iAmBad = true; //global - avoid this!

// function demo() {
//   var myName = "Ewan"; //scoped to the module -> var means only available in function
// }

// Function Scope Example
// function one() {
//   var age = 42;
//   console.log(age);

//   function two() {
//     var age = 2;
//     console.log(age);
//   }
//   two();
// }
// one();

// Let - Sharing Data between Functions -> creates a private scope

// function one() {
//   if (true) {
//     let age = 42;
//     console.log(age);
//   }
//   if (true) {
//     let age = 0;
//     console.log(age);
//   }
//   if (true) {
//     let age = 10;
//     console.log(age);
//   }
// }
// one();

// Const -> like Let, but can NOT be re-assigned. From a scope viewpoint, let and const are the same
// {
//   const name = "Ewan";
// }

// Hoisting - console.log(); before the function (you can use something before it is declared. Function are always brought to the top when code run)

// console.log(add(2, 2));

// function add(x, y) {
//   return x + y;
// }

// Const - const is a constant which means that it cannot be re-declared or re-assigned

// function bank() {
//   const balance = 100;

//   balance = 200;

//   console.log(balance);
// }
// bank();

// const me = { name: "Ewan" }; // const applies to the box, not the children here

// me.name = "Bob";

// console.log(me.name);

// (Fat) Arrow Functions

// Written as:
// () => {};

// const add = function (x, y) {
//   return x + y;
// };

// These 2 functions are identical

// const add = (x = 0, y = 0) => {
//   return x + y;
// };

// console.log(add(3, 3));

// const me = { name: "Ewan", age: 42, happy: true, location: "UK" };

// const str =
//   "His name is " +
//   me.name +
//   ", his age is: " +
//   me.age +
//   ", he lives in: " +
//   me.location;

//   template strings / template literal ($ - indicates JavaScript)
// const str2 = `His name is ${me.name}, his age is ${me.age}, he lives in: ${me.location}`;

// console.log(str, str2);

// const name = "Ewan Stott";

// console.log(name.startsWith("Ewan"));
// console.log(name.endsWith("Ewan"));

// BIG ONE: Destructuring

// const person1 = {
//   about: { name: "Ewan", age: 42, happy: true, location: "UK" },
// };

// // Object Destructuing
// const { name: n, age: a, location: l } = person1.about;

// console.log(`His name is ${n}, his age is ${a}, he lives in: ${l}`);

// Destructuring Arrays

// const cols = ["red", "blue", "green"];

// const [col1] = cols;

// console.log(col1);

// Flat Method
// const multiDimArray = [1, 2, 3, [4, 5, 6], 7, 8, 9];

// console.log(multiDimArray.flat());

// Reduce method
// const prices = [100, 200, 300, 400, 500];
// console.log(
//   prices.reduce((acc, value) => {
//     return acc + value;
//   })
// );

// // Long hand version
// let acc = 0;
// prices.forEach((element) => {
//   acc = acc + element;
// });
// console.log(acc);

// dynamic keys

// const obj = {};

// obj.name = "Ewan";
// const key = "age";
// obj["key"] = 32;

// console.log(obj);
// const obj = {};

// for (let i = o; i < 50; i++) {
//   obj[`item_${i}`] = Math.random();
// }
// console.log(obj);

let name = "Ewan";

let copy = name;

copy = "Bob";

console.log(name, copy, name === copy);
