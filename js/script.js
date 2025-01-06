let displayValue = "";

const clear = document.querySelector("#clear");
const display = document.querySelector("#txtArea");
const selection = document.querySelector("#selection");

const btn = document.querySelectorAll("button");
btn.forEach((elem) => {
  let id = elem.id;

  switch (id) {
    case "clear":
      func(elem, id);
      break;
    case "seven":
      func(elem, id);
      break;
    case "eight":
      func(elem, id);
      break;
    case "nine":
      func(elem, id);
      break;
    case "four":
      func(elem, id);
      break;
    case "five":
      func(elem, id);
      break;
    case "six":
      func(elem, id);
      break;
    case "one":
      func(elem, id);
      break;
    case "two":
      func(elem, id);
      break;
    case "three":
      func(elem, id);
      break;
    case "zero":
      func(elem, id);
      break;
    default:
      console.log("default");
  }
});

function func(elem, id) {
  elem.addEventListener("click", () => {
    console.log(id);
    console.log(elem.value);
    if (elem.value === "") reset();
    displayValue += elem.value;
    display.value = displayValue;
    display.textContent = id.value;
  });
}

function reset() {
  console.log("reset clicked");
  displayValue = "";
  display.value = displayValue;
}
