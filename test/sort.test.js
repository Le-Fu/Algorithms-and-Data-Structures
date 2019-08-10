const Sort = require("../sort/sort")
const sort = new Sort()


test("bubbleSort's result is [1, 2, 3, 4]", () => {
  const rs = sort.bubbleSort([1, 3, 2, 4])
  expect(rs).toEqual([1, 2, 3, 4]);
});