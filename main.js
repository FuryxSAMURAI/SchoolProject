// MENU MOBILE
const haderMenu = document.getElementById('menu');
const menuBlock = document.getElementById('blockMenu');
const closeMenuBlock = document.getElementById('closeBlockMenu');
haderMenu.onclick = ()=>{
    menuBlock.style.position = 'fixed';
    menuBlock.style.top = '0px';
    menuBlock.style.left = '0px';
}
closeBlockMenu.onclick = ()=>{
    menuBlock.style.position = 'fixed';
    menuBlock.style.top = '0px';
    menuBlock.style.left = '-3000px';
}
