// Assignment Code
const generateBtn = document.querySelector("#generate");
//User input variables
let passLength;
let includeNum;
let includeLower;
let includeUpper;
let includeSymbol;

//password variables
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbol = [
  "~",
  ",",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "=",
  "-",
  "{",
  "}",
  "[",
  "]",
  ":",
  ";",
  ">",
  "<",
  "?",
  "/",
  "|",
];
const upper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const lower = upper.map((upper) => upper.toLowerCase());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}
//function to generate password
function generatePassword() {
  let userChoice = [];
  //prompt user to input password length
  passLength = window.prompt("Enter password length:");
  //validate the password is between 8 and 128, and not empty
  while (passLength < 8 || passLength > 128 || passLength === " ") {
    window.alert(
      "Password length has to be atleast 8 characters and no more than 128 characters."
    );
    passLength = window.prompt("Enter password length:");
  }
  //prompt user to choose what to include in password
  includeNum = window.confirm("Do you want numbers included?");
  includeUpper = window.confirm("Do you want uppercase letters included?");
  includeLower = window.confirm("Do you want lowercase letters included?");
  includeSymbol = window.confirm("Do you want symbols included?");
  //validate user chooses atleast one criteria

  if (!includeNum && !includeSymbol && !includeUpper && !includeLower) {
    alert("Please choice atleast one criteria");
  }
  //check what criteria user choose and concat the correlating variable
  if (includeLower) {
    userChoice = userChoice.concat(lower);
  }
  if (includeUpper) {
    userChoice = userChoice.concat(upper);
  }
  if (includeSymbol) {
    userChoice = userChoice.concat(symbol);
  }
  if (includeNum) {
    userChoice = userChoice.concat(num);
  }
  //create an array to hold generated password
  let arrPass = [];
  for (let i = 0; i < passLength; i++) {
    let criteria = userChoice[Math.floor(Math.random() * userChoice.length)];
    arrPass.push(criteria);
  }
  //Join the array and make it a string
  password = arrPass.join("");
  return password;
}
