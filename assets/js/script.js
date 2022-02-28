// Assignment code here
/*
var = window.prompt("Enter your name: ");
alert("Your name is " + name);
*/

// Get references to the #generate element    
var generateBtn = document.querySelector("#generate");


// document.getElementById(passwordLength, upperCase, lowerCase, specialCharacters);

/* var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var specialCharacters = "!@#$%^&*()_-+="; */



function generatePassword() {

  // User input
  passwordLength = prompt("how many characters would you like your password? Choose between 8 and 128.");
  console.log("Password length " + passwordLength);

  if(passwordLength < 8 || passwordLength > 128) {
  passwordLength = prompt("Please choose between 8 and 128");
  }console.log("Pasword length " + passwordLength);

  upperCase = prompt("Would you like to use uppercase letters?");
  console.log("Uppercase " + upperCase);

  /* if(upperCase null) {
    upperCase = prompt("Please choose a valid response");
    }console.log("Uppercase " + upperCase); */

  lowerCase = prompt("Would you like to use lowercase letters?");
  console.log("Lowercase " + lowerCase);

  specialCharacters = prompt("Would you like to use spcial characters?");
  console.log("Special characters " + specialCharacters);

  
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialCharacters = "!@#$%^&*()_-+=";

/*
  var passwordVariables = lowerCase + upperCase + numbers + specialCharacters);
  console.log("Your password is " + password);
*/

// var return = document.getElementById("password");

  return "Generated password will go here!";


}





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
