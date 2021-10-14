(function showMenu() {
    const menuToggle = document.querySelector('.nav__burger');
    const navMenu = document.querySelector('.nav__menu');

    menuToggle.onclick = function() {
        navMenu.classList.toggle('nav__menu_active');
    }
}())