// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    once: true,
});

// Typing Animation
const typed = new Typed('.typing-text', {
    strings: ['ICT Engineering Student', 'Future Developer', 'Competitive Programmer'],
    typeSpeed: 70,
    backSpeed: 50,
    loop: true
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(11, 2, 29, 0.95)';
    } else {
        nav.style.background = 'rgba(11, 2, 29, 0.8)';
    }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll Progress Indicator
window.onscroll = function() {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("scroll-progress").style.width = scrolled + "%";
};

// Navbar Background Color Fix for Cozy Theme
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.9)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.7)';
    }
});
