document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        // Get values
        let fullName = document.getElementById("fullName").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();

        // Error elements
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let phoneError = document.getElementById("phoneError");
        let passwordError = document.getElementById("passwordError");
        let confirmPasswordError = document.getElementById("confirmPasswordError");

        // Reset errors
        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        let isValid = true;

        // Name Validation (at least 5 characters)
        if (fullName.length < 5) {
            nameError.textContent = "Full name must be at least 5 characters.";
            isValid = false;
        }

        // Email Validation (@ character must be present)
        if (!email.includes("@") || email.length < 5) {
            emailError.textContent = "Enter a valid email address.";
            isValid = false;
        }

        // Phone Number Validation (10 digits and not 1234567890)
        if (!/^\d{10}$/.test(phone) || phone === "1234567890") {
            phoneError.textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        }

        // Password Validation (minimum 8 characters, not "password" or username)
        if (password.length < 8 || password.toLowerCase() === "password" || password.toLowerCase() === fullName.toLowerCase()) {
            passwordError.textContent = "Password must be at least 8 characters and not 'password' or your name.";
            isValid = false;
        }

        // Confirm Password (must match password)
        if (confirmPassword !== password) {
            confirmPasswordError.textContent = "Passwords do not match.";
            isValid = false;
        }

        // Final submission if valid
        if (isValid) {
            alert("Form submitted successfully!");
            form.reset();
        }
    }
});
