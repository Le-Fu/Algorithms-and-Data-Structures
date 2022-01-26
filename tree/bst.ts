export class BNode {
  data: number;
  left: BNode = null;
  right: BNode = null;
  constructor(data: number, left: BNode, right: BNode) {
    this.data = data
    this.left = left
    this.right = right
  }
  show() {
    return this.data
  }
}

export default class BST {
  root: BNode;
  preArr: number[] = [];
  inArr: number[] = [];
  postArr: number[] = [];

  insert(data: number): void {
    let n = new BNode(data, null, null)
    if (this.root == null) {
      this.root = n
    } else {
      let current = this.root
      let parent = null
      while (true) {
        parent = current
        if (data < current.data) {
          current = current.left
          if (current === null) {
            parent.left = n
            break
          }
        } else {
          current = current.right
          if (current === null) {
            parent.right = n
            break
          }
        }
      }
    }
  }

  inOrder(node: BNode = this.root): number[] {
    if (!(node === null)) {
      this.inOrder(node.left)
      this.inArr.push(node.show())
      this.inOrder(node.right)
    }
    return this.inArr
  }

  preOrder(node: BNode = this.root): number[] {
    if (!(node === null)) {
      this.preArr.push(node.show())
      this.preOrder(node.left)
      this.preOrder(node.right)
    }
    return this.preArr
  }

  postOrder(node: BNode = this.root): number[] {
    if (!(node === null)) {
      this.postOrder(node.left)
      this.postOrder(node.right)
      this.postArr.push(node.show())
    }
    return this.postArr
  }

  getMin(): number {
    let current = this.root
    while (!(current.left === null)) {
      current = current.left
    }
    return current.data
  }

  getMax(): number {
    let current = this.root
    while (!(current.right === null)) {
      current = current.right
    }
    return current.data
  }

  find(data: number): BNode {
    let current = this.root
    while (current !== null) {
      if (data == current.data) {
        return current
      } else if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return null
  }

  getMinNode(node: BNode = this.root): BNode {
    let current = node
    while (!(current.left === null)) {
      current = current.left
    }
    return current
  }

  remove(data: number): BNode {
    return this.removeNode(this.root, data)
  }

  removeNode(node: BNode, data: number): BNode {
    if (node === null) {
      return null
    }
    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null
      }
      if (node.left == null) {
        return node.right
      }
      if (node.right == null) {
        return node.left
      }
      var tempNode = this.getMinNode(node.right)
      node.data = tempNode.data
      node.right = this.removeNode(node.right, tempNode.data)
      return node
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else {
      node.right = this.removeNode(node.right, data)
      return node
    }
  }
  
}
