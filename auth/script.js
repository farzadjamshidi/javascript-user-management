const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function () {
  if (usernameInput.value === "admin" && passwordInput.value === "admin") {
    window.location.href = "/users";
  } else {
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
