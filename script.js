// Assignment Code
var generateBtn = document.querySelector("#generate");

// Arrays
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

// Declare Variables
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmNumeric;
var confirmSpecial;
var passwordCharacters = [];

// Amount of Characters
function generatePassword() {
  var confirmLength = (prompt("How many total characters would you like in your password?"));
  for(confirmLength <= 7; confirmLength >= 51;) {
    alert("Password length must be at least 8 and no more than 128");
    var confirmLength = (prompt("How many total characters would you like in your password?"));
    }
  
// Determine characters
  var confirmLower = confirm("Would you like to use lowercase letters");
  var confirmUpper = confirm("Would you like to use uppercase letters");
  var confirmNumeric = confirm("Would you like to use numbers?");
  var confirmSpecial = confirm("Would you like to use special characters?");
    while(confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial ===false) {
      alert("You must choose at least one option!");
        var confirmLower = confirm("Would you like to use lowercase letters");
        var confirmUpper = confirm("Would you like to use uppercase letters");
        var confirmNumeric = confirm("Would you like to use numbers?");
        var confirmSpecial = confirm("Would you like to use special characters?"); 
    }
  
    // Assign characters to password (found the concat online, not sure if it works or theres another way of doing this)
    if (confirmLower) {
      passwordCharacters = passwordCharacters.concat(lower)
    }
    if (confirmUpper) {
      passwordCharacters = passwordCharacters.concat(upper)
    }
    if (confirmNumeric) {
      passwordCharacters = passwordCharacters.concat(numeric)
    }
    if (confirmSpecial) {
      passwordCharacters = passwordCharacters.concat(special)
    }
  
  

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
