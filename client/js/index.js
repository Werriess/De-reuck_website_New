const userFName = document.querySelector('#valueOne');
const userLName = document.querySelector('#valueT');
const userEmail = document.querySelector('#valueTwo');
const userCell = document.querySelector('#valueThree');
const toets = document.querySelector('#toets');
const nameFError = document.querySelector('#fnameError');
const nameLError = document.querySelector('#lnameError')
const emailError = document.querySelector('#enameError');
const cellError = document.querySelector('#cnameError');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const cellRegex = /^0\d{9}$/

testScript();



function validateFName() {

    if (userFName.validity.tooShort) {
        nameFError.innerHTML = 'First name must be at least 5 characters!';
        nameFError.style.color = 'red';
        nameFError.style.fontSize = '0.7rem';
        userFName.style.borderColor = 'red'
        
    } else {
        nameFError.innerHTML = ''; 
    }
}

userFName.addEventListener('blur',validateFName);

function validateLName() {

    if (userLName.validity.tooShort) {
        nameLError.innerHTML = 'Last name must be at least 5 characters!';
        nameLError.style.color = 'red';
        nameLError.style.fontSize = '0.7rem';
        userLName.style.borderColor = 'red'
        
    } else {
        nameLError.innerHTML = ''; 
    }
}

userLName.addEventListener('blur',validateLName);

function validateEmail() {

    if (!emailRegex.test(userEmail.value)) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.color = 'red';
        emailError.style.fontSize = '0.7rem';
        userEmail.style.borderColor = 'red'
    } else {
        emailError.textContent = ''; 
    }
}

userEmail.addEventListener("blur",validateEmail);

function validateCell() {
    if (!cellRegex.test(userCell.value)) {
        cellError.textContent = 'Please enter a valid cell phone number';
        cellError.style.color = 'red';
        cellError.style.fontSize = '0.7rem';
        userCell.style.borderColor = 'red';

    } else {
        cellError.textContent = ''; 
        
    }
}

userCell.addEventListener('blur',validateCell)


function testScript() {
    console.log("JavaScript is connected!");
}

