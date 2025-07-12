const NUM_GRIDS = 16;
let gridContainer = document.querySelector("#grid-container");
for(let i = 0; i<NUM_GRIDS; ++i){
    let gridRow = document.createElement("div");
    gridRow.setAttribute("class","grid-row");
    for(let j = 0; j<NUM_GRIDS; ++j){
        grid = document.createElement("div");
        grid.setAttribute("class","grid-square");
        gridRow.appendChild(grid);
    }
    gridContainer.appendChild(gridRow);
}

gridContainer.addEventListener("mouseover", function(event) {
    if(event.target.classList.contains("grid-square")){
        event.target.style.backgroundColor = "blue";
    }
})