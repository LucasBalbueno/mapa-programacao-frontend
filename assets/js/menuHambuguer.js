const btnHamburguer = document.getElementById('btnHamburguer');
const listaHamburguer = document.querySelector('.menu__lista-hamburguer');
const fundo = document.getElementById('fundo');
const btnProjects = document.querySelector('.button__projects-hamburguer');

btnHamburguer.addEventListener('click', (event) => {
    listaHamburguer.classList.toggle('menu__lista-hamburguer-activate');
    fundo.classList.toggle('menu__haburguer-fundo-activate');
    btnProjects.classList.toggle('button__projects-hamburguer-activate');
})