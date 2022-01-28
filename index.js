
const trafficLightColorGreen = "Green";
const trafficLightColorYellow = "Yellow";
const trafficLightColorRed = "Red";

const isItPossibleToGo = function (value) {
  if (trafficLightColorGreen === value) {
    return "Run";
  } else if (trafficLightColorYellow === value) {
    return "Weit";
  } else if (trafficLightColorRed === value) {
    return "Stop";
  } else if (trafficLightColorRed !== value) {
    return "Error";
  }
};

let num1 = prompt("Первое число");
num1 = Number(num1);

let num2 = prompt("Второе число");
num2 = Number(num2);

let operator = prompt("оператор (/,+,*,-)");

switch (operator) {
  case "+":
    alert(num1 + num2);
    break;
  case "-":
    alert(num1 - num2);
    break;
  case "/":
    alert(num1 / num2);
    break;
  case "*":
    alert(num1 * num2);
  default:
    alert("Нет значения");
}

const isSeasone = function (month) {
  if (month >= 1 || month <= 2 || month <= 12) {
    return "Winter";
  } else if (month >= 3 || month <= 4 || month <= 5) {
    return "Spring";
  } else if (month >= 6 || month <= 7 || month <= 8) {
    return "Summer";
  } else if (month >= 9 || month <= 10 || month <= 11) {
    return "Аutumn";
  }
};

const result = isSeasone (1);
