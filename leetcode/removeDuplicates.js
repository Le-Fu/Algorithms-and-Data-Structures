/**
 * @param {number[]} nums
 * @return {number}
 */

// 1

var removeDuplicates = function(nums) {
  return [...new Set(nums)].length
};

// 2

var removeDuplicates = function (nums) {
  var item = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (item === nums[i]) {
      nums.splice(i, 1)
    } else {
      item = nums[i]
    }
  }
  return nums.length;
};

var removeDuplicates = function (nums) {
  return nums.join('').replace(/(.)\1+/g, (match, p1) => p1).length
};

// test
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))