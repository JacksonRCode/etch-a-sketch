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
            console.log(gridSize);
        });
    });
}

let gridSize = 16;
createBtns();