document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');


    function generate_div_grid(res) {
        let x, y, grid, cells;

        // Creates divs and appends it to divs "column"
        for(y = 0; y < res; y++) {

            grid = document.createElement("div");
            grid.className = "column";

            for(x = 0; x < res; x++) {
                cells = document.createElement("div");
                cells.className = "row";
                cells.innerText = (x * res) + y + 1;
                grid.appendChild(cells);
            }
            
            container.appendChild(grid);
        }
    }

    generate_div_grid(8)
});


