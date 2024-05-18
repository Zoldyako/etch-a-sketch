document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');


    function generate_div_grid(res) {
        let x, y, grid, cells;

        // Creates divs and appends it to divs "column"
        for(x = 0; x < res; x++){

            grid = document.createElement("div");
            grid.className = "column";

            for(y = 0; y < res; y++) {
                cells = document.createElement("div");
                cells.className = "row";
                cells.innerText = (y * res) + x ;
                grid.appendChild(cells);
            }
            
            container.appendChild(grid);
        }
    }

    generate_div_grid(8)
});


