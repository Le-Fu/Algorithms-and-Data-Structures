import { isValidBST } from "../tree/isValidBST";
import Tree, { BNode } from "../tree/btree";

test('isValidBST', () => {
  expect(isValidBST([2, 3, 4, 5, 6, 7])).toBe(true)
})

test('isValidBST false', () => {
  let root = new BNode(3)
  root.left = new BNode(4)
  root.right = new BNode(5)
  expect(Tree.walk(root)).toBe(false)
})

