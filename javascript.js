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
    addCellHoverEffect()
}

function getRandomRGB(){
    let r = Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)
    return `rgb(${r},${g},${b})`
}

function addCellHoverEffect(){
    let cells = document.querySelectorAll(".cell")
    cells.forEach(cell => cell.addEventListener('mouseenter', () => {
        if(isMouseDown){cell.style.backgroundColor=getRandomRGB()}
    }))
    cells.forEach(cell => cell.addEventListener("click", () => cell.style.backgroundColor=getRandomRGB()))
}

const gridBtn = document.querySelector("button")
gridBtn.addEventListener("click", changeGridSize)

let isMouseDown = false
document.addEventListener("mouseup", () => {
    isMouseDown = false
})
document.addEventListener('mousedown', (e) => {
    if (e.button === 0) { 
        isMouseDown = true;
    }
});

createGrid(16)
addCellHoverEffect()


