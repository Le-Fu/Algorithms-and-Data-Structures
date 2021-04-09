var stockArr = [6, 7, 8, 9, 5, 3, 6, 4];

function calcMaxProfit(arr) {
    let l = arr.length
    let count = 0
    let max = 0
    for (let j = l - 1; j >= 0; j--) {
        let cur = arr[j]
        let next = arr[j + 1]
        if (cur > max) {
            if (typeof next === 'number' && max > next) {
                count += (max - next)
            }
            max = cur
        }
    }
    if (max>arr[0]) {
        count += (max - arr[0])
    }
    console.log(count);
}

calcMaxProfit(stockArr)