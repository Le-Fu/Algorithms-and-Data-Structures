"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Heap = (function () {
    function Heap(data) {
        this.data = data;
    }
    Heap.prototype.sort = function () {
        var iArr = this.data;
        var n = iArr.length;
        if (n <= 1) {
            return iArr;
        }
        else {
            for (var i_1 = Math.floor(n / 2); i_1 >= 0; i_1--) {
                Heap.maxHeapify(iArr, i_1, n);
            }
            for (var j = 0; j < n; j++) {
                Heap.swap(iArr, 0, n - 1 - j);
                Heap.maxHeapify(iArr, 0, n - 1 - j - 1);
            }
            return iArr;
        }
    };
    Heap.swap = function (arr, a, b) {
        if (a === b) {
            return;
        }
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    Heap.maxHeapify = function (arr, i, size) {
        var l = i * 2 + 1;
        var r = i * 2 + 2;
        var largest = i;
        if (l <= size && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r <= size && arr[r] > arr[largest]) {
            largest = r;
        }
        if (largest !== i) {
            Heap.swap(arr, i, largest);
            Heap.maxHeapify(arr, largest, size);
        }
    };
    return Heap;
}());
exports.default = Heap;
//# sourceMappingURL=heap.js.map