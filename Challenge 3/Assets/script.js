
// Variables
var lowerCaseCharacters = ["a", "b", "c","d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
 
var specialCharacters = ["@", "(", ")", "{","}", "[", "]", "%", "+", "", "/", "'", "!", "#", "$", "^", "?", ":", ",", "~", "-", "_", ".",];

var characterList = [];


// User Input
var generatePassword = function() {
  var passwordLength = prompt("How long would you like your password? (8-128)");
  // Returns password if too short 
  if (!(passwordLength >= 8 && passwordLength <= 128)){
    alert("Try again");
  } else {
    // Gets Users desired characters
    if (passwordLength > 8 && passwordLength < 128) {
    var includeLowerCaseCharacters = confirm("Should the password contain lowercase letters?");

    var includeUpperCaseCharacters = confirm("Should the password contain uppercase letters?");

    var includeNumericCharacters = confirm("Should the password contain numbers?");

    var includeSpecialCharacters = confirm("Should the password contain special characters");
    
    if (includeLowerCaseCharacters || includeUpperCaseCharacters || includeNumericCharacters || includeSpecialCharacters) {
      
      if (includeLowerCaseCharacters  === true){
      characterList = characterList.concat(lowerCaseCharacters);
      }

      if (includeUpperCaseCharacters === true){
      characterList = characterList.concat(upperCaseCharacters);
      }

      if (includeNumericCharacters === true){
      characterList = characterList.concat(numericCharacters);
      }

      if (includeSpecialCharacters === true){
      characterList = characterList.concat(specialCharacters);
      }
    } else {
      // Returns to start if no valid selection
      alert("Please make a selection.");
      return generatePassword();
    }
  }

    var password = '';
    // Gathers charaters from desired selection of characters
    for (var i = 0; i < passwordLength; i++) {
    var randomCharacterList = Math.floor(Math.random() * (characterList.length));
    var randomCharacter = characterList[randomCharacterList];
    password = password.concat(randomCharacter);
    }
    return password;
  }
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 var password = generatePassword();
 var passwordText = document.querySelector("#password");
 
 
 passwordText.value = password;
}
 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 