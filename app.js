const readline = require('readline-sync');

function validatePassword(password) {
    // Check if the password is at least 8 characters long
    if (password.length < 8) {
        return false;
    }
    
    // Check if the password contains at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    
    // Check if the password contains at least one number
    if (!/[0-9]/.test(password)) {
        return false;
    }
    
    return true;
}

let password;

do {
    // Prompt the user for a password
    password = readlineSync.question('Enter a password: ');

    // Validate the password
    if (validatePassword(password)) {
        console.log('Password is valid! You have successfully set your password.');
    } else {
        console.log('Password does not meet the requirements. Please try again.');
    }
} while (!validatePassword(password));  // Repeat if the password is invalid