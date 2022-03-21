function snake(arr, curPosi, direct) {
    while (curPosi >= 0 && curPosi < arr.length) {
        if (arr[curPosi] === arr[curPosi + direct]) {
            curPosi += direct
        } else {
            break
        }
    }
    return curPosi
}

function bSearchWithMutiTarget(arr, target) {
    let start = 0,
        end = arr.length

    while (start <= end) {
        let middle = Math.floor((end + start) / 2)
        if (arr[middle] === target) {
            return [snake(arr, middle, -1), snake(arr, middle, 1)]
        } else if (arr[middle] > target) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }
    return [-1, -1]
}

let arr = [1, 2, 3, 4, 4, 5, 6, 12, 17]
debugger
let rs = bSearchWithMutiTarget(arr, 5)

console.log(rs);

