document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu if open
            navMenu.classList.remove('show');
        });
    });

    // Simple form validation for rifa participation
    const participateButtons = document.querySelectorAll('.rifa-cards .btn-primary');
    participateButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const rifaTitle = e.target.closest('.card').querySelector('h3').textContent;
            alert(`Obrigado por participar da rifa "${rifaTitle}"! Boa sorte!`);
        });
    });
});