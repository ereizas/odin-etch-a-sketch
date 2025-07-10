const NUM_GRIDS = 16;
let gridContainer = document.querySelector("#grid-container");
for(let i = 0; i<NUM_GRIDS; ++i){
    let gridRow = document.createElement("div");
    gridRow.setAttribute("class","grid-row");
    for(let j = 0; j<NUM_GRIDS; ++j){
        gridRow.appendChild(document.createElement("div"));
    }
    gridContainer.appendChild(gridRow);
}