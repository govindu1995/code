const value1= Number(prompt('enter the first value'));
var operator = prompt("Enter the operator +,-,*,/,%,^,sqrt");
const value2= Number(prompt('enter the second value'));
var output;

switch (operator){
  case "+":
    output = value1 + value2;
    console.log(output);
    break;
  case "-":
    output=value1 - value2;
    console.log(output);
    break;
  case "*":
    output=value1 * value2;
    console.log(output);
    break;
  case "/":
    output = value1 / value2;
    console.log(output);
    break;
  case "%":
    output = value1 % value2;
    console.log(output);
    break;
  case "^":
    output = Math.pow(value1,value2);
    console.log(output);
    break;
  case "sqrt":
    output= Math.sqrt(value1);
    console.log(output);
    break;
  default:
    console.log("please enter the valid operation");
    break;
}
