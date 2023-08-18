// create grid
let container = document.querySelector(".container")
for (i=0; i<16; i++){
    let newRow = document.createElement("div")
    newRow.className = "row"
    for (j=0; j<16; j++){
        let newDiv = document.createElement("div")
        newDiv.className = "cell"
        newDiv.style.border = "1px solid black"
        newDiv.style.width = '40px'
        newDiv.style.height = '40px'
        newRow.appendChild(newDiv)
    }
    container.append(newRow)
}

