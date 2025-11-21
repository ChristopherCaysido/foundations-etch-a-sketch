const mainContainer = document.querySelector("#main-container")

function changeColor(element){
    element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

function createSquare(){
    const square = document.createElement('div')
    square.classList.add('grid-square');
    square.addEventListener('mouseenter',()=>changeColor(square))
    return square
}

function createResetButton(){
    const resetButton = document.createElement('button')
    resetButton.innerText = 'Reset Etch-A-Sketch'
    resetButton.addEventListener('click',()=>{
        const newGridSize = prompt('What is the new size of the grid?')
        const oldGrid = document.querySelector("#grid")
        oldGrid.remove()
        createGrid(newGridSize)
        resetButton.remove()
    })
    mainContainer.appendChild(resetButton)
}

function createRow(rowSize=16){
    const row = document.createElement('div')
    for(let i = 0; i < rowSize; i++){
        const square = createSquare()
        row.appendChild(square)
    }
    row.classList.add('row')
    return row
}

function createGrid(gridSize=16){
    createResetButton()
    const grid = document.createElement('div')
    for(let i = 0; i < gridSize; i++){
        const gridRow = createRow(gridSize)
        grid.appendChild(gridRow)
    }
    grid.id = "grid"
    mainContainer.appendChild(grid)
}

createGrid()
