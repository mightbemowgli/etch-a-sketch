const defaultColor = '#000000';
const defaultMode = 'color';
let currentMode = defaultMode;

setCurrentMode = (newMode) => {
    activateButton(newMode);
    currentMode = newMode;
}

const container = document.getElementById('grid-container');
const gridSlider = document.getElementById('slider');
const sliderOutput = document.getElementById('grid-size');
const colorPicker = document.getElementById('color-picker');
const reloadGridBtn = document.getElementById('reload-grid-btn');
const colorMode = document.getElementById('color-mode');
const eraserMode = document.getElementById('eraser-mode');
colorMode.onclick = () => setCurrentMode('color');
eraserMode.onclick = () => setCurrentMode('eraser');

let mouseDown = false;
document.body.addEventListener('mousedown', () => (mouseDown = true))
document.body.addEventListener('mouseup', () => (mouseDown = false))

changeColor = (e) => {
    const isClickOrDown = ['click', 'mousedown'].includes(e.type);
    if ((e.type === 'mouseover' && mouseDown) || isClickOrDown) {
        if (currentMode === 'color') {
            e.target.style.backgroundColor = colorPicker.value;
        } 
        else if (currentMode === 'eraser') {
            e.target.style.backgroundColor = '#FFFFFF';
        }
    }
  };

colorPicker.addEventListener('change', changeColor, false);

createGrid = size => {
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

sliderOutput.textContent = gridSlider.value + ' x ' + gridSlider.value;
gridSlider.oninput = function() {
    sliderOutput.textContent = this.value + ' x ' + this.value;
    reloadGrid();
}

clearGrid = () => {
    container.textContent = '';
}

reloadGrid = () => {
    clearGrid();
    createGrid(gridSlider.value);
}

reloadGridBtn.addEventListener('click', reloadGrid);

activateButton = newMode => {
    if (currentMode === 'color') {
        colorMode.classList.remove('active');
    } else
    if (currentMode === 'eraser') {
        eraserMode.classList.remove('active');
    }

    if (newMode === 'color') {
        colorMode.classList.add('active');
    } else
    if (newMode === 'eraser') {
        eraserMode.classList.add('active');
    }
}

window.onload = () => {
    createGrid(gridSlider.value);
    activateButton(defaultMode);
    colorPicker.value = defaultColor;
}




