// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //YOUR CODE GOES HERE
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var specials = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";
  var upLetters = letters.toUpperCase;
  //var chooseFrom = "";
  var pwLength = prompt("This generator makes passwords between 8 and 128 characters. How many characters do you need?");

  for (pwLength; pwLength < 8 || pwLength > 128;) {
    alert("Please request a length between 8 and 128 characers.");
    var pwLength;
  }

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
  chooseFrom += letters;
}

if (isSpecial) {
  //USE SPECIAL CHARACTERS
  console.log("specials");
  chooseFrom += specials;
}
if (isNumber) {
  console.log("numbers"); 
  chooseFrom += numbers;
  //USE NUMBERS
}
// var sum = 0;
// for (var i = 1; i <= num, i++);
var random = Math.floor(Math.random() * characters.length);

console.log(password);
return "your password here";
}

//Write password to the #password input
function writePassword() {
  var password = generatePassword(); {

  }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
