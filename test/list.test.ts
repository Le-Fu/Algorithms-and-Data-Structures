import List from "../list/list"

let ml = new List<number>()


test("bubbleSort's result is [1, 2, 3, 4]", () => {
  ml.append(1)
  ml.append(2)
  ml.append(3)
  ml.remove(2)
  expect(ml.toString()).toBe('1,3');
});