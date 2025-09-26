// sets square color to red else grey
function colorSquare(event) {
    let square = event.target.closest(".square")
    switch (square.style.backgroundColor) {
    case "red": { square.style.backgroundColor = "grey" }; break;
    default:  { square.style.backgroundColor = "red" }; break;
    }
}

// returns square class div element with mouseover event listener
function getSquareDiv() {
    let squareDiv = document.createElement("div")
    squareDiv.setAttribute("class", "square")
    squareDiv.addEventListener("mouseover", (event) => colorSquare(event))
    return squareDiv
}

// returns container class div element containing 16 squares
function get16SquareContainer() {
    let squareList = Array.apply(null, Array(16)).map(() => getSquareDiv())

    let containerDiv = document.createElement("div")
    containerDiv.setAttribute("class", "container")
    containerDiv.append(...squareList)

    return containerDiv
}

// stack containers along the body element box axis
for (let i = 0; i < 16; i++) {
    let container = get16SquareContainer()
    document.body.append(container)
}