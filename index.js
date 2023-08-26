const openBrowse = document.querySelector('.browse');
const menuBrowse = document.querySelector('.menuBrowser');

openBrowse.addEventListener('click', addBrowse)

function addBrowse(){
    menuBrowse.classList.toggle('open')
}
