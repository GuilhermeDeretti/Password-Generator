// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var password = {
  passwordLength,
  lower,
  upper,
  numbers,
  special,

  // Function to prompt user for password options
  getOptions: function () {
    do {
      this.passwordLength = prompt("Choose the length of your password.\n It has to be at least 10 characters but no more than 64.")
      if (this.passwordLength < 10 || this.passwordLength > 64) {
        alert("password should be at least 10 characters but no more than 64.");
      }
    } while (this.passwordLength = undefined || this.passwordLength < 10 || this.passwordLength > 64);

    do {
      this.lower = confirm("Would you like lowercase characters in your password?");
      this.upper = confirm("Would you like Uppercase characters in your password?");
      this.numbers = confirm("Would you like Numbers in your password?");
      this.special = confirm("Would you like Special characters ($@%&*, etc) in your password?");
      if (!this.special && !this.lower && !this.upper && !this.numbers) {
        alert("You must choose at least one character type for your password!")
      }
    } while (!this.special && !this.lower && !this.upper && !this.numbers)// repeat if no character type was selected
  }
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The m
}
// Function for getting a random element from an array
function getRandom(arr) {
  return arr[getRandomIntInclusive(0, (arr.length - 1))];
}

// Function to generate password with user input
function generatePassword() {
  password.getOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);