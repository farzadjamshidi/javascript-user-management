const usertableBodyEl = document.querySelector('.users-table-body');
const createUserFormLink = document.querySelector('#create-user-form-link');

var users = [];

function load()
{
    usertableBodyEl.innerHTML = "";

    users = userRepo.getUsers();

    users.forEach(user =>
    {
        var eachRowNode = document.createElement("Div");
        eachRowNode.classList.add('each-row');
        eachRowNode.dataset.id = user.id;

        eachRowNode.innerHTML = `
        <div>${ user.username }</div>
        <div>${ user.firstName }</div>
        <div>${ user.lastName }</div>
        <div>${ user.nationalCode }</div>
        <div>${ user.birthDate }</div>
        <div>${ user.city }</div>
        <div>${ user.mobile }</div>
        <div>${ user.address }</div>
        <div>${ user.role }</div>
        <div class="actions">
            <div>
                <input type="button" id="delete-btn" value="Delete">
                <input type="button" id="edit-btn" value="Edit">
            </div>
            <input type="button" id="change-password-btn" value="Change Password">
        </div>
    `;

        usertableBodyEl.appendChild(eachRowNode);
    });
}

load();

createUserFormLink.addEventListener('click', function ()
{
    window.location.href = "/createUserForm";
});

const rowsElements = document.querySelectorAll('.each-row');

rowsElements.forEach((element) =>
{
    const userId = element.dataset.id;

    element.addEventListener('click', function (event)
    {
        switch (event.target.id)
        {
            case 'delete-btn':
                showDeleteUserModal();
                afterShownDeleteUserModal(userId);
                break;
            case 'edit-btn':
                window.location.href = "/users/edit#" + userId;
                break;

            case 'change-password-btn':
                showChangePasswordModal();
                afterShownChangePasswordModal(userId);
                break;

            default:
                break;
        }
    });

});

function showDeleteUserModal()
{
    document.getElementsByClassName('delete-user-modal')[0].classList.add('show');
}

function hideDeleteUserModal()
{
    document.getElementsByClassName('delete-user-modal')[0].classList.remove('show');
}

function afterShownDeleteUserModal(userId)
{
    const user = userRepo.getUserById(userId);

    document.querySelector('#delete-user-message').innerHTML = `Are you sure want to delete user "${ user.firstName } ${ user.lastName }" with id: ${ user.id }?`;

    document.querySelector('#delete-user-modal-cancel-btn').addEventListener('click', function ()
    {
        hideDeleteUserModal();
    });
    document.querySelector('#delete-user-modal-confirm-btn').addEventListener('click', function ()
    {
        userRepo.deleteUser(userId);
        hideDeleteUserModal();
        setTimeout(() =>
        {
            load();
        }, 50);
    });
}

function showChangePasswordModal()
{
    document.getElementsByClassName('change-password-modal')[0].classList.add('show');
}

function hideChangePasswordModal()
{
    document.getElementsByClassName('change-password-modal')[0].classList.remove('show');
}

function afterShownChangePasswordModal(userId)
{
    document.querySelector('#change-password-modal-cancel-btn').addEventListener('click', function ()
    {
        hideChangePasswordModal();
    });
    document.querySelector('#change-password-modal-confirm-btn').addEventListener('click', function ()
    {

        const changedPassword = document.querySelector('#change-password').value;
        const repeatChangedPassword = document.querySelector('#repeat-change-password').value;

        if (changedPassword === repeatChangedPassword)
        {

            const user = userRepo.getUserById(userId);
            const editedUser = {
                ...user,
                ...{
                    "password": changedPassword,
                }
            };

            userRepo.updateUser(editedUser);
            hideChangePasswordModal();
        }
        else
        {
            document.querySelector('#password-error').innerHTML= "not equal"
        }
    });
}
