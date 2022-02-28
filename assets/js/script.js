// Assignment code here
/*
var = window.prompt("Enter your name: ");
alert("Your name is " + name);
*/



// question one for the user
var passwordLength = window.prompt("Choose your password length between 8 and 128 characters");
console.log("User chose a password length of " + passwordLength + " characters")

    // question two  
    var upperCase = window.prompt("Would you like to include upper case letters in the password? Click OK for yes.")
    // console.log(upperCase);

    console.log("User chose " + upperCase + " for upper case letters in a password")

    // Question three
    var lowerCase = window.prompt("Would you like to include lower case letters in the password? Click OK for yes.")
    // console.log(lowerCase);

    console.log("User chose " + lowerCase + " for lower chase letters in a password")

    // Question four
    var specialCharacters = window.prompt("Would you like to include special characters? Click OK for yes.")
    // console.log(specialCharacters);

    console.log("User chose " + specialCharacters + " for special characters in a password")

    // Question five
    var numbers = window.prompt("Would you like to include numbers? Click OK for yes.")
    // console.log(numbers);  

    console.log("User chose " + numbers + " for special characters in a password")


// Get references to the #generate element    
var generateBtn = document.querySelector("#generate");

document.getElementById(passwordLength, upperCase, lowerCase, specialCharacters);



function generatePassword() {
  console.log("Hey, you clicked the button!")

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
