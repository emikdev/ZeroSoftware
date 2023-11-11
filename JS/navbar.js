// script.js

var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

// Restaurar el scroll al estado previo antes de la recarga de la página
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Asegura que el scroll esté en la parte superior al cargar la página
window.onload = function () {
  window.scrollTo(0, 0);
};

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (currentScrollPos === 0) {
    navbar.classList.remove('hidden');
  } else {
    if (prevScrollpos > currentScrollPos) {
      navbar.classList.remove('hidden');
    } else {
      navbar.classList.add('hidden');
    }
  }

  prevScrollpos = currentScrollPos;
};
