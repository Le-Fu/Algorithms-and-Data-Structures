/**
 * @param {array} nums
 * @returns {number} 
 */

function secondMax(nums) {
  let max1 = nums[0];
  let max2 = 0;
  for (let i = nums.length; i > 0; i--) {
    const num = nums[i];
    if (num>max1) {
      max2 = max1;
      max1 = num;
    } else if (num>max2) {
      max2 = num;
    }
  }
  return max2;
}
console.log(secondMax)