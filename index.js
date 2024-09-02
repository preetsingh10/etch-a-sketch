const canvas = document.querySelector(".gridCanvas");
const gridSizeButton = document.querySelector(".grid-size-btn");
function grid(dimensions) {
    let opacity = 0;
    // random color generator
    function randomRGB(){
        let red = Math.floor( Math.random()*256);
        let green = Math.floor( Math.random()*256);
        let blue = Math.floor( Math.random()*256);
        return `rgb(${red}, ${green}, ${blue})`;
    }

    // column with each div of display flex
  for (i = 1; i <= dimensions; i++) {
    const columnDiv = document.createElement("div");
    columnDiv.setAttribute("style", "display:flex");
    canvas.appendChild(columnDiv);

    // row of the child elements of column div
    for (j = 1; j <= dimensions; j++) {
      const rowSquare = document.createElement("div");
      rowSquare.classList.add("rowSquare");

      rowSquare.addEventListener("mouseover", () => {
     
        rowSquare.style.backgroundColor = `${randomRGB()}`;

      });
      rowSquare.addEventListener("touchstart", () => {
     
        rowSquare.style.backgroundColor = `${randomRGB()}`;

      });

      columnDiv.appendChild(rowSquare);
    }
  }
}
grid(30);
gridSizeButton.addEventListener("click", () => {
  canvas.textContent = "";

  let userInput = prompt("Select any size upto 100");
  if (userInput < 100) {
    const size = userInput;
    grid(userInput);
  } else {
    alert("Please input a number below 100");
  }
});
