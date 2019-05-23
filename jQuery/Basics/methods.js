function sayHello () {
  console.log('Hi there!');
}

const developer = {
  name: 'Andrew'
};

//Invoking Function
{
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  }
}

developer.sayHello(); //Function invoking
// 'Hi there!'

developer['sayHello'](); // Method invoking
// 'Hi there!'

//Passing Arguments into methods
const developer = {
  name: 'Andrew',
  sayHello: function () {
    console.log('Hi there!');
  },
  favoriteLanguage: function (language) {
    console.log(`My favorite programming language is ${language}`);
  }
};


developer.favoriteLanguage('JavaScript');
// My favorite programming language is JavaScript'

//Quiz
const myArray = [ function alerter() { alert('Hello!'); } ];


//calling Method by property name
const greeter = {
  greet: function sayHello() {
    console.log('Hello!');
  }
};

greeter.greet();

// 'Hello!'


//A Method Can Access the Object it was Called On

// Using this, methods can directly access the object that it is called on.

const triangle = {
  type: 'scalene',
  identify: function () {
    console.log(`This is a ${this.type} triangle.`);
  }
};

triangle.identify();

// 'This is a scalene triangle.'
