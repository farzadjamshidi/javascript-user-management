const createUserForm = document.querySelector('#create-user');
const submitButton = document.querySelector('#submit');
const cancelButton = document.querySelector('#cancel-btn');

createUserForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const userData = {
        "username": document.querySelector('#username').value,
        "firstName": document.querySelector('#firstName').value,
        "lastName": document.querySelector('#lastName').value,
        "nationalCode": document.querySelector('#nationalCode').value,
        "birthDate": document.querySelector('#birthDate').value,
        "city": document.querySelector('#city').value,
        "mobile": document.querySelector('#mobile').value,
        "address": document.querySelector('#address').value,
        "role": document.querySelector('#role').value,
        "id": Date.now().toString(),
    };


    const changedPassword = document.querySelector('#change-password').value;
    const repeatChangedPassword = document.querySelector('#repeat-change-password').value;

    if (changedPassword === repeatChangedPassword) {
        userRepo.createUser(userData);
        window.location.href = "/users";
    }
    else {
        document.querySelector('#password-error').innerHTML = "not equal"
    }
});
cancelButton.addEventListener('click', function () {
    window.location.href = "/users";
});