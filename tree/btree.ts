export class BNode {
  left: BNode
  right: BNode
  val: number
  constructor(val: number) {
    this.val = val
    this.left = this.right = null
  }
}

interface Tree extends BNode {
  new(data: number[]): Tree
  traversal(root: BNode, data: number[]): Tree
  insert(node: BNode, num: number): void
  walk(root: BNode): boolean
}

class Tree implements Tree {
  root: BNode
  data: number[]
  constructor(data: number[]) {
    this.root = new BNode(data.shift())
    this.data = data
    this.traversal(this.root, this.data)
  }

  traversal(root: BNode, data: number[]) {
    data.forEach(item => {
      this.insert(root, item)
    })
    return this.root
  }

  insert(node: BNode, num: number) {
    if (node.val > num) {
      if (node.left === null) {
        node.left = new BNode(num)
      } else {
        this.insert(node.left, num)
      }
    } else {
      if (node.right === null) {
        node.right = new BNode(num)
      } else {
        this.insert(node.right, num)
      }
    }
  }

  static walk(root: BNode) {
    if (!root.left && !root.right) {
      return true
    } else if ((root.left && (root.val < root.left.val)) || ((root.right && (root.val < root.right.val)))) {
      return false;
    } else {
      Tree.walk(root.left) && Tree.walk(root.right)
    }
  }

}


export default Tree


