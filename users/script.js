const usertableBodyEl = document.querySelector('.users-table-body');
const createUserFormLink = document.querySelector('#create-user-form-link');

var users = [];

function load()
{
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

                break;
            case 'edit-btn':
                window.location.href = "/users/edit#" + userId;
                break;
            case 'change-password-btn':

                break;

            default:
                break;
        }
    });

});