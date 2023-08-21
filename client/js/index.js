const userFName = document.querySelector('#valueOne');
const userLName = document.querySelector('#valueT');
const userEmail = document.querySelector('#valueTwo');
const userCell = document.querySelector('#valueThree');
const toets = document.querySelector('#toets');
const nameFError = document.querySelector('#fnameError');
const nameLError = document.querySelector('#lnameError');
const emailError = document.querySelector('#enameError');
const cellError = document.querySelector('#cnameError');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const cellRegex = /^0\d{9}$/

testScript();
//this is used to display values in a summary back to the user
function showVal(event) {
    event.preventDefault(); // Prevent default form submission

}


function validateFName() {

    if (userFName.validity.tooShort) {
        nameFError.innerHTML = 'First name must be at least 5 characters!';
        nameFError.style.color = 'red';
        nameFError.style.fontSize = '0.7rem';
        
    } else {
        nameFError.innerHTML = ''; // Clear the error message
    }
}

userFName.addEventListener('blur',validateFName);

function validateLName() {

    if (userLName.validity.tooShort) {
        nameLError.innerHTML = 'Last name must be at least 5 characters!';
        nameLError.style.color = 'red';
        nameLError.style.fontSize = '0.7rem';
        
    } else {
        nameLError.innerHTML = ''; // Clear the error message
    }
}

userLName.addEventListener('blur',validateLName);

function validateEmail() {

    if (!emailRegex.test(userEmail.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.color = 'red';
        emailError.style.fontSize = '0.7rem';
    } else {
        emailError.textContent = ''; // Clear the error message
    }
}

userEmail.addEventListener("blur",validateEmail);

function validateCell() {
    if (!cellRegex.test(userCell.value)) {
        cellError.textContent = 'Please enter a valid cell phone number';
        cellError.style.color = 'red';
        cellError.style.fontSize = '0.7rem';
    } else {
        cellError.textContent = ''; // Clear the error message
    }
}

userCell.addEventListener('blur',validateCell)


function testScript() {
    console.log("JavaScript is connected!");
}

