var localStorageKey = 'users';

function _setUsers(users = [])
{
    localStorage.setItem(localStorageKey, JSON.stringify(users));
}

function getModel()
{
    return {
        username: "fj68",
        firstName: "Farzad",
        lastName: "Jamshidi",
        nationalCode: "0001234567",
        birthDate: "21/09/1989",
        city: "Tehran",
        mobile: "09123456789",
        address: "Tehran Tehran",
        role: "admin",
        password: 'admin'
    };
}
function getUsers()
{
    return JSON.parse(localStorage.getItem(localStorageKey) || '[]');
}

function getUserById(userId)
{
    return getUsers().find(user => user.id === userId);
}

function deleteUser(userId)
{
    var users = getUsers();
    var deletedUserIndex = getUsers().findIndex(user => user.id === userId);
    users.splice(deletedUserIndex, 1);
    _setUsers(users);
}

function createUser(newUser)
{
    var users = getUsers();
    users.push(newUser);
    _setUsers(users);
}

function updateUser(updatedUser)
{
    var users = getUsers();
    var updatedUserIndex = getUsers().findIndex(user => user.id === updatedUser.id);
    users[updatedUserIndex] = updatedUser;
    _setUsers(users);
}

var userRepo = {
    getModel: getModel,
    getUsers: getUsers,
    getUserById: getUserById,
    deleteUser: deleteUser,
    createUser: createUser,
    updateUser: updateUser
};