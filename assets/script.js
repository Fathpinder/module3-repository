// Assignment Code
var generateBtn = document.querySelector("#generate");

// Code to prompt user for pw length and character options
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
  var passwordOptions = {
    length: pwLength,
  }
  console.log(passwordOptions);
  
  // function to determine what characters to include in pw
  var charSet = function() {
    var upperSelect = window.confirm("Include uppercase letters?");
    if (upperSelect) {
      console.log("include uppercase");
      passwordOptions.UPPERCASE = "ABCDEFGHIJKLMOPQRSTUVWXYZ";
    } else {
      console.log('no uppercase');
      passwordOptions.UPPERCASE = "";
    }
    var lowerSelect = window.confirm("Include lowercase letters?");
    if (lowerSelect) {
      console.log("include lowercase");
      passwordOptions.LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    } else {
      console.log("no lowercase");
      passwordOptions.LOWERCASE = "";
    }
    var numSelect = window.confirm("Include numbers?");
    if (numSelect) {
      console.log("include numbers");
      passwordOptions.NUMERIC = 1234567890;
    } else {
      console.log("no numbers");
      passwordOptions.NUMERIC = "";
    }
    var specSelect = window.confirm("Include special characters?");
    if (specSelect) {
      console.log("include special");
      passwordOptions.SPECIAL = "!@#$%^&*_+-=";
        }
    else {
      console.log("no special");
      passwordOptions.SPECIAL = "";
    }
    if (!upperSelect && !lowerSelect && !numSelect && !specSelect) {
      window.alert("your password must contain characters. try again.");
      return charSet();
    } 
  }
  charSet();
  console.log(passwordOptions);
  // create string of characters to include in password
  var charOptions = {
    list: passwordOptions.UPPERCASE + passwordOptions.LOWERCASE + passwordOptions.NUMERIC + passwordOptions.SPECIAL,
  }
  console.log("randomizing " + charOptions.list.length + " options");
  console.log(charOptions);
// generate random password
  var password = "";
  var options = charOptions.list;
  for (i = 0; i < pwLength; i++) {
    password += options.charAt(Math.floor(Math.random() * options.length));
  }
  return password;
  console.log(password);
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

