document.addEventListener('DOMContentLoaded', () => {
    // Login Page Functionality
    const loginForm = document.querySelector('.login-box form');
    const loginButton = document.querySelector('.login-box button[type="submit"]');

    if (loginForm) {
        loginButton.addEventListener('click', (e) => {
            e.preventDefault();

            const usernameInput = document.querySelector('.login-box input[type="text"]');
            const passwordInput = document.querySelector('.login-box input[type="password"]');

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            // Simple validation
            if (!username || !password) {
                alert('Please fill in all fields.');
                return;
            }

            // Check credentials (use your own logic here)
            if (username === 'admin' && password === 'password') {
                alert('Login successful!');
                window.location.href = 'https://www.example.com'; // Replace with the target URL
            } else {
                alert('Invalid username or password.');
            }
        });
    }

    // Redirect from Login to Sign-Up Page
    const signupLink = document.querySelector('.signup a[href="signup.html"]');
    if (signupLink) {
        signupLink.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'signup.html'; // Adjust if your file structure is different
        });
    }

    // Sign-Up Page Functionality
    const signupForm = document.querySelector('.signup-box form');
    const signupButton = document.querySelector('.signup-box button[type="submit"]');

    if (signupForm) {
        signupButton.addEventListener('click', (e) => {
            e.preventDefault();

            const firstName = document.querySelector('.signup-box input[name="firstName"]').value.trim();
            const lastName = document.querySelector('.signup-box input[name="lastName"]').value.trim();
            const email = document.querySelector('.signup-box input[name="email"]').value.trim();
            const phone = document.querySelector('.signup-box input[name="phone"]').value.trim();
            const password = document.querySelector('.signup-box input[name="password"]').value.trim();
            const confirmPassword = document.querySelector('.signup-box input[name="confirmPassword"]').value.trim();

            // Validation
            if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            if (password.length < 6) {
                alert('Password must be at least 6 characters long.');
                return;
            }

            alert('Sign-Up successful! Redirecting to login page...');
            window.location.href = 'index.html'; // Redirect to Login Page
        });
    }
});

