// https://www.yuque.com/db/zn6g8d/leetcode-20190722

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  var len = strs.length;
  if (len < 2) {
    return strs[0] || ""
  }
  var strStr = ',' + strs.join();
  var reStr = '';
  var i = 0;
  do {
    i++
    reStr += strStr[i];
    var re = new RegExp(',' + reStr + '[a-z]*', 'g')
    var matches = strStr.match(re) || [];
  } while (matches.length === len);
  return reStr.substring(0, reStr.length - 1)
};


var strs = ["flower", "flow", "flight"]
var strs = ["c", "acc", "ccc"]
var strs = [""]
debugger
console.log(longestCommonPrefix(strs))