const hashFromURL = window.location.hash;

let userId;
let user;

if (hashFromURL && hashFromURL.slice(1) !== '')
{
    userId = hashFromURL.slice(1);

    user = userRepo.getUserById(userId);

    if (!user)
        window.location.href = "/users";
}
else
{
    window.location.href = "/users";
}

const editUserForm = document.querySelector('#edit-user');
const cancelButton = document.querySelector('#cancel-btn');

document.querySelector('#username').value = user.username || '';
document.querySelector('#firstName').value = user.firstName || '';
document.querySelector('#lastName').value = user.lastName || '';
document.querySelector('#nationalCode').value = user.nationalCode || '';
document.querySelector('#birthDate').value = user.birthDate || '';
document.querySelector('#city').value = user.city || '';
document.querySelector('#mobile').value = user.mobile || '';
document.querySelector('#address').value = user.address || '';
document.querySelector('#role').value = user.role || '';

editUserForm.addEventListener('submit', function (event)
{
    event.preventDefault();
    const editedUser = {
        ...user,
        ...{
            "username": document.querySelector('#username').value,
            "firstName": document.querySelector('#firstName').value,
            "lastName": document.querySelector('#lastName').value,
            "nationalCode": document.querySelector('#nationalCode').value,
            "birthDate": document.querySelector('#birthDate').value,
            "city": document.querySelector('#city').value,
            "mobile": document.querySelector('#mobile').value,
            "address": document.querySelector('#address').value,
            "role": document.querySelector('#role').value,
        }
    };

    userRepo.updateUser(editedUser);

    window.location.href = "/users";
});

cancelButton.addEventListener('click', function ()
{
    window.location.href = "/users";
});