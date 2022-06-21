const selectFormat = document.querySelector('.select-format');
const wrapper = document.querySelector("body > div.wrapper");
const slider = document.querySelector('#myRange');
const gridFormat = slider.addEventListener('click', function slide() {
    setGrid(slider.value);
    const textValue = document.querySelector('.grid-value');
    textValue.innerHTML = `${slider.value} x ${slider.value}`;
});

let color = "red";


//Create the starting grid
function createGrid () {
    const newGrid = document.createElement('div');
    const actualFormat = document.createElement('span');
    newGrid.setAttribute('class', 'grid');
    wrapper.appendChild(newGrid);
    setGrid(16);
};


//Change the format of the grid
function setGrid(nb) {
    const grid = document.querySelector("body > div.wrapper > div.grid");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    grid.style = `width: 50vw; height: 80vh;margin: 0 auto; display: grid; grid-template-columns: repeat(${nb}, 1fr); grid-template-rows: repeat(${nb}, 1fr)`;
    for (i = 0; i < nb * nb; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', i);
        grid.appendChild(div);
    }
    
    //Select pixels to add colors on the new grid generated
    const pixels = document.querySelectorAll('.grid > div').forEach(pixel => {
        pixel.addEventListener('mouseover', () => addColor(pixel))
    });
}


//Adding the colors to the pixels (+ later : choosing the color)
function addColor(pixel) {
    pixel.style.backgroundColor = color;
}

createGrid();