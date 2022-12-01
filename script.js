// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  //YOUR CODE GOES HERE
  var letters = "abcdefghijklmnopqrstuvwxyz";
  var specials = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "1234567890";
  var upLetters = letters.toUpperCase();
  var chooseFrom = "";
  var characters = "";
  var pwGen = "";
  
  //First prompt: length of password
  var pwLength = prompt("This generator makes passwords between 8 and 128 characters. How many characters do you need?");

  for (pwLength; pwLength < 8 || pwLength > 128;) {
    alert("Please request a length between 8 and 128 characters.");
    var pwLength = prompt("This generator makes passwords between 8 and 128 characters. How many characters do you need?");
  }

  //Confirms: finding out what kind of characters the user needs
  
  var isUpperCase = confirm("Would you like to include uppercase letters in your password?");
  var isLowerCase = confirm("Would you like to include lower case letters in your password?");
  var isSpecial = confirm("Would you like to include special characters in your password?");
  var isNumber = confirm("Would you like to include numbers in your password?");
  
  if (isUpperCase) {
    //USE UPPER CASE LETTERS
    chooseFrom = chooseFrom.concat(upLetters);
  }
  
  if (isLowerCase) {
    //USE LOWER CASE LETTERS
    chooseFrom = chooseFrom.concat(letters);
  }

  if (isSpecial) {
    //USE SPECIAL CHARACTERS
    chooseFrom = chooseFrom.concat(specials);
  }
  if (isNumber) {
    chooseFrom = chooseFrom.concat(numbers);
    //USE NUMBERS
  }

// if no characters requested
if (!isUpperCase && !isLowerCase && !isSpecial && !isNumber) {
  alert("I need something to go off of, my brother in Christ. I can only give you a password of letters, numbers, and symbols... I'm only so smart. Please, click the 'generate password' button again.");
}

// var sum = 0;
for (var i = 0; i < pwLength; i++) {
  var random = Math.floor(Math.random() * chooseFrom.length);
  var characters = chooseFrom.charAt(random);
  pwGen = pwGen.concat(characters);
  console.log(pwGen);
}

return pwGen;
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
