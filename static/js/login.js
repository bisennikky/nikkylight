const passwordField = document.getElementById("password_field");
const showPasswordIcon = document.getElementById("show-password");

showPasswordIcon.addEventListener("click", function () {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Toggle eye icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
});