var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts[0]); // "glazed" is the first element in the `donuts` array

var donuts = ["glazed", "powdered", "sprinkled"];
console.log(donuts.length);

//quiz What is the length of the following inventory array?
var inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];

donuts.push("powdered"); // pushes "powdered" onto the end of the `donuts` array

// Notice, with the push() method you need to pass the value of the element you want to add to the end of the array.
// Also, the push() method returns the length of the array after an element has been added

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled", "powdered"];

donuts.pop(); // pops "powdered" off the end of the `donuts` array
donuts.pop(); // pops "sprinkled" off the end of the `donuts` array
donuts.pop(); // pops "cinnamon sugar" off the end of the `donuts` array


// splice() is another handy method that allows you to add and remove elements from anywhere within an array.

var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
// removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
//
// he first argument represents the starting index from where you want to change the array,
// the second argument represents the numbers of elements you want to remove,
// and the remaining arguments represent the elements you want to add.

//quiz
var donuts = ["cookies", "cinnamon sugar", "creme de leche"];

donuts.splice(-2, 0, "chocolate frosted", "glazed");

// The forEach() method gives you an alternative way to iterate over an array,
// and manipulate each element in the array with an inline function expression.

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

//Quiz
words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});


//Map Method

var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});
