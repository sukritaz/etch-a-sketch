const drawPad = document.getElementById("draw-pad");

createUI();

function createUI() {
    createDrawPad();
}

function createDrawGrid(dynamicWidth) {
    const cellNumber = 16;
    const gridWidth = dynamicWidth/cellNumber;

    for(i = 0; i<cellNumber; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        for(j = 0; j < cellNumber; j++) {
            let newCell = document.createElement('div')
            newCell.className = 'cell';
            newCell.style.width = `${gridWidth}px`;
            newCell.style.height = `${gridWidth}px`;
            newCell.addEventListener('mouseout', ()=> {
                newCell.style.backgroundColor = 'black';
            });
            newRow.appendChild(newCell);
        }
        drawPad.appendChild(newRow);
    }
}

function createDrawPad() {
    const dynamicWidth = innerWidth / 3; // Set width to half of the viewport width
    drawPad.style.width = `${dynamicWidth}px`;
    createDrawGrid(dynamicWidth)
}
