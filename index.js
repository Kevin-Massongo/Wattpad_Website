// ----------------Browse Part--------------------------------

const openBrowse = document.querySelector('.browse');
const menuBrowse = document.querySelector('.menuBrowser');

openBrowse.addEventListener('click', addBrowse)

function addBrowse(){
    menuBrowse.classList.toggle('open');
    menuCommunity.classList.remove('open')
    menuWrite.classList.remove('open')
}

// ----------------Commnunity Part--------------------------------


const openCommunity = document.querySelector('.community')
const menuCommunity = document.querySelector('.menuCommunity')

openCommunity.addEventListener('click', addCommunity)

function addCommunity(){
    menuCommunity.classList.toggle('open')
    menuBrowse.classList.remove('open')
    menuWrite.classList.remove('open')
}

// ----------------Write Part--------------------------------
 
const openWrite = document.querySelector('.write')
const menuWrite = document.querySelector('.menuWrite')


openWrite.addEventListener('click', addWrite)

function addWrite(){
    menuWrite.classList.toggle('open')
    menuCommunity.classList.remove('open')
    menuBrowse.classList.remove('open')
}


