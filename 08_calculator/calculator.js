const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (args) {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

const multiply = function (args) {
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total *= args[i];
  }
  return total;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let total = 1
  if (n === 0) {
    return 1;
  }
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }

  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
