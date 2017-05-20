/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {



  var previous = 0;
  var current = 1;
  var sum = 0;
  var next;

  for (i = 1; i < 4000000; i++) {
    next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0 && current <= maxFibValue) {
      sum += current;
    }
  }


  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  var highest = 0;
  var previous = 0;
  var current = 1;
  var next;
  for (var i = 0; i < 100; i++) {
    next = current + previous;
    previous = current;
    current = next;
    if (current <= maxFibValue) {
      highest=current
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
