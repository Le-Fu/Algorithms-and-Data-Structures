/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  var norDict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }
  var speDict = {
    'IV': 'IIII',
    'IX': 'IIIIIIIII',
    'XL': 'XXXX',
    'XC': 'XXXXXXXXX',
    'CD': 'CCCC',
    'CM': 'CCCCCCCCC'
  }

  var reg = new RegExp('(' + Object.keys(speDict).join('|') + ')', 'g')

  var str = s.replace(reg, function (romanNum) {
    return speDict[romanNum]
  })
  
  var rs = str.split('').reduce(function (acc, item) {
    return acc + norDict[item]
  }, 0)

  return rs
};


romanToInt('IX')