/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const mainContainer = document.querySelector("ul.grid");
const allCells = document.querySelectorAll("li.cell");
const colors = ["blue", "red", "green", "hsl(0, 0%, 90%)"];

mainContainer.addEventListener("mouseenter", () => {
  mainContainer.style.border = "3px solid blue";
});
mainContainer.addEventListener("mouseleave", () => {
  mainContainer.style.border = "none";
});

allCells.forEach((cell) => {
  cell.addEventListener("mouseenter", () => {
    cell.style.border = "2px solid red";
  });
  cell.addEventListener("mouseleave", () => {
    cell.style.border = "2px solid white";
  });
  cell.addEventListener("click", () => {
    cell.style.background =
      colors[Math.round(Math.random() * (colors.length - 1))];
  });
});
