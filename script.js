const drawPad = document.getElementById("draw-pad");

document.addEventListener('DOMContentLoaded', function () {
    createDrawPad(16);
    const scroller = document.getElementById('scroller');
    const selectedValue = document.getElementById('grid-resolution');

    // Initial update
    selectedValue.innerText = `Selected Value: ${scroller.value}`;

    // Event listener for scroller change
    scroller.addEventListener('input', function () {
        const value = scroller.value;
        selectedValue.innerText = `Selected Value: ${value}`;
        while(drawPad.firstChild) {
            drawPad.removeChild(drawPad.firstChild);
        }
        createDrawPad(value);
        // You can use the 'value' variable for further processing or sending it to a server.
    });
});


function createDrawPad(cellNumber) {
    const dynamicWidth = innerWidth / 3; // Set width to half of the viewport width
    drawPad.style.width = `${dynamicWidth}px`;
    createDrawGrid(dynamicWidth, cellNumber)
}

function createDrawGrid(dynamicWidth, cellNumber) {
    const gridWidth = dynamicWidth / cellNumber;
    for (i = 0; i < cellNumber; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'row';
        for (j = 0; j < cellNumber; j++) {
            newRow.appendChild(createCell(gridWidth));
        }
        drawPad.appendChild(newRow);
    }
}

function createCell(gridWidth) {
    let newCell = document.createElement('div')
    newCell.className = 'cell';
    newCell.style.width = `${gridWidth}px`;
    newCell.style.height = `${gridWidth}px`;
    newCell.addEventListener('mouseout', () => {
        newCell.style.backgroundColor = 'black';
    });
    return newCell;
}
