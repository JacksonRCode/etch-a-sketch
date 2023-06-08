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
        if (rainbowOn) {
            tileColor = randomRgb();
        }
        
        tile.style.backgroundColor = tileColor;
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

function colorChange() {
    let buttons = document.querySelectorAll('.colorBtn');
    buttons.forEach((button) => {
        if (button.classList.contains('color-selector')) {
            button.addEventListener('change', (e) => {
                rainbowOn = false;
                console.log('hello');
                tileColor = e.target.value;
            })
        }
        else if (button.classList.contains('rainbow')) {
            button.addEventListener('click', () => {
                rainbowOn = true;
            })
        }
        else {
            button.addEventListener('click', () => {
            rainbowOn = false;
            tileColor = getComputedStyle(button).backgroundColor;
            });
        }
    })

}

let gridSize = 16;
let tileColor = "black";
let rainbowOn = false;

createBtns();
makeGrid();
colorChange();

