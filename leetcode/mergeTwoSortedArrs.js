/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

  for (var i = 0; i < n; i++) {
    var bInsert = false;
    for (var j = 0; j < m; j++) {
      if (nums2[i] < nums1[j]) {
        nums1.splice(j, 0 , nums2[i])
        nums1.pop()
        bInsert = true
        m++
        break
      }
    }
    if (!bInsert) {
      nums1[m] = nums2[i]
      m++
    }
  };
}

debugger
merge([ 1, 2, 3,0, 0, 0], 3, [ 2, 5, 6], 3)
