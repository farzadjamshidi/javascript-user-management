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

            document.querySelector('#user-drop-down-profile').addEventListener('click', function ()
            {
                showUsersListModal();
                afterShownUsersListModal(loggedInUser);
            });

            document.querySelector('#user-drop-down-change-password').addEventListener('click', function ()
            {
                showChangePasswordModal();
                afterShownChangePasswordModal(loggedInUser.id);
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


    function showUsersListModal()
    {
        document.getElementsByClassName('profile-modal')[0].classList.add('show');
    }

    function hideUsersListModal()
    {
        document.getElementsByClassName('profile-modal')[0].classList.remove('show');
    }

    function afterShownUsersListModal(loggedInUser)
    {
        document.querySelector('#profile-modal-close-btn').addEventListener('click', function ()
        {
            hideUsersListModal();
        });

        const profileModalContainer = document.querySelector('.profile-modal-container');

        profileModalContainer.innerHTML = `
            <div>
            <label>Username:</label>
            <span>${ loggedInUser.username }</span>
            </div>

            <div>
            <label>First Name:</label>
            <span>${ loggedInUser.firstName }</span>
            </div>

            <div>
            <label>Last Name:</label>
            <span>${ loggedInUser.lastName }</span>
            </div>

            <div>
            <label>National Code:</label>
            <span>${ loggedInUser.nationalCode }</span>
            </div>

            <div>
            <label>Birth Date:</label>
            <span>${ loggedInUser.birthDate }</span>
            </div>

            <div>
            <label>City:</label>
            <span>${ loggedInUser.city }</span>
            </div>

            <div>
            <label>Mobile:</label>
            <span>${ loggedInUser.mobile }</span>
            </div>
   
            <div>
            <label>Role:</label>
            <span>${ loggedInUser.role }</span>
            </div>

            <div class="address">
            <label>Address:</label>
            <address>${ loggedInUser.address }</address>
            </div>
        `;


    }

    function showChangePasswordModal()
    {
        document.getElementsByClassName('user-drop-change-password-modal')[0].classList.add('show');
    }

    function hideChangePasswordModal()
    {
        document.getElementsByClassName('user-drop-change-password-modal')[0].classList.remove('show');
    }

    function afterShownChangePasswordModal(userId)
    {
        document.querySelector('#user-drop-change-password-modal-cancel-btn').addEventListener('click', function ()
        {
            hideChangePasswordModal();
        });
        document.querySelector('#user-drop-change-password-modal-confirm-btn').addEventListener('click', function ()
        {

            const changedPassword = document.querySelector('#user-drop-down-change-password-input').value;
            const repeatChangedPassword = document.querySelector('#user-drop-down-repeat-change-password').value;

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
                window.location.href = "/";
            }
            else
            {
                document.querySelector('#user-drop-down-password-error').innerHTML = "not equal";
            }
        });
    }

})()