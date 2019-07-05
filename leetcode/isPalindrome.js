/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  var step = 1;
  var stack = [];
  var reverseNum = 0;
  while (parseInt(x / step)) {
    step *= 10;
    var temp = x % step / (step / 10)
    if (temp<1) {
      temp = 0;
    }
    var curNum = parseInt(temp);
    stack.push(curNum);
  }
  for (var i = 0; i < stack.length; i++) {
    step /= 10
    reverseNum += stack[i] * step;
  }
  return x === reverseNum;
};

debugger
var num = 1000000001
console.log(isPalindrome(num));