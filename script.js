const wrapper = document.querySelector("body > div.wrapper");
const btns = document.querySelectorAll('.choice-btns > button');

//Selection of the grid format (will be changed later for a slider 1x1 to 64x64)
const gridFormat = btns.forEach(btn => {
    const nb = parseInt(btn.textContent);
    btn.addEventListener('click', () => setGrid(nb));
});


//Create the starting grid
function createGrid () {
    const newGrid = document.createElement('div');
    newGrid.setAttribute('class', 'grid');
    wrapper.appendChild(newGrid);
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
function addColor(pixel, color) {
    color = "red"
    pixel.style.backgroundColor = color;
}

createGrid();