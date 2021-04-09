interface INode<T> {
    el: T;
    prev: INode<T> | null;
    next: INode<T> | null;
}

interface IBLinkList<T> {
    head: INode<T>;
}

class BNode<T> implements INode<T> {
    el: T;
    prev: INode<T>;
    next: INode<T>;
    constructor(el: T) {
        this.el = el;
        this.prev = null;
        this.next = null;
    }
}

class BLinkList<T> {
    head: INode<T>;
    constructor(el: T) {
        this.head = new BNode<T>(el);
    }

    find(item: T) {
        let curNode = this.head
        while (curNode !== null && curNode.el !== item) {
            console.log(curNode.el);
            curNode = curNode.next
        }
        return curNode
    }

    insert(el: T, item: T) {
        let newNode = new BNode(el)
        let curNode = this.find(item)
        newNode.next = curNode.next
        curNode.next = newNode
    }

    display() {
        let linkListArr = []
        let curNode = this.head
        while (curNode !== null) {
            linkListArr.push(curNode.el);
            curNode = curNode.next
        }
        console.log(linkListArr.join(' -> '));
    }
}


let ll = new BLinkList<number>(1)

ll.insert(2, 1)
ll.insert(3, 2)
ll.insert(4, 3)
ll.insert(5, 4)

ll.display()