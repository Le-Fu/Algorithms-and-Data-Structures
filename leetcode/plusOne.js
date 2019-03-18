var plusOne = function (digits) {
    var index = digits.length - 1
    return (function(digits, index){
      // debugger
      if (index == -1) {
        digits.unshift(1)
        return digits;
      }
      var cur = Number(digits[index])
      if (cur < 9) {
        digits[index] = cur + 1
        return digits
      } else {
        digits[index] = 0
        return arguments.callee(digits, index-1)
      }
    })(digits, index)
  };
