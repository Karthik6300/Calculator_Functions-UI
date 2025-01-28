let display = document.getElementById("display");
let result = "";
let str1 = "+-*/%.";
function sym(event) {
  if (
    event.target.value != result[result.length - 1] &&
    !str1.includes(result[result.length - 1])
  ) {
    result += event.target.value;
    display.value = result;
  }
}

function calc(event) {
  result += event.target.value;
  display.value = result;
}
function str() {
  result = eval(result);
  display.value = result;
}

function AC() {
  result = "";
  display.value = result;
}

function DEL() {
  result = result.slice(0, -1);
  display.value = result;
}
