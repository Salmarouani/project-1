// script.js

// Toggle Hamburger Menu
const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Redirect to Form Page on Button Click
const startButton = document.getElementById('start-button');
startButton.addEventListener('click', () => {
    window.location.href = 'form.html';
});
