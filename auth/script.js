const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function ()
{
    console.log(usernameInput. value + " && " + passwordInput.value );
    if (usernameInput.value === 'admin' && passwordInput.value === 'admin')
        window.location.href = "/users";
});