let gridContainer = document.querySelector("#grid-container");
let num_grids = 16;
let btn = document.querySelector("button");
btn.addEventListener("click", function(){
    while(1){
        let temp = Number(prompt("Enter the number of grids you want (up to 100):","16"));
        if(Number.isInteger(temp) && temp>0 && temp<=100){
            num_grids = temp;
            break;
        }
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
})

gridContainer.addEventListener("mouseover", function(event) {
    if(event.target.classList.contains("grid-square")){
        event.target.style.backgroundColor = "blue";
    }
})