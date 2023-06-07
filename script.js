function createBtns() {
    let gridBtn = document.querySelectorAll('.change');
    gridBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList[1] === 'plus') {
                if (gridSize===100) {
                    return;
                }
                gridSize++;
            }
            else {
                if (gridSize===5) {
                    return;
                }
                gridSize--;
            }
            changeGridText();
        });
    });
}

function changeGridText() {
    let sizeText = document.querySelector('.grid-dim-text');
    sizeText.textContent = gridSize + 'x' + gridSize;

    newGrid();
}

function makeTile() {
    let dim = 800 / gridSize;
    let tile = document.createElement('div');
    tile.style.width = dim + 'px';
    tile.style.height = dim + 'px';
    tile.addEventListener('mouseover', () => {
        tile.classList.add('success')
    });

    return tile;
}

function makeGrid() {
    let container = document.querySelector('.grid');
    let num = gridSize * gridSize;

    for (let i=0; i<num; i++) {
        let tile = makeTile();        
        container.appendChild(tile);       
    }
}

function newGrid() {   
    let container = document.querySelector('.grid');
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

    makeGrid();
}

let gridSize = 16;
createBtns();

makeGrid();


