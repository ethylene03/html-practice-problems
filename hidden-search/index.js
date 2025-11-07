const button = document.querySelector('.search--button');
const input = document.querySelector('.search--input');
const container = document.querySelector('.search');

button.addEventListener('click', () => {
    if(container.classList.contains('active'))
        container.classList.remove('active');
    else
        container.classList.add('active');

    input.focus();
})