const form = document.getElementById('form');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const dobInput = document.getElementById('dob');
const countrySelect = document.getElementById('countries'); 

function validateName() {
    const label = document.querySelector('#name + label');
    
    if (nameInput.value.trim() === '') {
        label.style.visibility = 'visible';
        return false;
    }
    
    label.style.visibility = 'hidden';
    return true;
}

function validateEmail() {
    const label = document.querySelector('#email + label');

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    if (!EMAIL_REGEXP.test(emailInput.value)) {
        label.style.visibility = 'visible';
        return false;
    }
    
    label.style.visibility = 'hidden';
    return true;
}

function validatePassword() {
    if (confirmPasswordInput.value !== '') validateConfirmPassword();
    
    const label = document.querySelector('#password + label');
    
    const length = passwordInput.value.length;
    
    if (length < 4 || 8 < length) {
        label.style.visibility = 'visible';
        return false;
    }
    
    label.style.visibility = 'hidden';
    return true;
}

function validateConfirmPassword() {
    const label = document.querySelector('#confirmPassword + label');

    if (passwordInput.value != confirmPasswordInput.value) {
        label.style.visibility = 'visible';
        return false;
    }
    
    label.style.visibility = 'hidden';
    return true;
}

function validateHobbiesInputs() {
    const checked = document.querySelectorAll('input[type="checkbox"]:checked');
    const label = document.querySelector('label[for="doingNothing"] + label');

    if (checked.length == 0) {
        label.style.visibility = 'visible';
        return false;
    }

    label.style.visibility = 'hidden';
    return true;
}

function validateDob() {
    const label = document.querySelector('#dob + label');

    const DATE_REGEXP = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!DATE_REGEXP.test(dobInput.value)) {
        label.style.visibility = 'visible';
        return false;
    }
    
    label.style.visibility = 'hidden';
    return true;
}

function validateCountry() {
    const label = document.querySelector('#countries + label');

    if (countrySelect.value === '') {
        label.style.visibility = 'visible';
        return false;
    }

    label.style.visibility = 'hidden';
    return true;
}

function validateNewsletter() {
    const checked = document.querySelectorAll('input[type="radio"]:checked');
    const label = document.querySelector('label[for="withPleasure"] + label');

    if (checked.length == 0) {
        label.style.visibility = 'visible';
        return false;
    }

    label.style.visibility = 'hidden';
    return true;
}

nameInput.addEventListener('blur', validateName);
emailInput.addEventListener('blur', validateEmail);
passwordInput.addEventListener('blur', validatePassword);
confirmPasswordInput.addEventListener('blur', validateConfirmPassword);
dobInput.addEventListener('blur', validateDob);
countrySelect.addEventListener('blur', validateCountry);

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let isValid = true;

    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePassword()) isValid = false;
    if (!validateConfirmPassword()) isValid = false;
    if (!validateHobbiesInputs()) isValid = false;
    if (!validateDob()) isValid = false;
    if (!validateCountry()) isValid = false;
    if (!validateNewsletter()) isValid = false;

    if (isValid) form.submit();
});
