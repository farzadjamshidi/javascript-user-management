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

const newUserImages = { ...user.images };

function load()
{

    const imageContainer = document.querySelector('.image-container');

    imageContainer.innerHTML = '';

    Object.keys(newUserImages).forEach(key =>
    {
        if (newUserImages[key])
        {
            const eachImageNode = document.createElement("Img");
            eachImageNode.classList.add('each-image');
            eachImageNode.dataset.key = key;
            eachImageNode.setAttribute('src', newUserImages[key]);
            eachImageNode.setAttributeNodeNS;
            imageContainer.appendChild(eachImageNode);
        }
        else
        {
            const eachEmptyImageNode = document.createElement("Div");
            eachEmptyImageNode.classList.add('each-image');
            eachEmptyImageNode.dataset.key = key;
            eachEmptyImageNode.innerHTML = `
                <span style="font-size: 24px; color: gray;">
                    <i class="fas fa-upload"></i>
                </span>
                <input type="file" accept="image/png, image/jpeg">
            `;

            const inputForUpload = eachEmptyImageNode.querySelector('input');

            inputForUpload.addEventListener('change', function (event)
            {
                console.log(key, newUserImages[key], event);

                const file = eachEmptyImageNode.querySelector('input').files[0];
                const reader = new FileReader();

                if (file)
                {
                    reader.readAsDataURL(file);
                }

                reader.addEventListener("load", function ()
                {
                    newUserImages[key] = reader.result;

                    setTimeout(function ()
                    {
                        load();
                    }, 100);
                }, false);
            });

            imageContainer.appendChild(eachEmptyImageNode);
        }
    });

}

load();

const saveButton = document.querySelector('#save-btn');

const cancelButton = document.querySelector('#cancel-btn');

cancelButton.addEventListener('click', function ()
{
    window.location.href = "/users";
});

saveButton.addEventListener('click', function ()
{

    const editedUser = { ...user };
    editedUser.images = newUserImages;

    userRepo.updateUser(editedUser);

    window.location.href = "/users";
});