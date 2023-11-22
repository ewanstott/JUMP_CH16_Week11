// Reference Vs Value In JavaScript

// Passing by Value:
// Think of passing by value like handing a copy of a recipe to a friend. You keep the original recipe, and your friend gets a copy.
// If you spill coffee on your copy or make changes to the ingredients, it doesn't affect your friend's copy.

// Passing by Reference (Sort of):
// Think of passing by reference like sharing a cookbook. You and your friend both have the same cookbook.
// If you make a note in the cookbook or add a new recipe, it's reflected in both your and your friend's copies.

// Pass by value (a = Variable & 10 = Value)
// Here, the value of '10' is coped to 'a'
// let a = 10;
// let b = "Hi";
// let c = a;
// Example of pass by reference:
// c = c + 1; //here c = 11, becuase it references its own copy of a = 10. 'a' & 'c' are completely distict from one another.

// console.log(a, b, c);

// 1. Primitive Types: When you pass a primitive data type (like numbers, strings, booleans) to a function, it behaves like pass by value.
// 1. The function receives a copy of the primitive value, and modifications inside the function do not affect the original value.

// array example
// In JS, anything that is not a primitive data type (like numbers, strings, booleans)) i.e. arrays, objects, will be passed of REFERENCE
let aa = 10;
let bb = "Hi";
let cc = [1, 2];
let dd = cc;
// dd.push(3); // both cc & dd get this new value of 3
dd = [3, 4, 5]; // Here we are overwriting the value of d (assigning the value on the right to the left). Since we are overwriting the value of dd, we are not changing the value of cc.

// console.log(aa, bb, cc, dd);

// EXAMPLE 1
// let a = 10;
// let b = "Hi";
// let c = [1, 2];
// let d = c;

// console.log(`a = ${a}`);
// console.log(`b = ${b}`);
// console.log(`c = ${c}`);
// console.log(`d = ${d}`);

// Passing by reference: ??
// let c = [1, 2]; // in memory, this is 0x01
// let d = [1, 2]; // in memory, this is 0x02

// Function example

// let c = [1, 2]; //0x01
// console.log(`c = ${c}`);
// add(c, 3);
// console.log(`c = ${c}`);

// function add(array, element) {
//   // (0x01, 3)
//   //This function is taking the value of the variable

//   array.push(element);
// }

// SIMPLE EXAMPLE

// Passing by Value:
// Think of passing by value like handing a copy of a recipe to a friend. You keep the original recipe, and your friend gets a copy. If you spill coffee on your copy or make changes to the ingredients, it doesn't affect your friend's copy.

// In JavaScript, primitives (like numbers, strings, booleans) are passed by value. When you pass a primitive to a function, you're working with a copy of the actual value.

let x = 5;

function modifyValue(value) {
  value = 10;
}

modifyValue(x);
console.log(x);

// Passing by Reference (Sort of):
// Think of passing by reference like sharing a cookbook. You and your friend both have the same cookbook. If you make a note in the cookbook or add a new recipe, it's reflected in both your and your friend's copies.

// In JavaScript, objects and arrays are passed by value too, but the value is a reference (memory address) to the actual data. If you modify the data (like adding an item to an array) inside a function, those changes are reflected outside the function.

let array = [1, 2, 3];

function modifyArray(arr) {
  arr.push(4);
}

modifyArray(array);
console.log(array); // Output: [1, 2, 3, 4] (modified)
