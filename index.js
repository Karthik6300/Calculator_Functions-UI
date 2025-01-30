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

// let display = document.getElementById("display");
// let result = "";
// let operators = "+-*/%.";

// function sym(event) {
//   let lastChar = result.slice(-1);
//   let newChar = event.target.value;

//   if (!operators.includes(lastChar) || !operators.includes(newChar)) {
//     result += newChar;
//     display.value = result;
//   }
// }

// function calc(event) {
//   result += event.target.value;
//   display.value = result;
// }

// function str() {
//   try {
//     result = eval(result);
//     display.value = result;
//   } catch (error) {
//     display.value = "Error";
//     result = "";
//   }
// }

// function AC() {
//   result = "";
//   display.value = result;
// }

// function DEL() {
//   result = result.slice(0, -1);
//   display.value = result;
// }
