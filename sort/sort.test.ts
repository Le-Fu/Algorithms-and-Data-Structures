import { quickSort } from "./sort";

describe("sum module", () => {
  test("sort [3,7,2,9,5,4] to [2,3,4,5,7,9]", () => {
    expect(quickSort([3, 7, 2, 9, 5, 4])).toStrictEqual([2, 3, 4, 5, 7, 9]);
  });
});
