// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you cliked the button");
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
  
  }
  var pwLength = lengthPrompt();
  console.log(pwLength);
  
  var charSet = function() {
    var upperSelect = window.confirm("Include uppercase letters?");
    if (upperSelect) {
      console.log("include uppercase");
      
    } else {
      console.log('no uppercase');
    }
    var lowerSelect = window.confirm("Include lowercase letters?");
    if (lowerSelect) {
      console.log("include lowercase");
      
    } else {
      console.log("no lowercase");
    }
    var numSelect = window.confirm("Include numbers?");
    if (numSelect) {
      console.log("include numbers");
      
    } else {
      console.log("no numbers");
    }
    var specSelect = window.confirm("Include special characters?");
    if (specSelect) {
      console.log("include special"); 
    }
    else {
      console.log("no special");
    }
    if (!upperSelect && !lowerSelect && !numSelect && !specSelect) {
      window.alert("your password must contain characters. try again.");
      return charSet();
    } else if (upperSelect && !lowerSelect && !numSelect && !specSelect) {

    }
  }
  charSet();
  var passwordOptions = {
    LOWERCASE: "abcdefghijklmnopqrstuvwxyz",
    UPPERCASE: "ABCDEFGHIJKLMOPQRSTUVWXYZ",
    NUMERIC: "1234567890",
    SPECIAL: "!@#$%^&*_+-=",
    length: pwLength,
  }
  console.log(passwordOptions);
  
  var randProp = function(passwordOptions) {
    var LOWERCASE = passwordOptions.LOWERCASE(passwordOptions);
    return passwordOptions[LOWERCASE[ pwLength * Math.random() << 0]];
  }
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

