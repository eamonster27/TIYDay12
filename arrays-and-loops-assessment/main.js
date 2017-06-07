// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = <your answer> 'soccer', 'baseball', 'football', 'swimming'
// total = <your answer> 'soccer', 'baseball', 'football', 'swimming'


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(str_array){
  var longest = str_array[0];
  for(var i = 1; i < str_array.length; ++i){
    if(str_array[i].length > longest.length ){
      longest = str_array[i];
    }
  }
  console.log(longest);
  return longest;
}

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:
function smallestNumber(array){
  var min = array[0];
  for(var i = 1; i < array.length; ++i){
    if(min > array[i]){
      min = array[i];
    }
  }
  console.log(min);
  return min;
}

console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:
function getEvens(array){
  var even_array = [];
  for(var i = 0; i < array.length; ++i){
    if((array[i] % 2) === 0){
      console.log(array[i]);
      even_array.push(array[i]);
    }
  }
  return even_array;
}

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(array){
  var index = 0;
  var temp;

  for(var i = (array.length - 1); i >= index; --i){
    if(index === i){
      //For testing: Outputs array contents.
      // for(var j = 0; j < array.length; ++j){
      //   console.log(array[j]);
      // }
      //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      return array;
    }
    else if((i - index) === 1){
      temp = array[index];
      array[index] = array[i];
      array[i] = temp;
      //For testing: Outputs array contents.
      // for(var k = 0; k < array.length; ++k){
      //   console.log(array[k]);
      // }
      //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
      return array;
    }
    else{
      temp = array[index];
      array[index] = array[i];
      array[i] = temp;
      ++index;
    }
  }
}

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

function sumArrayOfNumbers(array){
  var sum = 0;

  for(var i = 0; i < array.length; ++i){
    sum = sum + array[i];
  }
  return sum;
}


console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:
function numbersOver10(array){
  var overTen = [];
  for(var i = 0; i < array.length; ++i){
    if(array[i] > 10){
      overTen.push(array[i]);
    }
  }
  return overTen;
}

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

function numbersOverX(array, number){
  var overX = [];
  for(var i = 0; i < array.length; ++i){
    if(array[i] > number){
      overX.push(array[i]);
    }
  }
  return overX;
}

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:
function joinArrays(arrArrays){
  for(var i = 1; i < arrArrays.length; ++i){
    for(var j = 0; j < arrArrays[i].length; ++j){
      arrArrays[0].push(arrArrays[i][j]);
    }
  }
  return arrArrays[0];
}

console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = <your answer> ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = <your answer> 'Will'

var instructorTwo = instructors[0][1];
// instructorTwo = <your answer> 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = <your answer> 'Brit'
