const createGrid = size => {
    const container = document.getElementById('grid-container');

    for (let i = 0; i < size ** 2; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }

    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}


createGrid(16);