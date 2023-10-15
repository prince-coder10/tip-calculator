let form = document.getElementById("user-form");
let billError = document.getElementById("bill-error");
let billInput = document.getElementById("bill");

// buttons

let p5 = document.getElementById("5%");
let p10 = document.getElementById("10%");
let p15 = document.getElementById("15%");
let p25 = document.getElementById("25%");
let p50 = document.getElementById("50%");
let custom = document.getElementById("custom");

let peopleError = document.getElementById("peps-error");
let peopleInput = document.getElementById("people");

let tipAmount = document.getElementById("tip-amount");
let totalAmount = document.getElementById("total-amount");

let resetBtn = document.getElementById("reset");

var percentage;

p5.addEventListener("click", () => {
  let five = Number(p5);
  five = 5 / 100;
  percentage = five;
  p5.style.backgroundColor = "hsl(172, 67%, 45%)";
  p10.style.backgroundColor = "hsl(183, 100%, 15%)";
  p15.style.backgroundColor = "hsl(183, 100%, 15%)";
  p25.style.backgroundColor = "hsl(183, 100%, 15%)";
  p50.style.backgroundColor = "hsl(183, 100%, 15%)";
});
p10.addEventListener("click", () => {
  let ten = Number(p10);
  ten = 10 / 100;
  percentage = ten;
  p10.style.backgroundColor = "hsl(172, 67%, 45%)";
  p5.style.backgroundColor = "hsl(183, 100%, 15%)";
  p15.style.backgroundColor = "hsl(183, 100%, 15%)";
  p25.style.backgroundColor = "hsl(183, 100%, 15%)";
  p50.style.backgroundColor = "hsl(183, 100%, 15%)";
});
p15.addEventListener("click", () => {
  let fifteen = Number(p15);
  fifteen = 15 / 100;
  percentage = fifteen;
  p15.style.backgroundColor = "hsl(172, 67%, 45%)";
  p10.style.backgroundColor = "hsl(183, 100%, 15%)";
  p5.style.backgroundColor = "hsl(183, 100%, 15%)";
  p25.style.backgroundColor = "hsl(183, 100%, 15%)";
  p50.style.backgroundColor = "hsl(183, 100%, 15%)";
});
p25.addEventListener("click", () => {
  let ten = Number(p25);
  twentyFive = 25 / 100;
  percentage = twentyFive;
  p25.style.backgroundColor = "hsl(172, 67%, 45%)";
  p10.style.backgroundColor = "hsl(183, 100%, 15%)";
  p15.style.backgroundColor = "hsl(183, 100%, 15%)";
  p5.style.backgroundColor = "hsl(183, 100%, 15%)";
  p50.style.backgroundColor = "hsl(183, 100%, 15%)";
});
p50.addEventListener("click", () => {
  let fifty = Number(p50);
  fifty = 50 / 100;
  percentage = fifty;
  p50.style.backgroundColor = "hsl(172, 67%, 45%)";
  p10.style.backgroundColor = "hsl(183, 100%, 15%)";
  p15.style.backgroundColor = "hsl(183, 100%, 15%)";
  p25.style.backgroundColor = "hsl(183, 100%, 15%)";
  p5.style.backgroundColor = "hsl(183, 100%, 15%)";
});

custom.addEventListener("input", () => {
  let cust = Number(custom.value);
  let custNum = cust / 100;
  percentage = custNum;
  p5.style.backgroundColor = "hsl(183, 100%, 15%)";
  p10.style.backgroundColor = "hsl(183, 100%, 15%)";
  p15.style.backgroundColor = "hsl(183, 100%, 15%)";
  p25.style.backgroundColor = "hsl(183, 100%, 15%)";
  p50.style.backgroundColor = "hsl(183, 100%, 15%)";
});

resetBtn.addEventListener("click", () => {});

peopleInput.addEventListener("input", () => {
  bill = Number(billInput.value);
  let person = Number(peopleInput.value);
  let number = (bill * percentage) / person;
  tipAmount.textContent = `$${Math.round(number * 100) / 100}`;

  let totalNum = bill / person + number;
  totalAmount.textContent = `$${Math.round(totalNum * 100) / 100}`;
});

resetBtn.addEventListener("click", () => {
  percentage = 0;
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
  number = 0;
  billInput.value = 0;
  peopleInput.value = 0;
  p5.style.backgroundColor = "hsl(183, 100%, 15%)";
  p10.style.backgroundColor = "hsl(183, 100%, 15%)";
  p15.style.backgroundColor = "hsl(183, 100%, 15%)";
  p25.style.backgroundColor = "hsl(183, 100%, 15%)";
  p50.style.backgroundColor = "hsl(183, 100%, 15%)";
});
