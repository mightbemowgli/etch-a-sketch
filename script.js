const container = document.getElementById('grid-container');

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const changeColor = (e) => {
    if (e.type === 'mouseover' && mouseDown || e.type === 'click') {
        e.target.style.backgroundColor = 'black';
    }
}

const createGrid = size => {
    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        div.addEventListener('mouseover', changeColor);
        div.addEventListener('mousedown', changeColor);
        div.addEventListener('click', changeColor);
        container.appendChild(div);
    }

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

// create function for grid size input
createGrid(16);


