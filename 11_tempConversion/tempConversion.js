const convertToCelsius = function(temp) {
  const initialTemp = temp
  
  let toCelsius = (initialTemp - 32) * (5/9);
  let roundedTemp = Number(toCelsius.toFixed(1));

  return roundedTemp;
};

const convertToFahrenheit = function(temp) {
  const initialTemp = temp
  
  let toFahrenheit = (initialTemp * (9/5)) + 32;
  let roundedTemp = Number(toFahrenheit.toFixed(1));

  return roundedTemp;
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(36))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
