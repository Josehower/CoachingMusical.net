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