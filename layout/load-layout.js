(function loadLayout()
{

    fetch("/layout/navbar.html")
        .then(response =>
        {
            return response.text();
        })
        .then(data =>
        {
            document.querySelector("navbar").innerHTML = data;

            document.querySelector('#user-drop-down-log-out').addEventListener('click', function ()
            {
                authService.removeLoggedInUser();
                window.location.href = "/";
            });

            const loggedInUser = authService.getLoggedInUser();
            document.querySelector('#logged-in-user-full-name').innerHTML = `${ loggedInUser.firstName } ${ loggedInUser.lastName }`;
        });

    fetch("/layout/sidebar.html")
        .then(response =>
        {
            return response.text();
        })
        .then(data =>
        {
            document.querySelector("sidebar").innerHTML = data;
        });
})()