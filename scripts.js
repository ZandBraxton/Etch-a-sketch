const container = document.getElementById('container');
let r = 16;
let c = 16;
const btn = document.querySelector('#reGrid');
const clear = document.querySelector('#clear');
clear.addEventListener('click', clearGrid)
btn.addEventListener('click', reGrid);
makeRows(r, c);

function makeRows (rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div')
        container.appendChild(cell).className = "grid-item";
    };
    listen()
};

function listen() {
    const cell = document.getElementsByClassName('grid-item')
for (let i = 0; i < cell.length; i++) {
    cell[i].addEventListener('mouseover', function() {
        cell[i].classList.add('color')
    })
    }
}

function reGrid () {
    resetGrid()
    while (true) {
        let input = prompt("Select Grid Size (Max 100)")
        if (input > 0 && input <= 100) {
            makeRows(input, input)
            return false
        }
    }
}

function resetGrid () {
    let cell = document.querySelectorAll('.grid-item')
    for (let i = 0; i < cell.length; i++) {
        cell[i].remove()
    }
}

function clearGrid() {
    let cell = document.querySelectorAll('.grid-item')
    for (let i = 0; i < cell.length; i++) {
        cell[i].classList.remove('color')
    }
}