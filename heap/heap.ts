export default class Heap {
  data: number[]
  constructor(data: number[]) {
    this.data = data
  }

  sort() {
    let iArr = this.data
    let n = iArr.length

    if (n <= 1) {
      return iArr
    } else {
      for (let i = Math.floor(n / 2); i >= 0; i--) {
        Heap.maxHeapify(iArr, i, n)
      }
      for (let j = 0; j < n; j++) {
        Heap.swap(iArr, 0, n - 1 - j)
        Heap.maxHeapify(iArr, 0, n - 1 - j - 1)
      }
      return iArr
    }
  }

  static swap(arr: number[], a: number, b: number): void {
    if (a === b) {
      return
    }

    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
  }

  // create a max heap
  static maxHeapify(arr: number[], i: number, size: number) {
    // left node (index)
    let l = i * 2 + 1
    // right node (index)
    let r = i * 2 + 2
    let largest = i

    // parent node vs left node => largest node
    if (l <= size && arr[l] > arr[largest]) {
      largest = l
    }

    // parent node vs right node => largest node
    if (r <= size && arr[r] > arr[largest]) {
      largest = r
    }

    if (largest !== i) {
      Heap.swap(arr, i, largest)
      Heap.maxHeapify(arr, largest, size)
    }
  }

}