var reverse = function(x) {
  var iltz = x < 0 ? true : false,
      str = '',
      xArr = (x+'').split('')
  if (iltz) {
      xArr.shift()
  }
  for (var i = xArr.length-1; i>=0; i--) {
      str += xArr[i]       
  }
  if(Number(str)>(2**31-1)){
    return 0
  }
  return iltz ? '-'+ str : str
};

console.log(reverse(-1234566789));