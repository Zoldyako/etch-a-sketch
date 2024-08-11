document.addEventListener('DOMContentLoaded', () => {
    
    function generate_grid(res) {

        let x, y, grid, cell
        
        // Creates divs and appends it to divs "column"
        for(y = 0; y < res; y++) {
            
            grid = document.createElement("div")
            grid.className = "column"

            for(x = 0; x < res; x++) {
                cell = document.createElement("div")
                cell.className = "cell"
                grid.appendChild(cell)

                cell.addEventListener('mousedown', (event) => {

                    switch (event.button) {
                        case 0:
                            event.target.style.backgroundColor = 'black'
                            break
                        case 1:
                            event.target.style.backgroundColor = 'white'
                        case 2:
                            event.target.style.backgroundColor = 'white'
                            break
                    }
                })
            }

            container.appendChild(grid)
        }
    }


    function canvas_size() {
        res = prompt("What canvas size do you want? Max of 100")

        if (res > 100) {
            generate_grid(100)
            return
        }

        generate_grid(res)
    }


    const container = document.getElementById('container')
    const btn_grid_size = document.getElementById('grid-size')
    const btn_erase = document.getElementById('erase-canvas')
    
    btn_grid_size.addEventListener('mousedown', canvas_size)
    btn_erase.addEventListener('click', () => { })

    generate_grid(10)
    
});