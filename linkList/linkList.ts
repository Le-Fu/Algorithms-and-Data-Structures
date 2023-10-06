export interface Node<T> {
  element: T;
  next: Node<T> | null;
  prev?: Node<T> | null;
}

export class Node<T> implements Node<T> {
  element: T;
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

export interface List<T> {
  head: Node<T>;
  find(item: T): Node<T>;
  insert(newElement: T, item: T): void;
  insertHead(newElement: T): void;
  append(newElement: T): void;
  remove(item: T): void;
  display(): void;
  findPrevious(item: T): Node<T>;
  findLast(): Node<T>;
}

export class List<T> implements List<T> {
  constructor(element: T) {
    this.head = new Node<T>(element);
  }

  find(item: T) {
    let currNode = this.head;
    while (currNode?.element && currNode.element != item) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findPrevious(item: T) {
    let currNode = this.head;
    while (currNode.next.element !== item && !(currNode.next === null)) {
      currNode = currNode.next;
    }
    return currNode;
  }

  findLast() {
    let currNode = this.head;
    while (currNode.next !== null) {
      currNode = currNode.next;
    }
    return currNode;
  }

  insert(newElement: T, item: T) {
    let newNode = new Node<T>(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
  }

  insertHead(newElement: T) {
    let newNode = new Node<T>(newElement);
    let oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
  }
  append(newElement: T) {
    let newNode = new Node<T>(newElement);
    let lastNode = this.findLast();
    lastNode.next = newNode;
  }

  display() {
    let listArr = [];
    let currNode = this.head;
    while (!(currNode === null)) {
      listArr.push(currNode.element);
      currNode = currNode.next;
    }
    console.log(listArr.join(" -> "));
  }

  remove(item: T) {
    if (this.head.element === item) {
      let oldHead = this.head;
      this.head = oldHead.next;
      return;
    }
    var prevNode = this.findPrevious(item);
    if (!(prevNode.next == null)) {
      prevNode.next = prevNode.next.next;
    }
  }
}
