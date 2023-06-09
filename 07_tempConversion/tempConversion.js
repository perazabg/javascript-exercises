const convertToCelsius = function(temp) {
  let conversion = (temp - 32) * (5/9);
  return round(conversion,1);
};

const convertToFahrenheit = function(temp) {
  let conversion = (temp * (9/5)) + 32;
  return +conversion.toFixed(1);
};

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
