// Here are the 100 most popular words in English, as totally
// stolen from here: https://gist.github.com/gravitymonkey/2406023
var commonWords = [
  "the","of","and","a","to","in","is","you","that","it","he",
  "was","for","on","are","as","with","his","they","I","at","be",
  "this","have","from","or","one","had","by","word","but","not",
  "what","all","were","we","when","your","can","said","there",
  "use","an","each","which","she","do","how","their","if","will",
  "up","other","about","out","many","then","them","these","so",
  "some","her","would","make","like","him","into","time","has",
  "look","two","more","write","go","see","number","no","way",
  "could","people","my","than","first","water","been","call",
  "who","oil","its","now","find","long","down","day","did","get",
  "come","made","may","part"
];

// Create a function that choses a random word from `commonWords` and returns it
var chooseRandomWord = function(array) {
  var index = Math.floor(Math.random() * array.length);
  console.log(array[index]);
  return array[index];
}

var chosenWord = chooseRandomWord(commonWords);
var triedCharacters = [];
var correctCharacters = [];

// Create a function that accepts a single character argument
var checkForCharacter = function(character) {

  // The function should check the `chosenWord` for that character
  var cpy_chosenWord = chosenWord.split("");
  var word_length = cpy_chosenWord.length;
  var counter = 0;

  // The function should store and console.log every letter that has been passed to this function in the `triedCharacters` array
  triedCharacters.push(character);
  console.log(character);

  for(let i = 0; i < word_length; ++i){
    console.log("Tried! " + cpy_chosenWord[i]);
    if(cpy_chosenWord[i] == character){
      // The function should only be able to return true or false a certain number of times (the number stored in the `counter` variable)
      console.log("Found! " + cpy_chosenWord[i]);
      ++counter;
      // The function should store and console.log every letter in `chosenWord` that has been passed to this function in the `correctCharacters` array
      correctCharacters.push(cpy_chosenWord[i]);
    }
  }
  // If every letter in `chosenWord` word has been passed to this function, console.log "you guessed it"
  console.log("Every letter in chosenWord has been passed to this function.")

  // The function should return true if the character is in the given word
  if(counter > 0){
    return true;
  }
  // The function should return false if the character is not in the given word
  else{
    return false;
  }
}

checkForCharacter('a');
