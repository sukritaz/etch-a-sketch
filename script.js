const drawPad = document.getElementById("draw-pad");
let drawOption = '';
let cellNumber = 16;

document.addEventListener('DOMContentLoaded', function () {
    createDrawPad(16);
    const scroller = document.getElementById('scroller');
    const gridResolution = document.getElementById('grid-resolution');

    // Initial update
    gridResolution.innerText = `Selected Value: ${scroller.value}`;

    // Event listener for scroller change
    scroller.addEventListener('input', function () {
        cellNumber = scroller.value;
        gridResolution.innerText = `Selected Value: ${cellNumber}`;
        while(drawPad.firstChild) {
            drawPad.removeChild(drawPad.firstChild);
        }
        createDrawPad(cellNumber);
        // You can use the 'value' variable for further processing or sending it to a server.
    });

    document.getElementById('pencil').addEventListener('click', () => {
        drawOption = 'pencil';
        while(drawPad.firstChild) {
            drawPad.removeChild(drawPad.firstChild);
        }
        createDrawPad(cellNumber);
    });

    document.getElementById('rainbow').addEventListener('click', () => {
        drawOption = 'rainbow';
        while(drawPad.firstChild) {
            drawPad.removeChild(drawPad.firstChild);
        }
        createDrawPad(cellNumber);
    });

    document.getElementById('clear').addEventListener('click', () => {
        while(drawPad.firstChild) {
            drawPad.removeChild(drawPad.firstChild);
        }
        createDrawPad(cellNumber);
    });
    document.getElementById('erase').addEventListener('click', () => {
        drawOption = 'erase';
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
    newCell.addEventListener('mouseover', () => {
        switch(drawOption) {
            case 'pencil':
                newCell.style.backgroundColor = 'black';
                break;
            case 'rainbow':
                newCell.style.background = (() => {
                    const red = Math.floor(Math.random() * 256);
                    const green = Math.floor(Math.random() * 256);
                    const blue = Math.floor(Math.random() * 256);
                    return `rgb(${red}, ${green}, ${blue})`;
                })();
                break;
            case 'erase':
                newCell.style.backgroundColor = 'white';
                break;
            default:
                newCell.style.backgroundColor = 'black';
                break;
        }
        
    });
    return newCell;
}
