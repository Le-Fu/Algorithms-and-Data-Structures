/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  var strArr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      strArr.push("FizzBuzz")
    } else if (i % 3 === 0) {
      strArr.push("Fizz")
    } else if (i % 5 === 0) {
      strArr.push("Buzz")
    } else {
      strArr.push(i + '')
    }
  }
  return strArr
};

var n = 15
debugger
console.log(fizzBuzz(n))