//While
var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

//infinite
var x = 0;

while (x < 1) {
  console.log('Oops! x is never incremented from 0, so i will ALWAYS be less than 1');
}

//for loop
for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}

// /Nested loops
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}


//Problem Calculate the factorial using loop
