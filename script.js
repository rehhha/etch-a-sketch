//grid creation
function createSquares(squaresPerRow = 16) {

  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${squaresPerRow}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${squaresPerRow}, 1fr)`;
  
  for(let i = 0; i < squaresPerRow*squaresPerRow; i++){
    const square = document.createElement('div');
    square.classList.add('square');

    grid.appendChild(square);
  }
  hover();
}

function removeSquares() {
  const grid = document.getElementById('grid');
  while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
  }
}

function hover() {
  
  const squares = document.querySelectorAll('.square');

  squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
      square.classList.add('square-paint');
    });
  });
}

function createButton() {

  const content = document.getElementById('content');

  const settings = document.createElement('div');
  const btn = document.createElement('button');
  btn.textContent = 'Squares per side';
  settings.appendChild(btn);

  content.appendChild(settings);
}

function setNumberOfSquares() {
  const btn = document.querySelector('button');
  
  btn.addEventListener('click', () => {

    let numberOfSquares = 500;

    while(numberOfSquares > 100){
      numberOfSquares = parseInt(prompt('Enter a number of squares per side(less than 100): '));
    }

    removeSquares();
    createSquares(numberOfSquares);
    
  });
}


createSquares();
createButton();
setNumberOfSquares();



