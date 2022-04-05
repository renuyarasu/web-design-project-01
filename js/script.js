// Web Design - Project 01

const menu_btn = document.querySelector('.menu_icon');
menu_btn.addEventListener('click',()=>{
    const menu = document.querySelector('.nav__links');
    const menuIcon = document.querySelector('.menu_icon');
    menu.classList.toggle('active');
    menuIcon.classList.toggle('active');
})