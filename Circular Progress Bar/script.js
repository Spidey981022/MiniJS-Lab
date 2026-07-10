const random = document.querySelector(".random-color");
const applyColor = document.querySelector(".apply-color");
const currentColor = document.querySelector(".curr-color h3 span");
const colorInput = document.querySelector("input");
const body = document.body;

random.addEventListener("click", () => {
  let r = (Math.random() * 256).toFixed(0);
  let b = (Math.random() * 256).toFixed(0);
  let g = (Math.random() * 256).toFixed(0);
  let clr = `rgb(${r},${g},${b})`;
  body.style.backgroundColor = clr;
  currentColor.innerText = ` ${clr}`;
});

applyColor.addEventListener("click", () => {
  let myColor = colorInput.value;
  body.style.backgroundColor = myColor;
  colorInput.value = "";
  currentColor.innerText = ` ${myColor}`;
});
