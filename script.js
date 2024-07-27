function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
    menu.classList.toggle("show");
}

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.scroll-animation');
    const profilePic = document.querySelector('.profile-pic-animation');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    if (profilePic) {
        observer.observe(profilePic);
    }
});
