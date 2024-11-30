// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

// Add click event listener for the hamburger menu
hamburgerMenu.addEventListener('click', () => {
    // Toggle the class 'show' to make the menu visible
    navMenu.classList.toggle('show');
});

// Close the menu when any link is clicked
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove 'show' class to hide the menu after a link is clicked
        navMenu.classList.remove('show');
    });
});
