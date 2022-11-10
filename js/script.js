let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header__burger');
let body = document.querySelector('body');

burger.addEventListener('click', function(){
  burger.classList.toggle('burger_active');
  menu.classList.toggle('menu_active');
  body.classList.toggle('freeze');
})