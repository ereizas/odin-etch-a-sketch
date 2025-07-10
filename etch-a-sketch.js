const NUM_GRIDS = 16;
let grid_rows = new Array(NUM_GRIDS);
for(let i = 0; i<NUM_GRIDS; ++i){
    let row = new Array(NUM_GRIDS);
    for(let j = 0; j<NUM_GRIDS; ++j){
        row[j] = document.createElement("div");
    }
    grid_rows[i] = row;
}
let gridContainer = document.querySelector("#grid-container");