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
    console.log('bubbleSort', arr)
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
    console.log('selectionSort', arr)
  }
  insertSort(arr) {
    let len = arr.length,
      item,
      i,
      j;
    for (i = 0; i < len; i++) {
      item = arr[i];
      for (j = i-1; j>-1 && arr[j] > item; j--) {
        arr[j+1] = arr[j]
      }      
      arr[j+1] = item;
    }
    console.log('insertSort', arr)
  }
  combineSort(arr) {
    
    console.log('combineSort', arr)
  }
}

const sort = new Sort();

let arr = [7, 13, 42, 30, 20, 11, 9, 13, 15, 2, 14, 1, 87];

// sort.bubbleSort(arr)
// sort.selectionSort(arr)
// sort.insertSort(arr)
sort.combineSort(arr)
