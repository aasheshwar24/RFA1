// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a'); // Get all navigation items

// Toggle the menu on hamburger click
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close the menu when a navigation item is clicked (for small screens)
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 700) { // Only close the menu on small screens
            navLinks.classList.remove('active');
        }
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Background Change on Scroll
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Form Validation
document.querySelector("form").addEventListener("submit", function (event) {
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        event.preventDefault();
    }
});

// Service Card Animation on Hover
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = "0px 4px 15px rgba(255, 255, 255, 0.3)";
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = "0px 4px 12px rgba(255, 255, 255, 0.1)";
    });
});
