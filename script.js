document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const passwordInput = document.getElementById('password');
    const strengthBar = document.querySelector('.strength-bar');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    passwordInput.addEventListener('input', function() {
        const password = this.value;
        let strength = 0;

        if (password.length >= 8) strength += 25;
        if (/[A-Z]/.test(password)) strength += 25;
        if (/[0-9]/.test(password)) strength += 25;
        if (/[^A-Za-z0-9]/.test(password)) strength += 25;

        strengthBar.style.width = strength + '%';
        
        if (strength < 50) {
            strengthBar.style.background = '#ef4444';
        } else if (strength < 75) {
            strengthBar.style.background = '#f59e0b';
        } else {
            strengthBar.style.background = '#22c55e';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;

        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }

        if (passwordInput.value.length < 8) {
            showError(passwordInput, 'Password must be at least 8 characters long');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match');
            isValid = false;
        } else {
            clearError(confirmPasswordInput);
        }

        if (isValid) {
            const submitBtn = form.querySelector('.submit-btn');
            submitBtn.textContent = 'Creating Account...';
            submitBtn.disabled = true;

            setTimeout(() => {
                alert('Account created successfully!');
                form.reset();
                strengthBar.style.width = '0%';
                submitBtn.textContent = 'Create Account';
                submitBtn.disabled = false;
            }, 2000);
        }
    });

    function showError(input, message) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        
        let errorElement = input.nextElementSibling;
        if (!errorElement || !errorElement.classList.contains('error-message')) {
            errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            input.parentNode.insertBefore(errorElement, input.nextElementSibling);
        }
        
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }

    function clearError(input) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        
        const errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error-message')) {
            errorElement.style.display = 'none';
        }
    }

    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('invalid', 'valid');
            const errorElement = this.nextElementSibling;
            if (errorElement && errorElement.classList.contains('error-message')) {
                errorElement.style.display = 'none';
            }
        });
    });
});