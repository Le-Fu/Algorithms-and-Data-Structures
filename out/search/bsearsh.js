function bSearch(arr, item) {
    var head = 0, end = arr.length - 1;
    function search(arr, item, head, end) {
        if (head > end) {
            return -1;
        }
        var middle = Math.floor((end + head) / 2);
        if (arr[middle] === item) {
            return middle;
        }
        if (item > arr[middle]) {
            return search(arr, item, middle + 1, end);
        }
        else {
            return search(arr, item, head, middle - 1);
        }
    }
    return search(arr, item, head, end);
}
var a = [2, 3, 4, 5, 6, 7];
var res = bSearch(a, 5);
console.log(res);
//# sourceMappingURL=bsearsh.js.map