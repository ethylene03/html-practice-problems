const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const body = document.getElementById('background');

menu.addEventListener('click', () => {
    body.classList.add('show-nav');
})

close.addEventListener('click', () => {
    body.classList.remove('show-nav');
})