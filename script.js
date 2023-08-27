const container = document.getElementById('grid-container');
const gridSlider = document.getElementById('slider');
const sliderOutput = document.getElementById('grid-size');
const colorPicker = document.getElementById('color-picker');
const reloadGridBtn = document.getElementById('reload-grid-btn');
const defaultColor = '#000000';
let color = colorPicker.value;
let mouseDown = false;

document.body.addEventListener('mousedown', () => (mouseDown = true))
document.body.addEventListener('mouseup', () => (mouseDown = false))

const changeColor = (e) => {
    const isClickOrDown = ['click', 'mousedown'].includes(e.type);
    if ((e.type === 'mouseover' && mouseDown) || isClickOrDown) {
      e.target.style.backgroundColor = colorPicker.value;
    }
  };

colorPicker.addEventListener('change', changeColor, false);

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

window.onload = () => {
    createGrid(gridSlider.value);
    colorPicker.value = defaultColor;
}




