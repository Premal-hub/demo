// script.js

// Get references to the elements
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

// Toggle the "open" class on the menu toggle and the navbar visibility
menuToggle.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent the click event from propagating to the document
    // Toggle the "open" class on the menu toggle (hamburger icon)
    this.classList.toggle('open');

    // Toggle the "active" class on the navbar to show/hide it
    navbar.classList.toggle('active');
});

// Close the menu if clicked outside of the menu or the hamburger icon
document.addEventListener('click', function (event) {
    // Check if the clicked target is not inside the navbar or menu-toggle icon
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        // Remove the "active" class from the navbar and "open" class from the menu toggle
        navbar.classList.remove('active');
        menuToggle.classList.remove('open');
    }
});

// Prevent clicks inside the navbar from closing the menu
navbar.addEventListener('click', function (event) {
    event.stopPropagation(); // Prevent click from closing the menu when clicked inside the navbar
});
