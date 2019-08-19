export function createArr(num: number): number[] {
  let rs = []
  for (let i = 0; i < num; i++) {
    rs.push(Math.floor(Math.random() * 100) + 1)
  }
  return rs
}

function swap(arr: number[], i: number, j: number): number[] {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  return arr
}

// bubble sort
export function bubbleSort(arr: number[]): number[] {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (arr[i] > arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}

// select sort
export function selectionSort(arr: number[]): number[] {
  const len = arr.length
  let min

  for (let i = 0; i < len - 1; i++) {
    min = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }

  return arr
}

// insert sort
export function insertSort(arr: number[]): number[] {
  const len = arr.length
  let current: number
  let preIndex: number

  for (let i = 1; i < len; i++) {
    current = arr[i]
    preIndex = i - 1
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

// shell sort
export function shellSort(arr: number[]): number[] {
  const gaps = [5, 3, 1]
  for (let g = 0; g < gaps.length; ++g) {
    for (let i = gaps[g]; i < arr.length; ++i) {
      let temp = arr[i]
      let j = i
      for (; j >= gaps[g] && arr[j - gaps[g]] > temp; j -= gaps[g]) {
        arr[j] = arr[j - gaps[g]];
      }
      arr[j] = temp;
    }
  }
  return arr
}

