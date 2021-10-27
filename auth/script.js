const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");

var users = [];

function load()
{
  users = userRepo.getUsers();
  users.push({
    username: 'admin',
    password: 'admin',
    role: 'admin'
  });
}

load();

submitButton.addEventListener("click", function ()
{
  if (isUserAuthorize(usernameInput.value, passwordInput.value))
  {
    const loggedInUser = users.find(user => user.username === usernameInput.value);
    authService.setLoggedInUser(loggedInUser);
    window.location.href = "/users";
  } else
  {
    let message = "نام کاربری یا رمز عبور اشتباه است، لطفا مجددا تلاش کنید.";
    let footer = "با احترام، تیم پنج فرانت اند";

    Swal.fire({
      icon: "error",
      title: "توجه",
      text: message,
      footer: footer,
      confirmButtonText: "متوجه شدم",
    });
  }
});

function isUserAuthorize(username, password)
{
  for (const user of users)
  {
    if (user.username === username && user.password === password)
      return true;
  }

  return false;
}