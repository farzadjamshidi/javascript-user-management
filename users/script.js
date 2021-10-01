const usertableBodyEl = document.querySelector('.users-table-body');

var users = [
    {
        username: "fj68",
        firstName: "Farzad",
        lastName: "Jamshidi",
        nationalCode: "0001234567",
        birthDate: "21/09/1989",
        city: "Tehran",
        mobile: "09123456789",
        address: "Tehran Tehran",
        role: "admin"
    },
    {
        username: "hp23",
        firstName: "Harry",
        lastName: "Potter",
        nationalCode: "0001234568",
        birthDate: "01/01/1980",
        city: "London",
        mobile: "09000456789",
        address: "London, Platform 9 3/4",
        role: "admin"
    }
];

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