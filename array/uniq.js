function uniqArr(nums) {
    let cur = nums[0]
    let l = typeof cur === 'number' ? 1 : 0

    for (let i = 1; i < nums.length; i++) {
        if (cur != nums[i]) {
            cur = nums[i]
            l++
        }
    }
    console.log(l);
    return l
}

uniqArr([])