/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  // 正则匹配
  const matchStr = str.trim().match(/^[\-\+]?(\d+)/);
  return Math.max(Math.min(Number(matchStr ? Number(matchStr[0]) : 0), 2 ** 31-1), -1 * 2 ** 31)
};


var str = "   -42"
// var str = "42"
var str = "42sdfas"
// var str = " sdfas42"
// var str = "-91283472332sdf"

myAtoi(str)