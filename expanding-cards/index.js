const panels = document.querySelectorAll('.panel');

function removeActiveClasses(panel) {
    panels.forEach(p => {
        if(p != panel) {
            p.classList.remove('active');
        }
    })
}

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        panel.classList.add('active');
        
        removeActiveClasses(panel);
    })
})