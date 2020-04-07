const container = document.getElementById('container');

createGrid(25);

function createGrid(size){
    for (let i = 0; i < size*size; i++) {
        gridItem = document.createElement('div');
        gridItem.style.width = size + "fr";
        gridItem.style.height = size + "fr";
        gridItem.classList.add('gridBlock');
        gridItem.id = "gridBlock";
        container.appendChild(gridItem);
    };
    container.style['grid-template-columns'] = `repeat(${size}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${size}, 1fr)`;
    container.addEventListener('mouseover', hoverGrid);
}
let tiles = document.getElementsByClassName('.gridBlock');
tiles.style.brackgroundColor='red';

function hoverGrid(e){
    if (e.target.className === "gridBlock") {
        e.target.style.background = "transparent";
      }
      console.log(e.target.className)
    };

