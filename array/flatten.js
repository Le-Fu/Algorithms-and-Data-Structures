/** 
 * @param {array} arr
 * @returns {array}
*/

function flatten(arr) {
  return arr.reduce(function (acc, curr) {
    return acc.concat(Array.isArray(curr) ? flatten(curr) : curr)
  }, [])
}

// debugger
var a = [1, [2, [3, [4]], 5]]
console.log(flatten(a))
