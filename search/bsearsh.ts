function bSearch(arr: number[], item: number): number {
  let head = 0,
    end = arr.length - 1;
  function search(arr: number[], item: number, head: number, end: number): number {
    if (head > end) {
      return -1;
    }
    let middle = Math.floor((end + head) / 2);
    if (arr[middle] === item) {
      return middle;
    }

    if (item > arr[middle]) {
      return search(arr, item, middle + 1, end);
    } else {
      return search(arr, item, head, middle - 1);
    }
  }
  return search(arr, item, head, end);
}

const a = [2, 3, 4, 5, 6, 7];
const res = bSearch(a, 5);
console.log(res);
