//Variables
const wrapper = document.querySelector(".wrapper");
const slider = document.querySelector('#myRange');
const slideValue = slider.addEventListener('click', () => slide());
const selectColor = document.querySelectorAll('div.colors > div.item-color').forEach(choosenColor => {
    choosenColor.addEventListener('click', () => switchColor(choosenColor));
});
const reset = document.querySelector('div.reset > button').addEventListener('click', () => resetGrid());

let color = "red";


//Create the starting grid
function createGrid () {
    const newGrid = document.createElement('div');
    const actualFormat = document.createElement('span');
    newGrid.setAttribute('class', 'grid');
    wrapper.appendChild(newGrid);
    setGrid(16);
};

function slide() {
    setGrid(slider.value);
    const textValue = document.querySelector('.grid-value');
    textValue.innerHTML = `${slider.value} x ${slider.value}`;
}

//Change the format of the grid
function setGrid(nb) {
    const grid = document.querySelector(".grid");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    grid.style = `display: grid; grid-template-columns: repeat(${nb}, 1fr); grid-template-rows: repeat(${nb}, 1fr)`;
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


function switchColor(choosenColor) {
    color = choosenColor.style.backgroundColor;
    return color;
}

function resetGrid() {
    document.querySelectorAll('div.grid > div').forEach(div => {
        div.style.backgroundColor = "white";
    });
};


createGrid();



//TO ADD : (PIXEL ART AU LANCEMENT)