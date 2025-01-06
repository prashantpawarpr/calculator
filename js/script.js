let displayValue = "";
let operator = "";
let secondValue = "";

const clear = document.querySelector("#clear");
const display = document.querySelector("#txtArea");
const selection = document.querySelector("#selection");

function func(elem, id) {
  elem.addEventListener("click", () => {
    console.log(id);
    console.log(elem.value);
    if (elem.value === "") reset();
    displayValue += elem.value;
    display.value = displayValue;
    display.textContent = id.value;
    console.log(displayValue);
  });
}

function reset() {
  console.log("reset clicked");
  displayValue = "";
  firstvalue = "";
  operator = "";
  display.value = displayValue;
}

function back_space() {
  console.log("backspace button clicked");
  console.log(displayValue);
  displayValue = displayValue.slice(0, -1);
  console.log(displayValue);
  display.value = displayValue;
}

const btn = document.querySelectorAll("button");
btn.forEach((elem) => {
  let id = elem.id;

  if (
    id === "one" ||
    id === "two" ||
    id === "three" ||
    id === "four" ||
    id === "five" ||
    id === "six" ||
    id === "seven" ||
    id === "eight" ||
    id === "nine" ||
    id === "zero" ||
    id === "clear" ||
    id === "mult" ||
    id === "minus" ||
    id === "plus" ||
    id === "slash"
  ) {
    func(elem, id);
  }
  if (id === "bk") {
    elem.addEventListener("click", back_space);
  }

  if (id === "equal") {
    elem.addEventListener("click", () => {
      const result = eval(displayValue);
      displayValue = result;
      txtArea.value = displayValue;
      console.log(result);
    });
  }
});
