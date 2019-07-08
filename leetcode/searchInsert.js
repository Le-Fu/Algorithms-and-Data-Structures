/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (nums.length === 1) {
    if (target > nums[0]) {
      return 1
    } else {
      return 0
    }
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (target <= nums[i]) {
      return i;
    }
    if (target === nums[i + 1]) {
      return i + 1;
    }
    if (target > nums[i] && target < nums[i + 1]) {
      return i + 1;
    }
  }
  return nums.length
};
debugger
console.log(searchInsert([1, 3], 2));