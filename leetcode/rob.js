/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let max = (sumEven,sumOdd) => (sumEven>sumOdd ? sumEven :sumOdd);
  let sumOdd = 0;
  let sumEven = 0;
  for (let i = 0; i < nums.length; i++) {
      if(i%2===0) {
          sumEven += nums[i];
          sumEven = max(sumEven, sumOdd);
      }else {
          sumOdd += nums[i];
          sumOdd = max(sumEven, sumOdd);s
      }
  }
  return max(sumEven, sumOdd);
};


var nums1 = [2, 7, 9, 3, 1];
var nums2 = [1, 2]
rob(nums2)