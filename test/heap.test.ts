import Heap from "../heap/heap";

test('Heap: 1', () => {
  let heap = new Heap([1, 3, 5, 6, 2, 9, 8]);
  expect(heap.sort()).toEqual([1, 2, 3, 5, 6, 8, 9])
})