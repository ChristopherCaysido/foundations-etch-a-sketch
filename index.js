const mainContainer = document.querySelector("#main-container")


function createSquare(){
    const square = document.createElement('div')
    square.classList.add('grid-square');
    mainContainer.appendChild(square)
}

