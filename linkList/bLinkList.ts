interface Node<T> {
  element: T
  next: Node<T> | null
  previous: Node<T> | null
}

class Node<T> implements Node<T>{
  element: T
  constructor(element: T) {
    this.element = element
    this.next = null
    this.previous = null
  }
}

export interface List<T> {
  head: Node<T>;
  find(item: T): Node<T>;
  insert(newElement: T, item: T): void;
  remove(item: T): void;
  display(): void;
  remove(item: T): void;
  findLast(): Node<T>;
  dispReverse(): void;
}

export class List<T> implements List<T>{
  constructor(element: T) {
    this.head = new Node<T>(element)
  }

  find(item: T) {
    let currNode = this.head
    while (currNode.element !== item) {
      currNode = currNode.next;
    }
    return currNode
  }

  insert(newElement: T, item: T) {
    let newNode = new Node<T>(newElement)
    let current = this.find(item)
    newNode.next = current.next
    newNode.previous = current
    current.next = newNode
  }

  display() {
    let currNode = this.head
    while (!(currNode === null)) {
      console.log(currNode.element)
      currNode = currNode.next
    }
  }

  remove(item: T) {
    var currNode = this.find(item)
    if (!(currNode.next === null)) {
      currNode.previous.next = currNode.next
      currNode.next.previous = currNode.previous
      currNode.next = null
      currNode.previous = null
    }
  }

  findLast() {
    var currNode = this.head
    while (!(currNode.next === null)) {
      currNode = currNode.next
    }
    return currNode
  }

  dispReverse() {
    var currNode = this.head
    currNode = this.findLast()
    while (!(currNode.previous !== null)) {
      console.log(currNode.element)
      currNode = currNode.previous
    }
  }
}

let ll = new List<number>(0)

ll.insert(1, 0)
ll.insert(2, 1)
ll.insert(3, 2)
ll.insert(4, 3)
ll.dispReverse()


