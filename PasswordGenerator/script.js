// Create a random password generator script
// However, there will be an algorithm to ensure that there is
// a lowercase and uppercase letter, a number, and special character
// in the password that was generated

const generatePasswordBtn = document.getElementById("generate_password_btn");
const passwordField = document.getElementById("password_field");
const passwordLength = document.getElementById("password_length_field");

function generateNewPassword(length) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let password = "";

    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
    password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    for(let i=0; i<(length-4); i++){
        const random = Math.random();

        if(random < 0.4) {
            password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        } else if(random < 0.7) {
            password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        } else if(random < 0.9) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        } else {
            password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }
    }

    function shufflePassword(str) {
        // Split the string into an array of characters
        var charArray = str.split('');
      
        // Shuffle the array
        charArray.sort(function() {
          return 0.5 - Math.random();
        });
      
        // Join the array back into a string
        var shuffledString = charArray.join('');
      
        return shuffledString;
    }

    password = shufflePassword(password);

    passwordField.innerHTML = password;
    console.log(`The new password is: ${password}`);
};

generatePasswordBtn.addEventListener("click", function() {
    console.log(`Password length: ${passwordLength.value}`);
    generateNewPassword(passwordLength.value)
});
