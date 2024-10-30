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

    // Smooth scroll for contact button
    document.querySelectorAll('a[href="#contact"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Add click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);

            const contactSection = document.querySelector('#contact');
            const headerOffset = 100; // Adjust this value based on your header height
            const elementPosition = contactSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // If contact form exists, focus on the name input
            const nameInput = document.querySelector('#name');
            if (nameInput) {
                setTimeout(() => {
                    nameInput.focus();
                }, 1000); // Delay focus until scroll completes
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.querySelector('#name').value,
                email: document.querySelector('#email').value,
                message: document.querySelector('#message').value
            };

            // Here you would typically send the data to your backend
            // For now, let's just log it and show a success message
            console.log('Form submitted:', formData);

            // Show success message
            const button = contactForm.querySelector('button');
            const originalText = button.textContent;
            button.textContent = 'Message Sent!';
            button.style.backgroundColor = '#4CAF50';
            
            // Reset form and button after delay
            setTimeout(() => {
                contactForm.reset();
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 3000);
        });
    }
});

// Add any additional JavaScript functionality here
