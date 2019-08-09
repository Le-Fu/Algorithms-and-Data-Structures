interface Node<T> {
  element: T
  next: Node<T> | null
}

class Node<T> implements Node<T>{
  element: T
  constructor(element: T) {
    this.element = element
    this.next = null
  }
}

export interface List<T> {
  head: Node<T>;
  find(item: T): Node<T>;
  insert(newElement: T, item: T): void;
  remove(item: T): void;
  display(): void;
  findPrevious(item: T): Node<T>;
  remove(item: T): void;
}

export class List<T> implements List<T>{
  headElement: T 
  constructor(element: T) {
    this.headElement = element
    this.head = new Node<T>(this.headElement)
    this.head.next = this.head
  }

  find(item: T) {
    let currNode = this.head
    while (currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode
  }

  insert(newElement: T, item: T) {
    let newNode = new Node<T>(newElement)
    let current = this.find(item)
    newNode.next = current.next
    current.next = newNode
  }

  display() {
    let currNode = this.head
    while (!(currNode === null) && currNode.element !== this.headElement) {
      console.log(currNode.element)
      currNode = currNode.next
    }
  }

  findPrevious(item: T) {
    let currNode = this.head
    while ((currNode.next.element !== item) && !(currNode.next === null)) {
      currNode = currNode.next
    }
    return currNode
  }

  remove(item: T) {
    var prevNode = this.findPrevious(item)
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next
    }
  }
}
