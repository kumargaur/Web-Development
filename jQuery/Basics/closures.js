// Identifier lookup and the scope chain are really powerful tools for a function to access identifiers in the code.
// In fact, this lets you do something really interesting: create a function now, package it up with some variables,
// and save it to run later.
// If you have five buttons on the screen, you could write five different click handler functions,
// or you could use the same code five times with different saved values.

function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );
// 5

//Closures and Scope
const myName = 'Andrew';

function introduceMyself() {
  const you = 'student';

  function introduce() {
    console.log(`Hello, ${you}, I'm ${myName}!`);
  }

  return introduce();
}

introduceMyself();
// 'Hello, student, I'm Andrew!'
