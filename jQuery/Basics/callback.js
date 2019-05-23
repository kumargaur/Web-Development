function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

function isPositive(n) {
  return n > 0;
};

each([-2, 7, 11, -4, -10], isPositive);

function logIfOdd(n) {
  if (n % 2 !== 0) {
    console.log(n);
  }
}

logIfOdd(2);
// (nothing is logged)

logIfOdd(3);
// 3


function remember(number) {
    return function() {
        return number;
    }
}

const returnedFunction = remember(5);

console.log( returnedFunction() );
// 5

// document.write("I Love my India");

//find the scope
const num1 = 5;

function functionOne() {
  const num2 = 10;

  function functionTwo(num3) {
    const num4 = 35;

    return num1 + num2 + num3 + num4;
  }

  return functionTwo(0);
}


//local and global
var globalNumber = 5;

function globalIncrementer() {
  const localNumber = 10;

  globalNumber += 1;
  return globalNumber;
}

console.log(globalIncrementer());
// 6

console.log(globalIncrementer());
// 7

console.log(globalIncrementer());
// 8

console.log(localNumber);

// ReferenceError: localNumber is not defined


//variable Shadowing
const symbol = '¥';

function displayPrice(price) {
  const symbol = '$';
  console.log(symbol + price);
}

displayPrice('80');
// '$80'


//What Will be the output
let n = 8;

function functionOne() {
  let n = 9;

  function functionTwo() {
    let n = 10;
    console.log(n);  // First log
  }

  functionTwo();

  console.log(n);  // Second log
}

functionOne();

console.log(n);  // Third log
