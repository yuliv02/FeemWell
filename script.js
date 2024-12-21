// =====================
// AOS (Animate On Scroll) Initialization
// =====================
AOS.init({
    duration: 1000,
    once: true, // Animate only once when element enters the viewport
    easing: 'ease-in-out', // Smooth animation
});

// =====================
// Menstrual Tracker Logic
// =====================


// =====================
// Navbar Sticky and Scroll Effects
// =====================
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').offsetHeight : 0;
    const navbar = document.querySelector('.navbar');

    if (scrolled > heroHeight / 2) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

// =====================
// Smooth Scroll for Anchor Links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// =====================
// Mobile Navbar Interactivity
// =====================
const mobileMenuButton = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

if (mobileMenuButton && navbarCollapse) {
    mobileMenuButton.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
}

// Close navbar after selecting a menu item
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => {
    item.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        }
    });
});
