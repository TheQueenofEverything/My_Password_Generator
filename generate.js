//Elements
const password = document.querySelector ('#password');
const button = document.querySelector('button');

//Password Data
let characters = '0123456789abcdfghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ!@#$%^&*()_+[]{}|:"/?<>`~';
let passwordLength = 30;
let passwordValue = ''; 

//Creating the Password 
const createPassword = () => {
    passwordValue = '';

    for (let i = 0; i < passwordLength; i++) {
        let number = Math.floor(Math.random() * characters.length);
        passwordValue += characters.substring(number, number +1);

}

    password.value = passwordValue;

}

//Event - Will activate the action -> when Button 'Generate Password' is clicked - 
button.addEventListener('click', createPassword);