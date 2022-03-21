var merge = function (nums1, m, nums2, n) {
    let cache = {}
    for (let i = 0, k = 0; i < m + n && k < n; i++) {
        let curNum = nums1[i]
        let inNum = nums2[k]
        // 是否升序
        let isAsc = typeof nums1[i - 1] === 'number' ? nums1[i] - nums1[i - 1] > 0 : true

        if (inNum <= curNum) {
            cache[i + k] = inNum
            k++
        } else {
            if (isAsc) {
                cache[i + k] = curNum
            } else {
                cache[i + k] = inNum
                k++
            }
            continue
        }
    }

    console.log(cache);
    // for (let i = 0; i < nums1.length; i++) {
    //     nums1[i] = cache[i];
    // }
}

var nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3

merge(nums1, m, nums2, n)

console.log(nums1);
