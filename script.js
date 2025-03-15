
// Basic JavaScript for interactivity
document.addEventListener('DOMContentLoaded', function() {
    // Property type selection
    const propertyTypes = document.querySelectorAll('.property-type');
    propertyTypes.forEach(type => {
        type.addEventListener('click', function() {
            propertyTypes.forEach(t => t.style.background = '#f8f9fa');
                this.style.background = '#3498db';
                this.style.color = 'white';
            });
        });

// Sticky navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'white';
    }
    });
});
  