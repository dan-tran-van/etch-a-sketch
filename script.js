const divContainer = document.querySelector(".Container");
let currentSquaresPerSide = 100;

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

createSquareGrid(currentSquaresPerSide);
setHoverEffect();

function setHoverEffect() {
  const innerGrid = document.querySelectorAll(".InnerGrid");

  innerGrid.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.cssText = "background-color: black";
    });
  });
}

const newSketch = document.querySelector(".NewSketch");

newSketch.addEventListener("click", () => {
  currentSquaresPerSide = +prompt("Number of squares per side?", 64);
  while (!(currentSquaresPerSide > 0 && currentSquaresPerSide <= 100)) {
    currentSquaresPerSide = +prompt(
      "Invalid value, please try again, accepted values from 1 to 100"
    );
  }
  divContainer.textContent = "";
  createSquareGrid(currentSquaresPerSide);
  setHoverEffect();
});

const randomColor = document.querySelector(".RandomColor");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function setHoverEffectRandom() {
  const innerGrid = document.querySelectorAll(".InnerGrid");

  innerGrid.forEach((grid) => {
    grid.addEventListener("mouseenter", () => {
      grid.style.cssText = `background-color: rgb(${getRandomInt(
        256
      )} ${getRandomInt(256)} ${getRandomInt(256)})`;
    });
  });
}

randomColor.addEventListener("click", () => {
  setHoverEffectRandom();
});

const blackColor = document.querySelector('.BlackColor');

blackColor.addEventListener('click', () => {
  setHoverEffect();
})