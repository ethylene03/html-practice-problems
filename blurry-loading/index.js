const image = document.querySelector('.bg-image');
const loader = document.querySelector('.loader');

let load = 0;

let int = setInterval(blurring, 30);

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);
        loader.style.display = 'none';
    }

    image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
    loader.style.opacity = scale(load, 0, 100, 1, 0);
    loader.textContent = `${scale(load, 0, 100, 0, 100)}%`;
}