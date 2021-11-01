const createUserForm = document.querySelector('#create-user');
const submitButton = document.querySelector('#submit');
const cancelButton = document.querySelector('#cancel-btn');

const roles = roleRepo.getRoles();

const options = roles.reduce(function (acc, role)
{
    return acc + `<option value="${ role.name }">${ role.name }</option>`;
}, '');

document.querySelector('#role').innerHTML = options;

createUserForm.addEventListener('submit', function (event)
{
    event.preventDefault();

    const repeatChangedPassword = document.querySelector('#repeat-change-password').value;
    const changedPassword = document.querySelector('#change-password').value;

    if (changedPassword === repeatChangedPassword)
    {
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
            "password": changedPassword,
            "images": {
                "file1": null,
                "file2": null,
                "file3": null,
                "file4": null
            }
        };

        userRepo.createUser(userData);
        window.location.href = "/users";
    }
    else
    {
        document.querySelector('#password-error').innerHTML = "not equal";
    }
});
cancelButton.addEventListener('click', function ()
{
    window.location.href = "/users";
});