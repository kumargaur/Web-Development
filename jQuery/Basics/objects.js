jQuery

//About Objects

//creating objects
// Using literal notation:

const myObject = {};

// Using the Object() constructor function:

const myObject = new Object();

//modifiying properties
const cat = {
  age: 2,
  name: 'Bailey',
  meow: function () {
    console.log('Meow!');
  },
  greet: function (name) {
    console.log(`Hello ${name}`);
  }
};

//Adding propertiesconst printer = {};

printer.on = true;
printer.mode = 'black and white';

printer['remainingSheets'] = 168;

printer.print = function () {
  console.log('The printer is printing!');
};

//After this it will look like
{
  on: true,
  mode: 'black and white',
  remainingSheets: 168,
  print: function () {
    console.log('The printer is printing!');
  }
}

//Removing Properties
delete printer.mode;

// true
printer.mode;

// undefined


//Note
// Recall that since objects are mutable,
// not only can we modify existing properties (or even add new ones)
//  we can also delete properties from objects.

//Passing Arguments
//primitives
function changeToEight(n) {
  n = 8; // whatever n was, it is now 8... but only in this function!
}

let n = 7;

changeToEight(n);

console.log(n);
// 7

//objects
let originalObject = {
  favoriteColor: 'red'
};

function setToBlue(object) {
  object.favoriteColor = 'blue';
}

setToBlue(originalObject);

originalObject.favoriteColor;
// 'blue'
// Well, since objects in JavaScript are passed by reference,
// if we make changes to that reference,
//  we're actually directly modifying the original object itself!

//
//Comaparing objects

const parrot = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

const pigeon = {
  group: 'bird',
  feathers: true,
  chirp: function () {
    console.log('Chirp chirp!');
  }
};

parrot === pigeon;

// false
// the expression will only return true when comparing two references to exactly the same object.
//  Using what we now know about passing objects, let's confirm this.

const myBird = parrot;

myBird === parrot;

// true
