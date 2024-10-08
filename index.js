const canvas = document.querySelector(".gridCanvas");
const gridSizeButton = document.querySelector(".grid-size-btn");
const clear = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const gridRange = document.querySelector(".grid-range");
const colorPicker = document.querySelector(".colorPicker");
const randomColor = document.querySelector(".randomColor");
const randomColors = document.querySelector(".randomColors");
const cellSizeSlider = document.querySelector(".cell-size-range");

// random color generator
function randomRGB() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

// grid maker function

function grid(dimensions,cellSize) {
  let colorOfSketch = "rgb(0,0,0)";

  randomColor.addEventListener("click", () => {
    colorOfSketch = randomRGB();
  });

  randomColors.addEventListener("click", () => {
    const rowSquare = document.querySelectorAll(".rowSquare");
    rowSquare.forEach((square) => {
      square.addEventListener("mouseover", () => {
        colorOfSketch = randomRGB();
      });
    });
  });

  colorPicker.addEventListener("input", () => {
    colorOfSketch = `${colorPicker.value}`;
  });

  // column with each div of display flex
  for (i = 1; i <= dimensions; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("style", "display:flex");
    canvas.appendChild(columnDiv);

    // row of the child elements of column div
    for (j = 1; j <= dimensions; j++) {
      const rowSquare = document.createElement("div");
      rowSquare.classList.add("rowSquare");
    rowSquare.style.width = `${cellSize}px`
    rowSquare.style.height = `${cellSize}px`
      rowSquare.addEventListener("mouseover", (e) => {
        e.preventDefault();
        rowSquare.style.backgroundColor = `${colorOfSketch}`;
      });
      columnDiv.appendChild(rowSquare);
    }
  }
  // grid square event listener
  const gridSquares = document.querySelectorAll(".rowSquare");
  // make the hover progressive color fill
  gridSquares.forEach((square) => {
    let hover = 0;
    square.addEventListener("mouseover", () => {
      hover += 0.1;
      if (hover === 1) {
        square.style.opacity = 1;
        console.log("i am hover");
      } else {
        square.style.opacity = hover;
        console.log("i am hover");
      }
    });
  });
}

// random colors button event listener
randomColors.addEventListener("click", () => {});

// clear button listener
clear.addEventListener("click", () => {
  const rowSquare = document.querySelectorAll(".rowSquare");
  rowSquare.forEach((square) => {
    square.style.backgroundColor = "white";
    square.style.opacity = "0.10";
    square.style.hover = "0.10";
  });
});

// slider event listener
gridRange.addEventListener("input", () => {
  canvas.textContent = "";
  grid(gridRange.value,cellSizeSlider.value);
});

// cell size slider event listener
cellSizeSlider.addEventListener("input", () => {
    canvas.textContent = "";
  grid(gridRange.value,cellSizeSlider.value)
});

// grid size button listener

gridSizeButton.addEventListener("click", () => {
  canvas.textContent = "";

  let userInput = prompt("Select any size upto 100");
  if (userInput < 100) {
    grid(userInput);
  } else {
    alert("Please input a number below 100");
  }
});

// default gird on starting
grid(gridRange.value);
