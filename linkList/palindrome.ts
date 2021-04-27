import { List, Node } from './LinkList'

let testList = new List<string>('a')
testList.insert('b', 'a')
testList.insert('a', 'b')
// testList.insert('d', 'c')
// testList.insert('a','b')
testList.display()

// function isPalindrome(head: Node<string>) {
//     let aStr = ''
//     let bStr = ''
//     let curNode = head
//     while (curNode) {
//         aStr = aStr + curNode.element
//         bStr = curNode.element + bStr
//         curNode = curNode.next
//     }
//     return bStr === aStr
// }
let pointer: Node<string>;

function reverseLinkList(head: Node<string>): boolean {
    if (!head) return true;
    // 递归逆序遍历
    const res: boolean = reverseLinkList(head.next) && (pointer.element === head.element);
    // pointer 指针不断向后指，进行正序遍历
    pointer = pointer.next;
    return res;
}

function isPalindrome(head: Node<string>) {
    pointer = head;
    return reverseLinkList(head);
}

const rs = isPalindrome(testList.head)
console.log(rs);


