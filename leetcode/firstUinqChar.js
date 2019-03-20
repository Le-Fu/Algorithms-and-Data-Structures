var firstUniqChar = function (s) {
  var sArr = s.split('');
  var len = sArr.length;
  for (var i = 0; i < len; i++) {
    var item = sArr[i];
    if (sArr.indexOf(item) == sArr.lastIndexOf(item)) {
      return i;
    }
  }
  return -1
};

console.log(firstUniqChar('o'))