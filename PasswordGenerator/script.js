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

    for(let i=0; i<length; i++){
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

    passwordField.innerHTML = password;
    console.log(`The new password is: ${password}`);
};

generatePasswordBtn.addEventListener("click", function() {
    console.log(`Password length: ${passwordLength.value}`);
    generateNewPassword(passwordLength.value)
});
