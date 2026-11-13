
// ============================================
// 1. SELECT HTML ELEMENTS
// ============================================

const registrationForm = document.getElementById("registrationForm");

const fullName = document.getElementById("fullName");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const message = document.getElementById("message");

const submitButton = registrationForm.querySelector(
    'button[type="submit"], input[type="submit"]'
);


// ============================================
// 2. FORM SUBMIT EVENT
// ============================================

registrationForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    message.textContent = "";
    message.classList.remove("success");

    const nameValue = fullName.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();

    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    // ========================================
    // 3. FRONTEND VALIDATION
    // ========================================

    if (nameValue.length < 3) {
        showMessage("Name must contain at least 3 characters.");
        fullName.focus();
        return;
    }

    if (usernameValue.length < 3) {
        showMessage("Username must contain at least 3 characters.");
        username.focus();
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue)) {
        showMessage("Please enter a valid email address.");
        email.focus();
        return;
    }

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneValue)) {
        showMessage("Please enter a valid 10-digit phone number.");
        phone.focus();
        return;
    }

    if (passwordValue.length < 8) {
        showMessage("Password must contain at least 8 characters.");
        password.focus();
        return;
    }

    if (passwordValue !== confirmPasswordValue) {
        showMessage("Passwords do not match!");
        confirmPassword.focus();
        return;
    }

    const selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    if (!selectedGender) {
        showMessage("Please select your gender.");
        return;
    }


    // ========================================
    // 4. PREPARE REGISTRATION DATA
    // ========================================

    const userData = {
        fullName: nameValue,
        username: usernameValue,
        email: emailValue,
        phone: phoneValue,
        password: passwordValue,
        confirmPassword: confirmPasswordValue,
        gender: selectedGender.value
    };


    // ========================================
    // 5. SEND DATA TO BACKEND API
    // ========================================

    try {

        if (submitButton) {
            submitButton.disabled = true;
            submitButton.textContent = "Registering...";
        }

        showMessage("Please wait, registering your account...");

        const response = await fetch(
            "https://saurabh-registration-backend.onrender.com/api/auth/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }
        );

        const result = await response.json();


        // ====================================
        // 6. HANDLE BACKEND RESPONSE
        // ====================================

        if (!response.ok) {

            if (result.errors && result.errors.length > 0) {
                throw new Error(result.errors[0].msg);
            }

            throw new Error(
                result.message || "Registration failed."
            );
        }

        message.textContent =
            result.message + " Welcome, " + nameValue + "!";

        message.classList.add("success");

        registrationForm.reset();

    }

    catch (error) {

        console.error("Registration Error:", error);

        if (error instanceof TypeError) {
            showMessage(
                "Unable to connect to the server. Please check your backend."
            );
        } else {
            showMessage(error.message);
        }

    }

    finally {

        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = "Register";
        }

    }

});


// ============================================
// 7. MESSAGE FUNCTION
// ============================================

function showMessage(text) {

    message.textContent = text;
    message.classList.remove("success");

}
