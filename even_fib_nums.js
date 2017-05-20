/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {

  var x = 0;
  var y = 1;
  var sum = 0;
  var z;

  for (i = 1; y < maxFibValue; i++) {
    z = y + x;
    x = y;
    y = z;
    if (y % 2 === 0 ) {
      sum += y;
    }
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;
  var x = 0;
  var y = 1;
  var z;
  for (var i = 0; i < 100; i++) {
    z = y + x;
    x = y;
    y = z;
    if (y <= maxFibValue) {
      highest = y
    }
  }

  return highest;

};
_highestFibonacciNumber(13);
console.log(_highestFibonacciNumber(13));

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
