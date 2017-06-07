// 1.
// Answer the following question without logging the value of `numberArray`.
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( var i = 0; i < numberArray.length; i++ ) {
  numberArray[i] += 1;
}

var newNumber = numberArray[4];

// What is the value of `newNumber`?
// A:



// 2.
// Write a function `getLastItem(array)` which
// returns the last item in an array without removing the item

function getLastItem(array) {

}

console.assert( getLastItem(odds) === 11, {'message': getLastItem(odds) + ' is not the last item in ' + odds} );



// 3.
// Adding to an array using indexes
// You can add and replace the items in an array using a combination of the = assignment operator and array indexes. Try it out!

var trees = ['pine', 'cypress', 'hemlock'];

// Using only array indexes, replace 'cypress' with 'maple'
// and add the strings 'walnut', 'cherry', and 'poplar' to the `trees` array

// your code here


console.assert( trees[1] === "maple", {"message": 'The [1] index in `trees` is not "maple"'} );
console.assert( trees[3] === "maple", {"message": 'The [3] index in `trees` is not "walnut"'} );
console.assert( trees[4] === "maple", {"message": 'The [4] index in `trees` is not "cherry"'} );
console.assert( trees[5] === "maple", {"message": 'The [5] index in `trees` is not "poplar"'} );



// 4.
// Array of Arrays
// For questions 4 - 6, write in a comment the value of each variable
// without console logging the value
var twoDimensionalArray = [
  ['Arctic fox', 'Bengal fox'],
  ['Blanford\'s fox', 'Cape fox'],
  ['Corsac fox', 'Fennec fox'],
  ['Kit fox', 'Pale fox'],
  ['Rüppell\'s fox', 'Red fox'],
  ['Swift fox', 'Tibetan sand fox']
]

var foxPair = twoDimensionalArray[3];
// foxPair = <your answer>

var foxOne = twoDimensionalArray[0][0];
// foxOne = <your answer>

var foxTwo = twoDimensionalArray[4][1];
// foxTwo = <your answer>

var foxThree = twoDimensionalArray[1][1];
// foxThree = <your answer>



// 5.
// Write a function `rollCall()` with an array parameter
// which console logs:
// '<name>, present!' for every name in the array argument passed.
// Ex:
// rollCall(names);
// 'Huey, present!'
// 'Dewey, present!'
// 'Louie, present!'

var names = ['Huey', 'Dewey', 'Louie'];

// Your code here:




// 6.
// Write a function complements(array, number)
// which returns true if any two numbers in
// the array sum to the number.

function complements(){

}

var odds = [1, 3, 5, 7, 9, 11]
var ints = [-11, 40, 17, -5, -1, -11, 2, 9]

console.assert( complements(odds, 4) === true );
console.assert( complements(odds, 1) === false );
console.assert( complements(ints, -22) === true );
console.assert( complements(ints, 16) === true );
console.assert( complements(ints, 40) === false );
