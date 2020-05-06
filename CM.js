const mensajes = document.querySelectorAll('.banner-home__msj ');
const bannerHome = document.querySelectorAll('.banner-home .imagen img');

const retrasoLetras = 500;
const retrasoImagen = 150;
const CambioFuncion = 8000;
let actualActivo = 0;
let imgActualActivo = 0;
console.log(bannerHome);

function wait(ms = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function cambiaMensaje() {
  if (actualActivo === 2) {
    mensajes[actualActivo].classList.remove('active');
    await wait(retrasoLetras);
    mensajes[actualActivo].classList.add('none');
    actualActivo = 0;
    mensajes[actualActivo].classList.remove('none');
    await wait(retrasoLetras);
    mensajes[actualActivo].classList.add('active');
  } else {
    mensajes[actualActivo].classList.remove('active');
    await wait(retrasoLetras);
    mensajes[actualActivo].classList.add('none');
    actualActivo += 1;
    mensajes[actualActivo].classList.remove('none');
    await wait(retrasoLetras);
    mensajes[actualActivo].classList.add('active');
  }
}

async function cambiaFondo() {
  if (imgActualActivo === 2) {
    bannerHome[imgActualActivo].classList.remove('active');
    await wait(retrasoImagen);
    imgActualActivo = 0;
    bannerHome[imgActualActivo].classList.add('active');
  } else {
    bannerHome[imgActualActivo].classList.remove('active');
    await wait(retrasoImagen);
    imgActualActivo += 1;
    bannerHome[imgActualActivo].classList.add('active');
  }
}

window.setInterval(cambiaMensaje, CambioFuncion);
window.setInterval(cambiaFondo, CambioFuncion);

/* --------------- comportamiento nav mobil--------------------------*/

const mobilNavBtn = document.querySelector('.hamburguesa');
const mobilNav = document.querySelector('.nav-mobil');

function mobilNavBtnHandler(e) {
  console.log(e.target.getAttribute('data-toggle'));
  if (e.target.getAttribute('data-toggle') === 'on') {
    mobilNav.classList.add('invisible');
    e.target.setAttribute('data-toggle', 'off');
    e.target.innerHTML = '&#9776;';
  } else {
    mobilNav.classList.remove('invisible');
    e.target.setAttribute('data-toggle', 'on');
    e.target.textContent = 'X';
  }
}

mobilNavBtn.addEventListener('click', mobilNavBtnHandler);
