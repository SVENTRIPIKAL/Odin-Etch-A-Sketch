// sets square color to Red else Grey
function colorSquare(event) {
    let square = event.target.closest(".square")
    switch (square.style.backgroundColor) {
        case "red": { square.style.backgroundColor = "grey" }; break;
        default:  { square.style.backgroundColor = "red" }; break;
    }
}

// returns an approximate height to be distributed across 960px
function getSquareHeight(n) {
    return Math.floor(960 / n)
}

// returns square class div element with height of N & mouseover event listener
function getSquareDiv(n) {
    let squareDiv = document.createElement("div")
    squareDiv.setAttribute("class", "square")
    squareDiv.style.height = `${getSquareHeight(n)}px`
    squareDiv.addEventListener("mouseover", (event) => colorSquare(event))
    return squareDiv
}

// returns container class div element containing N squares
function getSquareContainer(n) {
    let squareList = Array.apply(null, Array(n)).map(() => getSquareDiv(n))
    let containerDiv = document.createElement("div")
    containerDiv.setAttribute("class", "container")
    containerDiv.append(...squareList)
    return containerDiv
}

// stacks a list of N containers along the body element box axis
function createGrid(n) {
    let containerList = Array.apply(null, Array(n))
                             .map(() => getSquareContainer(n))
    document.body.append(...containerList)
}

// displays popup to receive new grid size via user input
function newGridSizePrompt() {
    let input = prompt("Enter New Grid Size (Max: 100): ")
}

// creates gridReset class button with click event listener
function createGridResetButton() {
    let button = document.createElement("button")
    button.setAttribute("class", "gridReset")
    button.textContent = "RESET GRID"
    button.addEventListener("click", () => newGridSizePrompt())
    document.body.append(button)
}



// create grid reset button
createGridResetButton()

// create main default size grid
createGrid(16)