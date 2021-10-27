var authLocalStorageKey = 'auth';

function getLoggedInUser()
{
    return JSON.parse(localStorage.getItem(authLocalStorageKey));
}

function setLoggedInUser(user)
{
    localStorage.setItem(authLocalStorageKey, JSON.stringify(user));
}

function removeLoggedInUser()
{
    localStorage.removeItem(authLocalStorageKey);
}

var authService = {
    getLoggedInUser: getLoggedInUser,
    setLoggedInUser: setLoggedInUser,
    removeLoggedInUser: removeLoggedInUser
};