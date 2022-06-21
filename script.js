const wrapper = document.querySelector("body > div.wrapper");
const btns = document.querySelectorAll('.choice-btns > button');

const nbGrid = btns.forEach(btn => {
    const nb = parseInt(btn.textContent);
    btn.addEventListener('click', () => setGrid(nb));
});


function createGrid () {
    const newGrid = document.createElement('div');
    newGrid.setAttribute('class', 'grid');
    wrapper.appendChild(newGrid);

};

function setGrid (nb) {
    const grid = document.querySelector("body > div.wrapper > div.grid");
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    grid.style = `width: 50vw; height: 80vh;margin: 0 auto; display: grid; grid-template-columns: repeat(${nb}, 1fr); grid-template-rows: repeat(${nb}, 1fr)`;
    for(i=0; i<nb*nb; i++) {
        const div = document.createElement('div');
        div.setAttribute('class', i);
        grid.appendChild(div);
    }
}

createGrid();