
class Node {
    constructor(element) {
        this.element = element
        this.next = null
    }
}

class LinkList {
    constructor(element) {
        this.head = new Node(element)
    }

    find(item) {
        let curNode = this.head
        while (curNode !== null && curNode.element !== item) {
            curNode = curNode.next
        }
        return curNode
    }

    insert(element, item) {
        let newNode = new Node(element)
        let curNode = this.find(item)
        newNode.next = curNode.next
        curNode.next = newNode
    }

    findPrev(item) {
        let curNode = this.head
        while (curNode.next !== null && curNode.next.element !== item) {
            curNode = curNode.next
        }
        return curNode
    }

    remove(item) {
        let prevNode = this.findPrev(item)
        if (prevNode.next !== null) {
            prevNode.next = prevNode.next.next
        }
    }

    display() {
        let linkListArr = []
        let curNode = this.head
        while (curNode !== null) {
            linkListArr.push(curNode.element);
            curNode = curNode.next
        }
        console.log(linkListArr.join(' -> '));
    }

}

let ll = new LinkList('a')

ll.insert('b', 'a')
ll.insert('c', 'b')
ll.insert('d', 'c')
// ll.remove(2)
// ll.remove(4)
// ll.remove(3)
// console.log(ll.find(6));
ll.display()

// var pointer;
// function reverseLinkList(head) {
//     if (!head)
//         return true;
//     // 递归逆序遍历
//     var res0 = reverseLinkList(head.next) 
//     var res1 = pointer.element === head.element
//     var res = res0 && res1
//     // pointer 指针不断向后指，进行正序遍历
//     pointer = pointer.next;
//     return res;
// }
// function isPalindrome(head) {
//     pointer = head;
//     debugger
//     return reverseLinkList(head);
// }
// var rs = isPalindrome(ll.head);
// console.log(rs);

// function reverseLinkList(head) {
//     if (head == null || head.next == null) {
//         debugger
//         return head;
//     }
//     const last = reverseLinkList(head.next);
//     head.next.next = head;
//     head.next = null;
//     return last;
// }

// reverseLinkList(ll.head)