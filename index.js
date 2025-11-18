const mainContainer = document.querySelector("#main-container")

function changeColor(element){
    element.classList.add('color-change')
}

function createSquare(){
    const square = document.createElement('div')
    square.classList.add('grid-square');
    square.addEventListener('mouseenter',()=>changeColor(square))
    return square
}

function createRow(){
    const row = document.createElement('div')
    for(let i = 0; i < 16; i++){
        const square = createSquare()
        row.appendChild(square)
    }
    row.classList.add('row')
    return row
}

function createGrid(){
    const grid = document.createElement('div')
    for(let i = 0; i < 16; i++){
        const gridRow = createRow()
        grid.appendChild(gridRow)
    }
    mainContainer.appendChild(grid)
}

createGrid()
