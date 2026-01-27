// Close navbar when clicking outside (for mobile)
document.addEventListener('click', function (e) {
    const navbar = document.querySelector('.custom-navbar');

    const navbarCollapse = document.getElementById('navbarNav');
    if (!navbarCollapse.classList.contains('show')) return;

    if (!navbar.contains(e.target)) {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
    }
});

// Close navbar when clicking close button (for mobile)
const closeBtn = document.querySelector('.close-navbar');
const navbarCollapse = document.getElementById('navbarNav');

if (closeBtn && navbarCollapse) {
    closeBtn.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        bsCollapse.hide();
    });
}
