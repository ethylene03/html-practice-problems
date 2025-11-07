const box = document.getElementById('box');
let lastBox = box;
let fromLeft = false;

let boxCount = 1;
function cloneBox() {
    const clone = box.cloneNode(true);

    clone.id = `box-${boxCount++}`;
    clone.classList.remove('show');
    clone.classList.add(fromLeft ? 'left' : 'right');
    
    fromLeft = !fromLeft;
    
    document.body.appendChild(clone);

    lastBox = clone;
    setTimeout(() => {
        requestAnimationFrame(() => {
            clone.classList.add('show');
        });
    }, 10)
}

function removeClone() {
    if(boxCount > 1) {
        lastBox.classList.remove('show');
        fromLeft = !fromLeft;
        const removedBox = lastBox;

        lastBox = document.getElementById(`box-${--boxCount - 1}`);
        setTimeout(() => {
            document.body.removeChild(removedBox);
        }, 100);       
    }
}

for(let i = 0; i < 2; i++) {
    cloneBox();
}

document.addEventListener('scroll', () => {
    const windowBottom = window.innerHeight;
    const boxBottom = lastBox.getBoundingClientRect().bottom;
    const boxHeight = lastBox.getBoundingClientRect().height;
    
    const remainingSpace = windowBottom - boxBottom;
    const margin = 10; 

    if (remainingSpace >= boxHeight) {
        cloneBox();
        return;
    }

    if (windowBottom < boxBottom - margin) {
        removeClone();
        return;
    }
});
