// Simple smooth scrolling
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Click to call functionality
document.addEventListener('DOMContentLoaded', function() {
    const phoneElements = document.querySelectorAll('.phone-clickable');
    phoneElements.forEach(el => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', function() {
            window.location.href = 'tel:+18442047480';
        });
    });
});
