/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.arr = nums.slice()
  this.nums = nums
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.arr
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  var nums = this.nums
  var n = nums.length
  for (var i = 0; i < n; i++) {
    var rInd = Math.floor(Math.random()*(n-i))+i
    swap(nums, i, rInd)
  }
  return nums
};

/**
 * 
 * @param {number[]} arr 
 * @param {number} i 
 * @param {number} j 
 * @return {number[]}
 */

function swap(arr, i, j) {
  var temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// es6

class Solution {
	constructor(nums){
  	this.arr = nums.slice()
    this.nums = nums
  }
  
  reset() {
    return this.arr
  }
  
  shuffle() {
    var nums = this.nums
    var n = nums.length
    for (var i = 0; i < n; i++) {
      var rInd = Math.floor(Math.random()*(n-i))+i
      swap(nums, i, rInd)
    }
    return nums
  }
  
  swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
    return arr
  }
 
}

var a = [8, 7, 9, 2, 5];

var fisher = new Solutions(a)

fisher.shuffle()
fisher.reset()