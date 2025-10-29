document.addEventListener("DOMContentLoaded", function() {
    // Sign up form
    const signUpForm = document.getElementById('sign-up-form');
    signUpForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle sign-up logic
        alert('Sign-up logic here');
    });

    // Login form
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Handle login logic
        let username = document.getElementById('login-username').value;
        let password = document.getElementById('login-password').value;

        if (username === 'testuser' && password === 'password123') {
            window.location.href = 'dashboard.html'; // Redirect to dashboard
        } else {
            alert('Incorrect credentials!');
        }
    });

    // Payment form
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let phoneNumber = document.getElementById('phone-number').value;
        let amount = document.getElementById('amount').value;

        // Simulate a network error
        setTimeout(function() {
            document.getElementById('error-message').innerText = "Network error! Pay manually.";
        }, 3000);
    });

    // Withdrawal logic
    const withdrawButton = document.getElementById('withdraw');
    withdrawButton.addEventListener('click', function() {
        const amountToWithdraw = prompt("Enter amount to withdraw:");
        if (amountToWithdraw >= 650) {
            alert('Successfully withdrawn ' + amountToWithdraw);
        } else {
            alert('Minimum withdrawal is KES 650. Please top up.');
        }
    });
});
