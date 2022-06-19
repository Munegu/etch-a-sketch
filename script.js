const container = document.querySelector('.container');

function generateGrid() {
  for (let i = 1; i <= 256; i++) {
    console.log('toto');
    cell = document.createElement("div");
    container.appendChild(cell);
  }
}

generateGrid()