const usertableBodyEl = document.querySelector('.users-table-body');
const createUserFormLink = document.querySelector('#create-user-form-link');

var users = [];

function load()
{
    users = userRepo.getUsers();
}

load();


users.forEach(user =>
{
    var eachRowNode = document.createElement("Div");
    eachRowNode.classList.add('each-row');

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
                <input type="button" value="Delete">
                <input type="button" value="Edit">
            </div>
            <input type="button" value="Change Password">
        </div>
    `;

    usertableBodyEl.appendChild(eachRowNode);
});

createUserFormLink.addEventListener('click', function ()
{
        window.location.href = "/createUserForm";
});