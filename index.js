const canvas = document.querySelector(".gridCanvas");
const gridSizeButton = document.querySelector(".grid-size-btn");
const eraser = document.querySelector('.eraser');
const gridRange = document.querySelector('.grid-range');
const colorPicker = document.querySelector('.colorPicker');

// random color generator
function randomRGB() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
function grid(dimensions) {

    let colorOfSketch = 'rgb(0,0,0)'
    colorPicker.addEventListener('input', ()=>{
        colorOfSketch = `${colorPicker.value}`;
        colorPicker.toggleAttribute
    })

    // column with each div of display flex
    for (i = 1; i <= dimensions; i++) {
        const columnDiv = document.createElement("div");
        columnDiv.setAttribute("style", "display:flex");
        canvas.appendChild(columnDiv);

        // row of the child elements of column div
        for (j = 1; j <= dimensions; j++) {
            const rowSquare = document.createElement("div");
            rowSquare.classList.add("rowSquare");


            
            rowSquare.addEventListener('mouseover',(e)=>{
                e.preventDefault();
                rowSquare.style.backgroundColor = `${colorOfSketch}`;
               
               

            })
      

            columnDiv.appendChild(rowSquare);
        }
    }
}
eraser.addEventListener('click', () => {
    const rowSquare = document.querySelectorAll('.rowSquare');
    rowSquare.forEach(square => {
        square.style.backgroundColor = 'white';
    })
    
});
gridRange.addEventListener('input', () => {
    canvas.textContent = "";
    grid(gridRange.value);
})

gridSizeButton.addEventListener("click", () => {
    canvas.textContent = "";

    let userInput = prompt("Select any size upto 100");
    if (userInput < 100) {
        grid(userInput);
    } else {
        alert("Please input a number below 100");
    }
});
grid(gridRange.value);

