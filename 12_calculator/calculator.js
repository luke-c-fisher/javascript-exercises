const add = function(a, b) {
	let sum = a + b; 
  return sum;
};

console.log(add(1, 6));

const subtract = function(a, b) {
  let result = b - a;
  return result;
	
};

console.log(subtract(1, 6));

const sum = function(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
	return sum;
};

console.log(sum([1, 5, 6, 9]));

const multiply = function(arr) {
  let product = arr.reduce((a, b) => a * b);
  return product;
};

console.log(multiply([5, 6, 3]));

const power = function(a, b) {
  let result = a ** b; 
  return result
};

console.log(power(4, 3));

const factorial = function(n) {
  let result = 1
  for (let i = 1; i <= n; i++){
    result *= i;
  }
  return result;

};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
