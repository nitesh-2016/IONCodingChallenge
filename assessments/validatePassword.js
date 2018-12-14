// This file validates a list of passwords using regular expressions.

var passwordList = ["123456", "abc@123", "Abcd@1234", "abcd@1234", "ABCD@1234", "Xyz_123456789@abcd", "987654321"];

/**
 * Function to validate password string using regular expressions.
 * @param password - String to match
 * @returns {boolean} valid - true/false
 */
function validatePassword(password) {
  // RegEx to check at least 1 upper case, 1 lower case, 1 number, 1 special character,
  // min length - 8 and max length - 16
  var regEx = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  return regEx.test(password);
}

// Traverse the array to validate the password strings.
passwordList.forEach(function (password) {
  var isValid = validatePassword(password) ? "Valid" : "Invalid";
  console.log(password, " is - ", isValid);
});