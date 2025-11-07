function setActiveNumber(number) {
    number.classList.add('active');
    
    if(currentActive.previousElementSibling === number) {
        currentActive.classList.remove('active');
        currentWidth -= (100 / 3);
        currentWidth = Math.max(0, currentWidth);
        progressBar.style.width = currentWidth + '%';
    } else {
        currentWidth += (100 / 3);
        currentWidth = Math.min(100, currentWidth);
        progressBar.style.width = currentWidth + '%';
    }
 
    currentActive = number;
    manageControls();
}

function manageControls() {
    if(currentActive.id === 'step-1')
        prev.disabled = true;
    else
        prev.disabled = false;

    if(currentActive.id === 'step-4')
        next.disabled = true;
    else
        next.disabled = false;
}

let currentActive = document.getElementById('step-1');
let progressBar = document.querySelector('.progress-bar');
let currentWidth = 0;
progressBar.style.width = '0%';


const prev = document.getElementById('prev-btn');
prev.addEventListener('click', () => {
    setActiveNumber(currentActive.previousElementSibling);
})

const next = document.getElementById('next-btn');
next.addEventListener('click', () => {
    setActiveNumber(currentActive.nextElementSibling);
})