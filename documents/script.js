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

const saveButton = document.querySelector('#save-btn');

const cancelButton = document.querySelector('#cancel-btn');

cancelButton.addEventListener('click', function ()
{
    window.location.href = "/users";
});