class Sort {
  swap(arr, i, j) {
    var temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }
  bubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          this.swap(arr, j, j + 1)
        }
      }
    }
    return arr
  }
  selectionSort(arr) {
    let len = arr.length,
      minIndex;
    for (let i = 0; i < len - 1; i++) {
      minIndex = i
      for (let j = i + 1; j < len - 1; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j
        }
      }
      if (minIndex != i) {
        this.swap(arr, i, minIndex)
      }
    }
    return arr

    console.log('selectionSort', arr)
  }
  insertSort(arr) {
    let len = arr.length,
      item,
      i,
      j;
    for (i = 0; i < len; i++) {
      item = arr[i];
      for (j = i - 1; j > -1 && arr[j] > item; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = item;
    }
    return arr

    console.log('insertSort', arr)
  }
  combineSort(arr) {

    console.log('combineSort', arr)
  }
  shell(arr) {
    let n = arr.length;
    for (var gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      console.log(gap)//3,1
      for (let i = gap; i < n; i++) {
        let temp = arr[i];
        for (var j = i - gap; j > 0; j -= gap) {
          if (arr[j] >= temp) {
            arr[j + gap] = arr[j]
          } else {
            if (j != i - gap) {
              arr[j + gap] = temp
              break;
            }
          }
        }
      }
    }
    return arr
  }

}


module.exports = Sort;