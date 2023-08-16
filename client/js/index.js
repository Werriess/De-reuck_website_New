const userName = document.querySelector('#valueOne');
const userEmail = document.querySelector('#valueTwo');
const userCell = document.querySelector('#valueThree');
const toets = document.querySelector('#toets');
const nameError = document.querySelector('#nameError');

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
const cellRegex = /^0\d{9}$/

//this is used to display values in a summary back to the user
function showVal(event) {
    event.preventDefault(); // Prevent default form submission

}


function validateName() {

    if (userName.validity.tooShort) {
        nameError.innerHTML = 'Full name must be at least 5 characters!';
        nameError.style.color = 'red';
        nameError.style.fontSize = '0.7rem';
        
    } else {
        nameError.innerHTML = ''; // Clear the error message
    }
}

userName.addEventListener('blur',validateName);


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




