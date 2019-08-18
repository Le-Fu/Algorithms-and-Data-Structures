import BST, { BNode } from "../tree/bst";

let newTree = new BST()

newTree.insert(23)
newTree.insert(45)
newTree.insert(16)
newTree.insert(37)
newTree.insert(3)
newTree.insert(99)
newTree.insert(22)

test('preOrder test: [23, 16, 3, 22, 45, 37, 99]', () => {
  expect(newTree.preOrder()).toEqual([23, 16, 3, 22, 45, 37, 99])
})

test('inOrder test: [3, 16, 22, 23, 37, 45, 99]', () => {
  expect(newTree.inOrder()).toEqual([3, 16, 22, 23, 37, 45, 99])
})

test('postOrder test: [3, 22, 16, 37, 99, 45, 23]', () => {
  expect(newTree.postOrder()).toEqual([3, 22, 16, 37, 99, 45, 23])
})

test('The minimum value of the BST is: 3', () => {
  expect(newTree.getMin()).toBe(3)
})

test('The maximum value of the BST is: 99', () => {
  expect(newTree.getMax()).toBe(99)
})

test('Find the given value"s BNode ', () => {
  let rightSubLeftTree = new BNode(37, null, null)
  let rightSubRightTree = new BNode(99, null, null)

  let leftSubLeftTree = new BNode(3, null, null)
  let leftSubRightTree = new BNode(22, null, null)

  let rightSubTree = new BNode(45, rightSubLeftTree, rightSubRightTree)
  let leftSubTree = new BNode(16, leftSubLeftTree, leftSubRightTree)

  let rootTree = new BNode(23, leftSubTree, rightSubTree)

  expect(newTree.find(16)).toEqual(leftSubTree)

  expect(newTree.find(16).data).toBe(16)
  expect(newTree.find(16).left.data).toBe(3)
  expect(newTree.find(16).right.data).toBe(22)

})

test('Delete the given value"s BNode ', () => {
  newTree.insert(36)
  let leftSubLeftSubRightTree = new BNode(36, null, null)
  let rightSubLeftTree = new BNode(37, leftSubLeftSubRightTree, null)
  

  let rightSubRightTree = new BNode(99, null, null)

  let leftSubLeftTree = new BNode(3, null, null)
  let leftSubRightTree = new BNode(22, null, null)

  let rightSubTree = new BNode(45, rightSubLeftTree, rightSubRightTree)

  let leftSubTree = new BNode(16, leftSubLeftTree, leftSubRightTree)
  // after remove leftSubTree Node
  let newLeftSubTree = new BNode(22, leftSubLeftTree, null)

  let rootTree = new BNode(23, newLeftSubTree, rightSubTree)

  expect(newTree.remove(16)).toEqual(rootTree)
  
  // after delete 37
  let newRightSubLeftTree = new BNode(36, null, null)
  rightSubTree = new BNode(45, newRightSubLeftTree, rightSubRightTree)
  rootTree = new BNode(23, newLeftSubTree, rightSubTree)
  expect(newTree.remove(37)).toEqual(rootTree)

})

