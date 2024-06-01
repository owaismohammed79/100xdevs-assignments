/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
  }

  subtract(num) {
    this.result -= num;
  }

  multiply(num) {
    this.result *= num;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.result /= num;
  }

  getResult() {
    return this.result;
  }

  calculate(str) {
    let newstr = str.replace(/\s/g, "");
    let num = "";
    let operator = "+";

    for (let i = 0; i < newstr.length; i++) {
      let code = newstr[i].charCodeAt(0);

      if (code >= 48 && code <= 57) {
        num += newstr[i];
      } else if (newstr[i] === '+' || newstr[i] === '-' || newstr[i] === '*' || newstr[i] === '/') {
        this.executeOperation(operator, parseInt(num));
        operator = newstr[i];
        num = "";
      } else {
        throw new Error("Invalid input");
      }
    }

    this.executeOperation(operator, parseInt(num));
  }

  executeOperation(operator, num) {
    if (isNaN(num)) {
      throw new Error("Invalid input");
    }

    switch (operator) {
      case "+":
        this.add(num);
        break;
      case "-":
        this.subtract(num);
        break;
      case "*":
        this.multiply(num);
        break;
      case "/":
        this.divide(num);
        break;
      default:
        throw new Error("Invalid operator");
    }
  }
}

let calc = new Calculator();
calc.calculate("10 +   2 *    (   6 - (4 + 1) / 2) + 7");

module.exports = Calculator;
