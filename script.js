const container = document.querySelector('.container');
const button = document.getElementById('clear');

function generateGrid() {
  for (let i = 1; i <= 256; i++) {
    cell = document.createElement("div");
    container.appendChild(cell);
  }
}

function addHoverEvent() {
  allCells = document.querySelectorAll(".container div");
  for (let i = 0; i < 256; i++) {
    allCells[i].addEventListener("mouseover", setBlackColour);
  }
}
function setBlackColour() {
  this.style.backgroundColor = "black";
}


function clear() {
  button.addEventListener('click', () => {
    for (let i = 0; i < 256; i++) {
      allCells[i].style.backgroundColor = "white";
    }
  })
}

generateGrid();
addHoverEvent();
clear();