const roletableBodyEl = document.querySelector('.roles-table-body');
const createRoleFormLink = document.querySelector('#create-role-form-link');

var roles = [];

function load()
{
    roletableBodyEl.innerHTML = "";

    roles = roleRepo.getRoles();

    roles.forEach((role, index) =>
    {
        var eachRowNode = document.createElement("Div");
        eachRowNode.classList.add('each-row');
        eachRowNode.dataset.id = role.id;

        eachRowNode.innerHTML = `
        <div>${ index + 1 }</div>
        <div>${ role.name }</div>
        <div class="actions">
            <div>
                <input type="button" id="delete-btn" value="Delete">
            </div>
            <input type="button" id="users-list-btn" value="Users List">
        </div>
    `;

        roletableBodyEl.appendChild(eachRowNode);
    });

    const rowsElements = document.querySelectorAll('.each-row');

    rowsElements.forEach((element) =>
    {
        const roleId = element.dataset.id;

        element.addEventListener('click', function (event)
        {
            switch (event.target.id)
            {
                case 'delete-btn':
                    showDeleteRoleModal(roleId);
                    afterShownDeleteRoleModal(roleId);
                    break;

                case 'users-list-btn':
                    showUsersListModal();
                    afterShownUsersListModal(roleId);
                    break;

                default:
                    break;
            }
        });

    });
}

load();

createRoleFormLink.addEventListener('click', function ()
{
    showNewRoleModal();
    afterShownNewRoleModal();
});

function showNewRoleModal()
{
    document.getElementsByClassName('new-role-modal')[0].classList.add('show');
}

function hideNewRoleModal()
{
    document.getElementsByClassName('new-role-modal')[0].classList.remove('show');
}

function afterShownNewRoleModal()
{
    document.querySelector('#new-role-modal-cancel-btn').addEventListener('click', function ()
    {
        document.querySelector('#new-role-modal-confirm-btn').removeEventListener('click');
        hideNewRoleModal();
    });

    document.querySelector('#new-role-modal-confirm-btn').addEventListener('click', function ()
    {

        const newRole = {
            id: Date.now().toString(),
            name: document.querySelector('#role-name').value
        };
        roleRepo.createRole(newRole);
        hideNewRoleModal();
        load();
    });
}

function showDeleteRoleModal(roleId)
{
    const role = roleRepo.getRoleById(roleId);

    const users = userRepo.getUsersByRoleName(role.name);

    if (users && users.length > 0)
    {

        alert("This Role can not be deleted. Some users have this role.");
        return;
    }

    document.getElementsByClassName('delete-role-modal')[0].classList.add('show');
}

function hideDeleteRoleModal()
{
    document.getElementsByClassName('delete-role-modal')[0].classList.remove('show');
}

function afterShownDeleteRoleModal(roleId)
{
    const role = roleRepo.getRoleById(roleId);

    document.querySelector('#delete-role-message').innerHTML = `Are you sure want to delete role "${ role.name }" with id: ${ role.id }?`;

    document.querySelector('#delete-role-modal-cancel-btn').addEventListener('click', function ()
    {
        document.querySelector('#delete-role-modal-confirm-btn').removeEventListener('click');
        hideDeleteRoleModal();
    });
    document.querySelector('#delete-role-modal-confirm-btn').addEventListener('click', function ()
    {
        roleRepo.deleteRole(roleId);
        hideDeleteRoleModal();
        setTimeout(() =>
        {
            load();
        }, 50);
    });
}

function showUsersListModal()
{
    document.getElementsByClassName('users-list-modal')[0].classList.add('show');
}

function hideUsersListModal()
{
    document.getElementsByClassName('users-list-modal')[0].classList.remove('show');
}

function afterShownUsersListModal(roleId)
{
    document.querySelector('#users-list-modal-close-btn').addEventListener('click', function ()
    {
        hideUsersListModal();
    });

    const role = roleRepo.getRoleById(roleId);

    const users = userRepo.getUsersByRoleName(role.name);

    const usertableBodyEl = document.querySelector('.users-table-body');

    usertableBodyEl.innerHTML = "";

    users.forEach((user, index) =>
    {
        var eachRowNode = document.createElement("Div");
        eachRowNode.classList.add('each-row');

        eachRowNode.innerHTML = `
        <div>${ user.username }</div>
        <div>${ user.firstName }</div>
        <div>${ user.lastName }</div>
        <div>${ user.nationalCode }</div>
    `;

        usertableBodyEl.appendChild(eachRowNode);
    });

}
