let gridSize = 16;
let isDrawing = false;

function createGrid() {
  let container = document.getElementById("main-wrapper");
  container.innerHTML = "";
  for (let i = 0; i < gridSize; i++) {
    let col = document.createElement("div");
    col.className = "col";

    for (let j = 0; j < gridSize; j++) {
      let row = document.createElement("div");
      row.className = "row";
      col.appendChild(row);
    }
    document.getElementById(
      "slider-label"
    ).innerHTML = `Grid Size: ${gridSize} X ${gridSize}`;

    container.appendChild(col);
  }
}

function draw() {
  const elements = document.querySelectorAll(".row");

  elements.forEach((element) => {
    element.addEventListener("mousedown", function () {
      isDrawing = true;
      this.style.backgroundColor = "yellow";
    });
    element.addEventListener("mousemove", function () {
      console.log(isDrawing);
      if (isDrawing) {
        this.style.backgroundColor = "yellow";
      }
    });
  });

  document.addEventListener("mouseup", function () {
    isDrawing = false;
  });
}

function changeGrid() {
  var slider = document.getElementById("myRange");
  slider.addEventListener("input", function () {
    gridSize = this.value;
    createGrid();
    draw();
  });
}

function init() {
  createGrid();
  changeGrid();
  draw();
}

init();
