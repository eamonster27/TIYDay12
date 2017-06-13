// Create a function which accepts 2 parameters.
// Each parameter should be a different data type
// If only one argument is passed, the function uses a default value in place of the first parameter
// and accepts the 1 argument as the second parameter value

function checkArgumentType(arg0, arg1){
  if(arg1 == undefined){
    arg0 = "default";
    arg1 = 1;
  }
  return arg0 + " " + arg1;
}

console.log(checkArgumentType(10));
