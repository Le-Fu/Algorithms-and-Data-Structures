var Stack = require('./stack.js');

// 5！= 5 * 4* 3 * 2 * 1 = 120;
var realFactorial = function f(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * f(n - 1);
  }
};

// simulation with stack
function fakeFactorial(n) {
  var s = new Stack();
  while (n > 0) {
    s.push(n--);
  }
  var result = 1;
  while (s.length() > 0) {
    result *= s.pop();
  }
  return result;
}

console.log(fakeFactorial(5));