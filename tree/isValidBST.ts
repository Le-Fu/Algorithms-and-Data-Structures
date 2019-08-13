import Tree from "./btree";

export function isValidBST(data: number[]) {
  let root = new Tree(data)
  return Tree.walk(root)
}