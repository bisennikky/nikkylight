const passwordField = document.getElementById("password_field1");
const showPasswordIcon = document.getElementById("show-password1");

showPasswordIcon.addEventListener("click", function () {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);

    // Toggle eye icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
});


const passwordField2 = document.getElementById("password_field2");
const showPasswordIcon2 = document.getElementById("show-password2");

showPasswordIcon2.addEventListener("click", function () {
    const type = passwordField2.getAttribute("type") === "password" ? "text" : "password";
    passwordField2.setAttribute("type", type);

    // Toggle eye icon
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye");
});