function createContainer(){
    let container = document.createElement("div")
    container.className = "container"

    let gridSection = document.querySelector(".grid-section")
    let rect = gridSection.getBoundingClientRect()
    let containerWidth = rect.width
    let containerHeight = rect.height
    let containerSize = 0.95* Math.min(containerWidth, containerHeight)

    let style = document.createElement("style")
    style.innerHTML = `
        .container{
            width: ${containerSize}px;
            height:${containerSize}px;
        }
        `
    
    document.head.appendChild(style)
    gridSection.appendChild(container)
}


function createGrid(size){
    createContainer()
    let newContainer = document.querySelector(".container")
    let cellSize = (newContainer.getBoundingClientRect().width)/size
    for (i=0; i<size; i++){
        let newRow = document.createElement("div")
        newRow.className = "row"
        for (j=0; j<size; j++){
            let newDiv = document.createElement("div")
            newDiv.className = "cell"
            newDiv.style.border = "1px solid black"
            newDiv.style.width = cellSize + "px"
            newDiv.style.height = cellSize + "px"
            newRow.appendChild(newDiv)
        }
        newContainer.append(newRow)
    }
    
    let gridSection = document.querySelector(".grid-section")
    gridSection.appendChild(newContainer)
}



function changeGridSize(e){
    let oldContainer = document.querySelector(".container")
    oldContainer.remove()
    const gridSize = prompt("Enter Grid Size")
    createGrid(gridSize)
}

const gridBtn = document.querySelector("button")
gridBtn.addEventListener("click", changeGridSize)

// createContainer()
createGrid(5)