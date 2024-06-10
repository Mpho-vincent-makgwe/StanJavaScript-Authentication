document.getElementById('toggle-link').addEventListener('click', function(event) {
    event.preventDefault();
    const formTitle = document.getElementById('form-title');
    const submitBtn = document.getElementById('submit-btn');
    const confirmPasswordGroup = document.getElementById('confirm-password-group');
    const toggleText = document.getElementById('toggle-text');

    if (formTitle.textContent === 'Sign In') {
        formTitle.textContent = 'Sign Up';
        submitBtn.textContent = 'Sign Up';
        confirmPasswordGroup.style.display = 'block';
        toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Sign In</a>';
    } else {
        formTitle.textContent = 'Sign In';
        submitBtn.textContent = 'Sign In';
        confirmPasswordGroup.style.display = 'none';
        toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Sign Up</a>';
    }
});

document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formTitle = document.getElementById('form-title').textContent;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (formTitle === 'Sign Up') {
        const confirmPassword = document.getElementById('confirm-password').value;
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    }

    alert(`${formTitle} successful!`);
});
