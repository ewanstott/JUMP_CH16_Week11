// Homework:
// Write out a fast arrow function that adds two numbers

// Traditional function expression
// const add = function (a, b) {
//   return a + b;
// };
// console.log(add(6, 6));

// // Arrow function
// const addArrow = (a, b) => a + b;
// console.log(addArrow(6, 6));

// const multiply = (x, y) => x * y;
// console.log(multiply(9, 9));

// const minus = (y, x) => y - x;
// console.log(minus(9, 3));

// 2.  Add default parameters to the above function

// const addArrow = (a = 0, b = 0) => a + b;

// 3.  Create an object that has a child object, that itself has a child object (3 levels).

// const personObject = {
//   level1: {
//     name: "Ewan",
//     age: 32,
//     level2: {
//       hobbie1: "skiing",
//       hobbie2: "mountain biking",
//       hobbie3: "guitar",
//       level3: {
//         reason1: "fun",
//         reason2: "meditative",
//         reason3: "stress-relief",
//       },
//     },
//   },
// };

// 4. Use object destructuring to pull out the parts are level 4.

// console.log(personObject.level1.level2.level3.reason1);
// console.log(personObject.level1.level2.level3.reason2);
// console.log(personObject.level1.level2.level3.reason3);

// const { reason1, reason2, reason3 } = personObject.level1.level2.level3;
// console.log(reason1, reason2, reason3);

// 5. Add a default value to the above destructuring

// const {
//   reason1 = "FitnessDefault",
//   reason2,
//   reason3,
// } = personObject.level1.level2.level3;
// console.log(reason1, reason2, reason3);

// 6.  Destructure an array

// const sports = ["hockey", "football", "rugby"];
// const [sport1, sport2, sport3] = sports;
// console.log(sport2);
// console.log(sports[1]);

// 7.  Create two objects. Add more than two keys/values to both objects.

// const personObject1 = {
//   name: "Ewan",
//   age: 32,
//   occupation: "software engineer",
//   hobbies: ["skiing", "cycling", "reading"],
//   address: {
//     line1: "12 ABC Road",
//     city: "Bristol",
//   },
// };
// const personObject2 = {
//   name: "Taylor",
//   age: 32,
//   occupation: "physio",
//   hobbies: ["snowboarding", "hiking", "cooking"],
//   address: {
//     line1: "12 ABC Road",
//     city: "Bristol",
//   },
// };

// 8. Copy all the items from the first object into the second object, use the spread operator.

// const updatedPersonObject = { ...personObject1, ...personObject2 };

// console.log(updatedPersonObject.name);
// console.log(updatedPersonObject.originalName);

// 9.  Send 5 arguments to a function and use the rest operator to group them

// function aboutMe(firstName, lastName, ...otherDetails) {
//   return otherDetails;
// }

// console.log(aboutMe("Ewan", "Stott", "Software Engineer", "Skiing", "Male"));

// 10.  Add a function to one of the objects, use the object method shorthand.

// const personObject1 = {
//   name: "Ewan",
//   age: 32,
//   occupation: "software engineer",
//   hobbies: ["skiing", "cycling", "reading"],
//   address: {
//     line1: "12 ABC Road",
//     city: "Bristol",
//   },

//   sayHi() {
//     console.log(`Hi, my name is ${this.name}!`);
//   },
// };

// personObject1.sayHi();

// 11. Scope:
// Create a function, inside the function add a second function, and again add a third function into the second function.

// function parentScope() {
//   const age = 32;
//   console.log("Parent scope - age: ", age);

//   function secondFunction() {
//     const age = 99;
//     console.log("Second function scope - age", age);

//     function thirdFunction() {
//       const age = 56;
//       console.log("Third function scope - age", age);
//     }
//     thirdFunction(); //call third function within second function
//   }
//   secondFunction(); //call second function within parent function
// }
// // call parent function
// parentScope();

// Create 3 variables.
// Define 3 the variables in the correct place so that:
// The first variable is accessible inside every function.
// The second variable is accessible inside the second and third function only.
// The third variable is accessible inside the third function only.
// Define a 4th variable inside the 3rd function. This variable should be accessible by every function (think bad!)
// Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.

function parentScope() {
  // The first variable is accessible inside every function.
  const variable1 = "Variable accessible in all functions";
  console.log("variable1:", variable1);

  // The second variable is accessible inside the second and third function only.
  function function2() {
    const variable2 = "Variable accessible in function 2 and 3 only";
    console.log("variable2:", variable2);

    // The third variable is accessible inside the third function only.
    function function3() {
      const variable3 = "Variable accessible in function 3 only";
      console.log("variable3:", variable3);

      // Define a 4th variable inside the 3rd function. This variable should be accessible by every function (think bad!)
      var variable4 = "Variable accessible in every function (bad function!)";
      console.log("variable4:", variable4);

      // Create a scope inside the 3rd function, place a variable inside it that is only accessible inside that scope.
      function scopedFunction() {
        const scopedVariable = "Scoped variable accessible in function 3 only";
        console.log("Scoped Variable:", scopedVariable);
      }
      scopedFunction();
    }
    function3();
  }
  function2();
}
parentScope();
