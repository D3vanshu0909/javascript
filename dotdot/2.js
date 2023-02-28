const menuToggle = document.getElementById('js-navbar-toggle');
const mainNav = document.getElementById('js-menu');

menuToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});
