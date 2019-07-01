/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if(k >= nums.length) return
  while (k>0) {
    k--
    nums.unshift(nums.pop())
  }
};

var nums = [0,1,2,3,4]
rotate(nums, 0)

console.log(nums)