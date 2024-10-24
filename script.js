// script.js

// Initialize Typed.js
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#element', {
        strings: ['Full Stack Web Developer', 'Android App Developer', 'Machine Learning Learner'],
        typeSpeed: 30,
        loop: true
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const nav2 = document.querySelector('.nav2');

    menuToggle.addEventListener('click', () => {
        nav2.classList.toggle('show');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!nav2.contains(event.target) && !menuToggle.contains(event.target)) {
            nav2.classList.remove('show');
        }
    });
});

// Add any additional JavaScript functionality here
