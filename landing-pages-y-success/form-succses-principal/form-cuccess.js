const boton = document.querySelector('button');

function volver() {
  window.location.replace('/index.html');
}

boton.addEventListener('click', volver);

setTimeout(volver, 3000);
