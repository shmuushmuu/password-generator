// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //YOUR CODE GOES HERE
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";
  var upLetters = letters.toUpperCase;
  var isUpperCase = confirm("Would you like to include uppercase letters in your password?");
  var isLowerCase = confirm("Would you like to include lower case letters in your password?");
  var isSpecial = confirm("Would you like to include special characters in your password?");
  var isNumber = confirm("Would you like to include numbers in your password?");

if (isUpperCase) {
  //USE UPPER CASE LETTERS
  console.log("uppercase");
  chooseFrom += upLetters;
}

if (isLowerCase) {
  //USE LOWER CASE LETTERS
  console.log("lowercase");
}

if (isSpecial) {
  //USE SPECIAL CHARACTERS
  console.log("special");
}
if (isNumbers) {
  console.log("numbers");
  //USE NUMBERS
}

  return "";
}

//Write password to the #password inout
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
