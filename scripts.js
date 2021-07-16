//I need to make a loop that creates 256 divs, 16 rows of 16 divs that are a square
//Use grid or flexbox?

const container = document.getElementById('container');

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div')
        // cell.innerText = (c + 1);
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(16, 16);

const cell = document.getElementsByClassName('grid-item')
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function() {
        cell[i].classList.add('color')
    })
}

