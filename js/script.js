//geting value of the main container

const container = document.querySelector("#container");

//display section

const display = document.createElement("div");
const selection = document.createElement("div");

display.classList.add("display");
selection.classList.add("selection");

container.appendChild(display);
container.appendChild(selection);

const txtArea = document.createElement("input");
txtArea.setAttribute("type", "text");
// txtArea.setAttribute("readonly", "readonly");
txtArea.classList.add("txtArea");
display.appendChild(txtArea);

const btn = document.createElement("button");
btn.textContent = "Clear";
