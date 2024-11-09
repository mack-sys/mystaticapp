document.addEventListener('DOMContentLoaded', () => {
    // Create an IntersectionObserver to detect when cards enter the viewport
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'animate' class when the card enters the viewport
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Select all cards to observe
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => observer.observe(card));

    // Add fade-in animation for header, section title, and footer
    const fadeInElements = document.querySelectorAll('.header, .section-title, .footer');
    fadeInElements.forEach(element => {
        const fadeObserver = new IntersectionObserver((entries, fadeObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    fadeObserver.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, { threshold: 0.5 });
        fadeObserver.observe(element);
    });
});
