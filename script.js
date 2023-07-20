var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var specialchar = "$%!&@";
var userChosen = "";
var password = "";

function generatePassword() {
  var passwordlength = parseInt(prompt("How long would you like your password to be? MAX:128 CHARACTERS MIN:8 CHARACTERS"));
  if (Number.isNaN(passwordlength)) {
    alert("PLEASE ENTER A NUMBER");
    return null;
  }
  if (passwordlength < 8 || passwordlength > 128) {
    alert("INVALID CHARACTER COUNT");
    return null;
  }
  var hasUppercase = confirm("Click 'OK' to include uppercase characters");
  var hasLowercase = confirm("Click 'OK' to include lowercase characters");
  var hasNumbers = confirm("Click 'OK' to include number characters");
  var hasSpecialchar = confirm("Click 'OK' to include special characters");
  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSpecialchar) {
    alert("MUST PICK AT LEAST ONE CHARACTER TYPE");
    return null;
  }
  if (hasUppercase) {
    userChosen += uppercase;
  }
  if (hasLowercase) {
    userChosen += lowercase;
  }
  if (hasSpecialchar) {
    userChosen += specialchar;
  }
  if (hasNumbers) {
    userChosen += numbers;
  }
  for (var i = 0; i < passwordlength; i++) {
    var index = Math.floor(Math.random() * userChosen.length);
    password += userChosen.charAt(index);
  }
  return password;
}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

