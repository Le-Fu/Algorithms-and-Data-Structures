// var reverse = function(x) {
//   var iltz = x < 0 ? true : false,
//       str = '',
//       xArr = (x+'').split('')
//   if (iltz) {
//       xArr.shift()
//   }
//   for (var i = xArr.length-1; i>=0; i--) {
//       str += xArr[i]       
//   }
//   if(Number(str)>(2**31-1)){
//     return 0
//   }
//   return iltz ? '-'+ str : str
// };


var reverse = function (x) {
  var reverseNum = (function (x) {
    return parseInt((x + '').split('').reverse().join(''))
  })(x)
  if (reverseNum > 2 ** 31 - 1) {
    return 0
  }
  return x > 0 ? reverseNum : -1 * reverseNum
}
console.log(reverse(12304));