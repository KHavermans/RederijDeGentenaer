document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal navigation links (vlot en gebruiksvriendelijk)
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Scroll smoothly to the target element, offset by header height
                window.scrollTo({
                    top: targetElement.offsetTop - 70, 
                    behavior: 'smooth'
                });
            }
        });
    });

    // Ensures the copyright year is current
    const footer = document.querySelector('footer p:first-child');
    if (footer) {
        const currentYear = new Date().getFullYear();
        // Update the year dynamically
        footer.innerHTML = footer.innerHTML.replace('2025', currentYear);
    }
});