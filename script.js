// Toggle between Login and Register views
function switchForm(formType) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (formType === 'register') {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
    } else {
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
    }
}

// Simple Form Validation & Submission Handling
document.getElementById('signInForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail');
    const pass = document.getElementById('loginPassword');
    let isValid = true;

    if (!email.value.trim() || !email.value.includes('@')) {
        showError(email);
        isValid = false;
    } else {
        hideError(email);
    }

    if (!pass.value.trim()) {
        showError(pass);
        isValid = false;
    } else {
        hideError(pass);
    }

    if (isValid) {
        alert('Sign In successful! (Static Demo)');
        this.reset();
    }
});

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('regName');
    const email = document.getElementById('regEmail');
    const pass = document.getElementById('regPassword');
    let isValid = true;

    if (!name.value.trim()) {
        showError(name);
        isValid = false;
    } else {
        hideError(name);
    }

    if (!email.value.trim() || !email.value.includes('@')) {
        showError(email);
        isValid = false;
    } else {
        hideError(email);
    }

    if (pass.value.length < 6) {
        showError(pass);
        isValid = false;
    } else {
        hideError(pass);
    }

    if (isValid) {
        alert('Account created successfully! (Static Demo)');
        this.reset();
        switchForm('login');
    }
});

function showError(input) {
    const errorMsg = input.nextElementSibling;
    errorMsg.style.display = 'block';
    input.parentElement.style.borderColor = '#ff6b6b';
}

function hideError(input) {
    const errorMsg = input.nextElementSibling;
    errorMsg.style.display = 'none';
    input.parentElement.style.borderColor = 'rgba(255, 255, 255, 0.5)';
}