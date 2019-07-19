/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n = matrix.length;
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        var temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
    for (let k = 0; k < n; k++) {
      matrix[k].reverse()
    }
    return matrix;
};


var matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

rotate(matrix)



