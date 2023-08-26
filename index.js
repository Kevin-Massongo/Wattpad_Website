const openBrowse = document.querySelector('.browse');
const menuBrowse = document.querySelector('.menuBrowser');

openBrowse.addEventListener('click', addBrowse)

function addBrowse(){
    menuBrowse.classList.toggle('open');
}

const openCommunity = document.querySelector('.community')
const menuCommunity = document.querySelector('.menuCommunity')

openCommunity.addEventListener('click', addCommunity)

function addCommunity(){
    menuCommunity.classList.toggle('open')
}