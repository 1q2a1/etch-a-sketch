// create grid
function createGrid(size){
    let body = document.querySelector("body")
    let container = document.createElement("div")
    container.className = "container"

    for (i=0; i<size; i++){
        let newRow = document.createElement("div")
        newRow.className = "row"
        for (j=0; j<size; j++){
            let newDiv = document.createElement("div")
            newDiv.className = "cell"
            newDiv.style.border = "1px solid black"
            newDiv.style.width = '40px'
            newDiv.style.height = '40px'
            newRow.appendChild(newDiv)
        }
        container.append(newRow)
    }
    body.appendChild(container)
}

function changeGridSize(e){
    console.log("hi")
    const gridSize = prompt("Enter Grid Size")
    let container = document.querySelector(".container")
    container.remove()
    createGrid(gridSize)
}

const gridBtn = document.querySelector("button")
gridBtn.addEventListener("click", changeGridSize)

createGrid(2)