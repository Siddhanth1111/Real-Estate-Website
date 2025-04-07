






export function validateForm(event) {
    event.preventDefault();
    
    // Reset errors
    document.querySelectorAll('.error').forEach(error => error.style.display = 'none');
    
    let isValid = true;
    
    // Validate name
    const name = document.getElementById('fullName').value;
    if (name.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        isValid = false;
    }
    
    // Validate email
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        isValid = false;
    }
    
    // Validate phone
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').style.display = 'block';
        isValid = false;
    }
    
    if (isValid) {
        // Here you would typically send the data to your server
        alert('Registration successful!');
        return register();
        window.location.href = 'index.html'; // Redirect to home page
    }
    
    return false;
}
