
function rotateOnePosiOfArr(arr) {
    if (!Array.isArray(arr)) {
        return []
    }
    const len = arr.length;
    if (len <= 1) {
        return arr
    }
    if (len == 2) {
        const temp = arr[1]
        arr[1] = arr[0]
        arr[0] = temp
        return arr
    }
    let i = len - 1;
    const temp = arr[len - 1];
    while (i > 0) {
        arr[i] = arr[i - 1]
        i--
    }
    arr[0] = temp;
    return arr;
}

function rotateArr(arr, k) {
    const len = arr.length;
    k = k % len;
    for (let i = 0; i < k; i++) {
        rotateOnePosiOfArr(arr)
    }
    return arr;
}

const rotatedArr1 = rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 5);
const rotatedArr2 = rotateArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 17);
console.log(rotatedArr1);
console.log(rotatedArr2);