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
        nav2.classList.toggle('hidden');
        nav2.classList.toggle('flex');
        nav2.classList.toggle('flex-col');
        
        // Toggle between hamburger and close icon
        menuToggle.classList.toggle('fa-bars');
        menuToggle.classList.toggle('fa-times');
        
        // Prevent scrolling when menu is open
        document.body.classList.toggle('overflow-hidden');
    });

    // Close menu when clicking a nav link
    const navLinks = nav2.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav2.classList.add('hidden');
            nav2.classList.remove('flex', 'flex-col');
            menuToggle.classList.add('fa-bars');
            menuToggle.classList.remove('fa-times');
            document.body.classList.remove('overflow-hidden');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!nav2.contains(event.target) && !menuToggle.contains(event.target) && !nav2.classList.contains('hidden')) {
            nav2.classList.add('hidden');
            nav2.classList.remove('flex', 'flex-col');
            menuToggle.classList.add('fa-bars');
            menuToggle.classList.remove('fa-times');
            document.body.classList.remove('overflow-hidden');
        }
    });
});

// Add any additional JavaScript functionality here
