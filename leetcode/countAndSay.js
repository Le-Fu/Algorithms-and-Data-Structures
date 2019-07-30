// https://www.yuque.com/db/zn6g8d/leetcode-20190726
/**
 * @param {number} n
 * @return {string}
 */

function countAndSay(n) {
  var i = 1;
  var str = '1';
  while (i < n) {
    ++i
    str = say(str)
  }
  return str
}


function say(str) {
  var rs = ''
  var tempStr = str[0]
  var count = 0

  for (var i = 0; i <= str.length; i++) {
    var curStr = str[i];
    if (curStr == tempStr) {
      count++;
    } else {
      rs += (String(count) + tempStr);
      tempStr = curStr;
      count = 1;
    }
  }
  return rs
}

var n = 5
debugger
console.log(countAndSay(n))