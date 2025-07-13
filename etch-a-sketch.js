let opacity = 0.0;
let gridContainer = document.querySelector("#grid-container");
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    let num_grids = -1;
    while(!Number.isInteger(num_grids) || num_grids<=0 || num_grids>100){
        num_grids = Number(prompt("Enter the number of grids you want (up to 100):","16"));
    }
    gridContainer.innerHTML = "";
    for(let i = 0; i<num_grids; ++i){
        let gridRow = document.createElement("div");
        gridRow.setAttribute("class","grid-row");
        for(let j = 0; j<num_grids; ++j){
            grid = document.createElement("div");
            grid.setAttribute("class","grid-square");
            gridRow.appendChild(grid);
        }
        gridContainer.appendChild(gridRow);
    }
    opacity = 0;
})

gridContainer.addEventListener("mouseover", function(event) {
    console.log(opacity);
    if(event.target.classList.contains("grid-square")){
        event.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        event.target.style.opacity = opacity;
        opacity+=0.1;
    }
})