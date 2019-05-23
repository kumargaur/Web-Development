typeof "hello" // returns "string"
typeof true // returns "boolean"
typeof [1, 2, 3] // returns "object" (Arrays are a type of object)
typeof function hello() { } // returns "function"

//quiz
var umbrella = {
  color: "pink",
  isOpen: false,
  open: function() {
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};

// Remember to put all of your object's properties and methods inside curly braces:

//declaring an object in object-literal notation
var sister = {
  name: "Sarah",
  age: 23,
  parents: [ "alice", "andy" ],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true
};

// two equivalent ways to use the key to return its value
console.log(sister["parents"]); // returns [ "alice", "andy" ]
console.log(sister.parents); // also returns ["alice", "andy"]
