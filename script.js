const divContainer = document.querySelector(".Container");

function createSquareGrid(divNumber) {
  for (let i = 1; i <= divNumber; i++) {
    const divVertical = document.createElement("div");
    divVertical.classList.add("FlexAuto");
    divVertical.style.cssText = "display: flex;";
    for (let j = 1; j <= divNumber; j++) {
      const divHorizontal = document.createElement("div");
      divHorizontal.classList.add("FlexAuto");
      divHorizontal.classList.add("InnerGrid");
      divVertical.appendChild(divHorizontal);
    }
    divContainer.appendChild(divVertical);
  }
}

createSquareGrid(100);
setHoverEffect();

function setHoverEffect() {
  const innerGrid = document.querySelectorAll(".InnerGrid");

  innerGrid.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.classList.add("ColorChanged");
    });
  })
}

const newSketch = document.querySelector(".NewSketch");

newSketch.addEventListener("click", () => {
  let squaresPerSide = +prompt("Number of squares per side?", 64);
  while (!(squaresPerSide > 0 && squaresPerSide <= 100)) {
    squaresPerSide = +prompt(
      "Invalid value, please try again, accepted values from 1 to 100"
    );
  }
  divContainer.textContent = '';
  createSquareGrid(squaresPerSide);
  setHoverEffect();
});
