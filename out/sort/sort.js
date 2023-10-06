"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shellSort = exports.insertSort = exports.selectionSort = exports.bubbleSort = exports.createArr = void 0;
function createArr(num) {
    var rs = [];
    for (var i_1 = 0; i_1 < num; i_1++) {
        rs.push(Math.floor(Math.random() * 100) + 1);
    }
    return rs;
}
exports.createArr = createArr;
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
function bubbleSort(arr) {
    var len = arr.length;
    for (var i_2 = 0; i_2 < len; i_2++) {
        for (var j = i_2; j < len; j++) {
            if (arr[i_2] > arr[j]) {
                swap(arr, i_2, j);
            }
        }
    }
    return arr;
}
exports.bubbleSort = bubbleSort;
function selectionSort(arr) {
    var len = arr.length;
    var min;
    for (var i_3 = 0; i_3 < len - 1; i_3++) {
        min = i_3;
        for (var j = i_3 + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, i_3, min);
    }
    return arr;
}
exports.selectionSort = selectionSort;
function insertSort(arr) {
    var len = arr.length;
    var current;
    var preIndex;
    for (var i_4 = 1; i_4 < len; i_4++) {
        current = arr[i_4];
        preIndex = i_4 - 1;
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
exports.insertSort = insertSort;
function shellSort(arr) {
    var gaps = [5, 3, 1];
    for (var g = 0; g < gaps.length; ++g) {
        for (var i_5 = gaps[g]; i_5 < arr.length; ++i_5) {
            var temp = arr[i_5];
            var j = i_5;
            for (; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
                arr[j] = arr[j - gaps[g]];
            }
            arr[j] = temp;
        }
    }
    return arr;
}
exports.shellSort = shellSort;
function partition(arr, l, r) {
    var p = r;
    var k = 0;
    for (var i_6 = l; i_6 < r; i_6++) {
        if ((arr[p] < arr[i_6] && p > i_6) || (arr[p] > arr[i_6] && p < i_6)) {
            var temp = arr[i_6];
            arr[i_6] = arr[p];
            arr[p] = temp;
            p = i_6;
        }
    }
    return i;
}
partition([3, 4, 2, 8, 5, 9], 0, 5);
//# sourceMappingURL=sort.js.map