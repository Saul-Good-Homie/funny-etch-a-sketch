const container = document.getElementById('container');

// let size = 25;

createGrid(40);

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


//function to change to Black
// function hoverGrid(e){
//     style.classList.remove('gridBlock');
//     style.backgroundColor= 'red';

//     };

  //function to change to random RGM
//   function hoverRGB(e){
//     var x = Math.floor(Math.random() * 256);
//     var y = Math.floor(Math.random() * 256);
//     var z = Math.floor(Math.random() * 256);
//     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    
//     if (e.target.className === "gridBlock"){
//         e.target.style.background = bgColor;
//     }
//     } 

// const menu = document.getElementById('buttons');

// menu.addEventListener("click", function(e){
//     resetGrid();
//     if (e.target.id == "rgb") {
//     container.removeEventListener("mouseover", hoverGrid);
//     container.addEventListener("mouseover", hoverRGB);
//     }
//     else if (e.target.id == "reset") {
//         container.removeEventListener("mouseover", hoverRGB);
//         container.addEventListener("mouseover", hoverGrid);
//     }
// })

// reset grid to black and white
    // function resetGrid(){
    //     const gridTile = document.getElementsByClassName('gridBlock');
    //       for (i=0; i < gridTile.length; i++){
    //           gridTile[i].style.background = "white";
    //           } 
    //       }