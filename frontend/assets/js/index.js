const btnMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});