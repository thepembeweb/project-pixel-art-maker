
/**
* @description Creates Grid Content
*/
function makeGrid() {

    const inputHeight = document.getElementById('inputHeight');
    const inputWidth = document.getElementById('inputWidth');

    const content = generateGridContent(inputHeight.value, inputWidth.value);
    document.getElementById('pixelCanvas').innerHTML = content;

    document.querySelectorAll('#pixelCanvas td')
        .forEach(e => e.addEventListener('click', cellClickHandler));

}

/**
* @description Generates Grid Content
* @param {number} numberOfRows
* @param {number} numberOfColumns
* @returns {string} Grid Content with specified numberOfRows and numberOfColumns
*/
function generateGridContent(numberOfRows, numberOfColumns) {
    let tableContent = '';
    for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
        let cellContent = '';

        for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
            cellContent += `<td></td>`;
        }
        tableContent += `<tr>${cellContent}</tr>`;
    }
    return tableContent;
}

/**
* @description Handles the cell onclick event on the grid to change the cell's background color
* @param {event} event
*/
function cellClickHandler(event) {
    let colorPicker = document.getElementById('colorPicker');
    event.target.style.background = colorPicker.value;
}

// Polyfill for forEach
if (!HTMLCollection.prototype.forEach) {
    Object.defineProperty(HTMLCollection.prototype, 'forEach', {
        value: Array.prototype.forEach
    });
}

