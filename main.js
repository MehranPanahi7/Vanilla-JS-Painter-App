const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d"); // set the area to a drawable area
const brushWidth = document.getElementById("brush-width");
const colorPicker = document.getElementById("colorPicker");
const saveBtn = document.getElementsByClassName("save");
const clearBtn = document.getElementsByClassName("clear");
const brush = document.getElementsByClassName("brush");
const eraser = document.getElementById("eraser");
let isDrawing = false,
  currentWidth = 5,
  currentColor = "";

// these Codes will run once that the page is loading
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
});

// these Codes will run when the mouse button is clicking
window.addEventListener("mousedown", () => {
  isDrawing = true;
  ctx.beginPath();
  ctx.strokeStyle = `${currentColor}`;
  ctx.lineWidth = currentWidth;
});
