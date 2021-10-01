const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', function ()
{
    if (usernameInput.value === 'admin' && passwordInput.value === 'admin')
        window.location.href = "/users";
});