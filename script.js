function reset() {
    gridSize = 16;
    tileColor = "black";
    rainbowOn = false;
    opacOn = false;
    opacVal = 0;
}

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
    tile.addEventListener('click', () => {
        if (rainbowOn) {
            tileColor = randomRgb();
        }
        tile.style.backgroundColor = tileColor;
        if (opacOn) {
            tile.style.opacity = changeOpacity();
        }
        else {
            tile.style.opacity = 1;
        }
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

function randomRgb() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255); 

    return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function changeOpacity() {
    let ret = opacVal;
    opacVal += 0.1;
    if (opacVal > 1) {
        opacVal = 0;
    }
    
    return ret;
}

function toolBoxButtons() {
    let buttons = document.querySelectorAll('.colorBtn');
    buttons.forEach((button) => {
        if (button.classList.contains('color-selector')) {
            button.addEventListener('change', (e) => {
                rainbowOn = false;
                tileColor = e.target.value;
            })
        }
        else if (button.classList.contains('rainbow')) {
            button.addEventListener('click', () => {
                rainbowOn = true;
            })
        }
        else if (button.classList.contains('opac')) {
            button.addEventListener('click', () => {
                if (!opacOn) {
                    opacOn = true;
                }
                else {
                    opacOn = false;
                }
            })
        }
        else {
            button.addEventListener('click', () => {
            rainbowOn = false;
            tileColor = getComputedStyle(button).backgroundColor;
            });
        }
    })
    let resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click', () => {
        reset();
        changeGridText();
    });

}

let gridSize = 16;
let tileColor = "black";
let rainbowOn = false;
let opacOn = false;
let opacVal = 0;

createBtns();
makeGrid();
toolBoxButtons();

