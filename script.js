document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container')


    function generate_div_grid(res) {
        let x, y, grid, cells

        // Creates divs and appends it to divs "column"
        for(y = 0; y < res; y++) {

            grid = document.createElement("div")
            grid.className = "column"

            for(x = 0; x < res; x++) {
                cells = document.createElement("div")
                cells.className = "row"
                grid.appendChild(cells)

                cells.addEventListener('mouseover', (event) => {
                    event.target.style.backgroundColor = 'black'
                })
            }
            
            container.appendChild(grid)
        }
    }

    generate_div_grid(16)

});


