// letters numbers & characters
var randomNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var lowLetters = alphabet.split('');
var capLetters = alphabet.toUpperCase().split("");
var characters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '~', '`', ',', '.', '?', '\\', '|', '"', ';'];

// input variables
var input;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;
var confirmCharacter;
var choices;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
    var password = '';
    input = parseInt(window.prompt('how many characters do you want?'));

    if (input > 8 && input < 128){
      confirmNumber = window.confirm('select OK if you want to include numbers')
      confirmUppercase = window.confirm('select OK if you want to include uppercase');
      confirmLowercase = window.confirm('select OK if you want to include lowercase');
      confirmCharacter = window.confirm('select OK if you want to include special characters');
    } else {
      alert('enter valid number')
    }
    if (confirmNumber && confirmUppercase && confirmLowercase && confirmCharacter){
      choices = randomNumber + capLetters + lowLetters + characters;
    } else if (confirmNumber && confirmLowercase && confirmCharacter){
      choices = randomNumber + lowLetters + characters;
    } else if (confirmNumber && confirmUppercase && confirmCharacter){
      choices = randomNumber + capLetters + characters;
    } else if (confirmNumber && confirmUppercase && confirmLowercase){
      choices = randomNumber + capLetters + lowLetters;
    } else if (confirmNumber && confirmUppercase){
      choices = randomNumber + capLetters;
    } else if (confirmUppercase && confirmLowercase && confirmCharacter){
      choices = capLetters + lowLetters + characters;
    } else if (confirmUppercase && confirmCharacter){
      choices = capLetters + characters;
    } else if (confirmUppercase && confirmLowercase){
      choices = capLetters + lowLetters;
    } else if (confirmLowercase && confirmCharacter){
      choices = lowLetters + characters;
    } 
    for(i = 0; i < input; i++){
      password += choices[(Math.floor(Math.random() * choices.length))];
    }
    return password;
}


