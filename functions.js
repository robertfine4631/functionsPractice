///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum (x, y) {
  return x + y;
}

console.log(sum);
console.log("use numbers");


// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg (x, y, z) {
  return (x + y + z)/3;
}

console.log(avg)
console.log("use numbers");


// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (item) {
  return item.length;
}

console.log(getLength);
console.log("use a string");


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.


function greaterThan (x, y) {
  if ( y > x ) {
    return "true";
  }
  else {
    return "false";
  }
}

console.log(greaterThan);
console.log("use a number");
// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet (name) {
  return 'Hello, ' + name + '!';
}

console.log(greet);
console.log("use a string");


// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"


function madlib (properNoun, adjective, color, object) {
  return properNoun + " is a " + adjective + " developer. His favorite item is a " + color + " " +object + " that he carries with him everyday!";
}

console.log(madlib);
console.log("use strings that correnspond with the parts of speech in the params");

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////