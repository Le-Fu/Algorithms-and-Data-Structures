const showOneTime = (nums) => {
    return nums.reduce((acc, item) => acc ^ item)
}

const rs = showOneTime([7, 2, 3, 4, 4, 2, 3])

console.log(rs);