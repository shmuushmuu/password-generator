// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //YOUR CODE GOES HERE
  var characters = [letters, upLetters, special, numbers];
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var special = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";
  var upLetters = letters.toUpperCase;
  var pwLengthRequest = alert("This generator makes passwords between 8 and 128 characters. How many characters do you need?");
  if (characters) {
    passwordLength < 8 || passwordLength > 128
    return pwLengthRequest;
  } else {

  }

  var isUpperCase = confirm("Would you like to include uppercase letters in your password?");
  var isLowerCase = confirm("Would you like to include lower case letters in your password?");
  var isSpecial = confirm("Would you like to include special characters in your password?");
  var isNumber = confirm("Would you like to include numbers in your password?");
  var sum = 0;
  for (var i = 1; i <= num, i++);

if (isUpperCase) {
  //USE UPPER CASE LETTERS
  console.log("uppercase");
  chooseFrom += upLetters;
}

if (isLowerCase) {
  //USE LOWER CASE LETTERS
  console.log("lowercase");
  chooseFrom += letters;
}

if (isSpecial) {
  //USE SPECIAL CHARACTERS
  console.log("special");
  chooseFrom += special;
}
if (isNumber) {
  console.log("numbers"); 
  chooseFrom += numbers;
  //USE NUMBERS
}
  console.log(password);
  return "your password here";
}

//Write password to the #password inout
function writePassword() {

  var password = generatePassword(letters, specials, numbers); {

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
