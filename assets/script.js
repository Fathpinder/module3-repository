// Assignment Code
var generateBtn = document.querySelector("#generate");

var lengthPrompt = function() {
  var pwLength = window.prompt(
    "Choose password length. Type a number between 8 and 128"
    );
  
    if (pwLength < 8 || pwLength > 128) {
   window.alert("please enter a valid length");
   return lengthPrompt();
  }
  
  if (pwLength >= 8 || pwLength <= 128) {
    window.alert("your password will be " + pwLength + " characters");
    return pwLength;
   }
   return false;
};

// lengthPrompt();
var passwordOptions = {
  alphabet: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "1234567890",
  special: "!@#$%^&*_+-=",
  length: lengthPrompt(),
};
function generatePassword() {
  // const alpha = Math.random().toString(128).substring(0, passwordOptions.length)
    // console.log(alpha)  
};

generatePassword();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
