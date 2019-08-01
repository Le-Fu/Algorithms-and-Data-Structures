/**
 * @param {number} num
 * @return {number[]}
 */
var getBinary = function (num) {
  var rs = []
    ; (function run(num) {
      if (num == 1) {
        rs.unshift(1)
        return
      }
      const restNum = num % 2
      const nextNum = Math.floor(num / 2)
      rs.unshift(restNum)
      return run(nextNum)
    })(num)
    return rs
};

var rs = getBinary(1);

console.log(rs)