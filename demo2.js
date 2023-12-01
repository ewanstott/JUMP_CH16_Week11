// // short circuit

// const one = true;
// const two = 100;
// const three = [];

// const result = one && two && three; //if one and two are true, box three is returned

// console.log(result);

// Short Circuiting
// if (one && two && three) {
//   //do something
// }

// Short-Circuiting with Logical AND (&&):
// With the logical AND (&&) operator, the expression stops evaluating as soon as a falsy value is encountered.

// const result = true && "hello" && 42;
// console.log(result); // 42

// In the second case, since the left operand (false) is falsy, the expression short-circuits, and the right operands are not evaluated.

// const result = false && "hello" && 42;
// console.log(result); // false

// Functions Practice

// function add(x, y) {
//   return x + y;
// }

// same as:
// const add = (x, y) => x + y;

// function multiply(a, b) {
//   return a * b;
// }

// const multiply = (a, b) => a * b;

// function minus(x, y) {
//   return x - y;
// }

// const minus = (x = 0, y = 0) => x - y;

// function divide(a, b) {
//   return a / b;
// }

// const divide = (a, b) => a / b;

// console.log(divide(123, 43));

// ternary operator
// const age = 17;
// const canVote = age >= 18 ? "Can vote" : "Cannot vote";
// console.log(canVote); // Output: "Can vote"

// EVENT LISTENER
//syntax element.addEventListner(event, function, useCapture);
