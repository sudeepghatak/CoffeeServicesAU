function toggleMenu() {
    var menu = document.getElementById('nav-menu-container');
    if (menu.classList.contains('mobile-visible')) {
        menu.classList.remove('mobile-visible');
    } else {
        menu.classList.add('mobile-visible');
    }
}