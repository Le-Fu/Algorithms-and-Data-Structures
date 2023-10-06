let executeCount = 0
const fn = nums => {
    executeCount++
    return nums.map(x => x * 2)
}

const batcher = f => {
    // todo 实现 batcher 函数
    return (nums) => {
        return new Promise((resolve, reject) => {
            resolve(f(nums))
        })
    }
}

const batchedFn = batcher(fn);

const main = async () => {
    const [r1, r2, r3] = await Promise.all([
        batchedFn([1, 2, 3]),
        batchedFn([4, 5]),
        batchedFn([7, 8, 9])
    ]);

    //满足以下 test case
    console.log(r1);
    console.log(r2);
    console.log(r3);
    console.log(executeCount);
    // assert(r1).tobe([2, 4, 6])
    // assert(r2).tobe([8, 10])
    // assert(r3).tobe([14, 16, 18])
    // assert(executeCount).tobe(1)
}

main()