document.querySelector('#form').addEventListener('submit', function(event) {
    // // Prevent form submission
    event.preventDefault();

    // Clear previous error messages
    document.getElementById('name_error').innerText = '';
    document.getElementById('email_error').innerText = '';
    document.getElementById('password_error').innerText = '';
    document.getElementById('confirm_pass').innerText = '';
    document.getElementById('phone_error').innerText = '';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const re_pass = document.getElementById('re_pass').value;
    const phone = document.getElementById('phone').value;

    let isValid = true;

    // Validate Name
    if (name === String) {
        isvalid = true;
    }else if (!isNaN(name)) {
        const err = document.getElementById('name_error');
        err.innerText = 'Number is not allowed';
        isValid = false;
    }
    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('email_error').innerText = 'Valid email is required';
        isValid = false;
    }

    // Validate Password
    if (password === '') {
        document.getElementById('password_error').innerText = 'Password is required';
        isValid = false;
    }

    // Validate Confirm Password
    if (re_pass === '' || re_pass !== password) {
        document.getElementById('confirm_pass').innerText = 'Passwords do not match';
        isValid = false;
    }

    // Validate Phone
    if (phone === '' || phone.length < 10 || phone.length > 10) {
        document.getElementById('phone_error').innerText = 'Valid phone number is required';
        isValid = false;
    }

    // If all validations pass, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
    }
});