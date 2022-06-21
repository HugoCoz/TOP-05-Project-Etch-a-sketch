const wrapper = document.querySelector("body > div.wrapper");
const btns = document.querySelectorAll('.choice-btns > button');

//Selection of the grid format
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
    
    //Select pixels to add colors
    const pixels = document.querySelectorAll('.grid > div').forEach(pixel => {
        pixel.addEventListener('mouseover', () => addColor(pixel))
    });
}


//Add the colors to the pixels
function addColor(pixel, color) {
    color = "red"
    pixel.style.backgroundColor = color;
}

createGrid();