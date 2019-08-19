import { createArr, bubbleSort, selectionSort, insertSort, shellSort } from "../sort/sort"

let tempArr: number[];
let sortArr: number[];
beforeAll(() => {
  tempArr = createArr(10);
  sortArr = bubbleSort(tempArr.slice());
  console.log(tempArr, sortArr)
});

test(`bubbleSort test`, () => {
  expect(bubbleSort(tempArr)).toEqual(sortArr);
});

test(`selectionSort test`, () => {
  expect(selectionSort(tempArr)).toEqual(sortArr);
});

test(`insertSort test`, () => {
  expect(insertSort(tempArr)).toEqual(sortArr);
});

test(`shellSort test`, () => {
  expect(shellSort(tempArr)).toEqual(sortArr);
});