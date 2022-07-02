const zero = document.getElementById("0");
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");
const point = document.getElementById(".");
const aC = document.getElementById("ac");
const bracStart = document.getElementById("(");
const bracEnd = document.getElementById(")");
let numArea = document.querySelector(".num-area");
let resArea = document.querySelector(".res-area");

const plus = document.getElementById("+");
const minus = document.getElementById("-");
const mult = document.getElementById("*");
const divide = document.getElementById("/");
const equalTo = document.getElementById("=");
zero.addEventListener("click", function () {
  numArea.textContent += "0";
});
one.addEventListener("click", () => {
  numArea.textContent += "1";
});
two.addEventListener("click", () => {
  numArea.textContent += "2";
});
three.addEventListener("click", () => {
  numArea.textContent += "3";
});
four.addEventListener("click", () => {
  numArea.textContent += "4";
});
five.addEventListener("click", () => {
  numArea.textContent += "5";
});
six.addEventListener("click", () => {
  numArea.textContent += "6";
});
seven.addEventListener("click", () => {
  numArea.textContent += "7";
});
eight.addEventListener("click", () => {
  numArea.textContent += "8";
});
nine.addEventListener("click", () => {
  numArea.textContent += "9";
});
bracStart.addEventListener("click", () => {
  numArea.textContent += "(";
});
bracEnd.addEventListener("click", () => {
  numArea.textContent += ")";
});
point.addEventListener("click", () => {
  numArea.textContent += ".";
});
aC.addEventListener("click", () => {
  numArea.textContent = "";
  location.reload();
});

equalTo.addEventListener("click", function () {
  numArea.textContent += "\n " + "= " + eval(numArea.textContent);
});
function checkEmpty(elem, value) {
  if (numArea.innerHTML === "") {
    return;
  } else {
    numArea.textContent += value;
    elem.setAttribute("disabled", "true");
    return;
  }
}
plus.addEventListener("click", function () {
  checkEmpty(plus, "+");
});
minus.addEventListener("click", function () {
  checkEmpty(minus, "-");
});
mult.addEventListener("click", function () {
  checkEmpty(mult, "*");
});
divide.addEventListener("click", function () {
  checkEmpty(divide, "/");
});
