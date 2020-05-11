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


