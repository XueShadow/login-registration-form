document.addEventListener('DOMContentLoaded', () => {
    // Navigation from Register to Login
    const signupButton = document.getElementById('signupButton');
    if (signupButton) {
        signupButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'confEmail.html';
        });
    }

    // Navigation from Login to Find Account
    const loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'welcome.html';
        });
    }

    // Cancel button functionality in Find Account
    const cancelButton = document.querySelector('.btn1');
    if (cancelButton) {
        cancelButton.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = 'index.html';
        });
    }
});
