let displayValue = "";
let operator = "";
let secondValue = "";
let count_times = 0;

const clear = document.querySelector("#clear");
const display = document.querySelector("#txtArea");
const selection = document.querySelector("#selection");

function result_func() {
  console.log("result");
  const result = eval(displayValue);
  displayValue = result;
  txtArea.value = displayValue;
}

function func(elem, id) {
  elem.addEventListener("click", () => {
    if (elem.value === "") reset();

    //test order
    if (
      (elem.value == "*" ||
        elem.value == "/" ||
        elem.value == "+" ||
        elem.value == "-") &&
      count_times == 1
    ) {
      console.log("operator triggered twice");
      // const result = eval(displayValue);
      // displayValue = result;
      // txtArea.value = displayValue;
      result_func();
    } else if (
      elem.value == "*" ||
      elem.value == "/" ||
      elem.value == "+" ||
      elem.value == "-"
    ) {
      count_times++;
      console.log(count_times);
    }
    //test order

    displayValue += elem.value;
    display.value = displayValue;
    display.textContent = id.value;
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
  displayValue = displayValue.toString().slice(0, -1);
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
    id === "slash" ||
    id === "percent"
  ) {
    func(elem, id);
  }
  if (id === "bk") {
    elem.addEventListener("click", back_space);
  }

  //equal button => to calculate
  if (id === "equal") {
    elem.addEventListener("click", () => {
      // const result = eval(displayValue);
      // displayValue = result;
      // txtArea.value = displayValue;
      result_func();
    });
  }
});
