
// Get Elements
const mobileToggleBtn = document.querySelector(".mobile-toggle-btn i");
const navLinks = document.querySelector(".nav-links");

// Add class active to nav for display navbar on click
mobileToggleBtn.onclick = function () {

    if (getComputedStyle(navLinks).maxWidth == '0px')
        navLinks.style.maxWidth = navLinks.scrollWidth + 'px';
    else
        navLinks.style.maxWidth = '0px';

    mobileToggleBtn.classList.toggle("fa-times");
}