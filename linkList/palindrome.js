"use strict";
exports.__esModule = true;
var LinkList_1 = require("./LinkList");
var testList = new LinkList_1.List('a');
testList.insert('b', 'a');
testList.insert('a', 'b');
// testList.insert('d', 'c')
// testList.insert('a','b')
testList.display();
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
var pointer;
function reverseLinkList(head) {
    if (!head)
        return true;
    // 递归逆序遍历
    var res = reverseLinkList(head.next) && (pointer.element === head.element);
    // pointer 指针不断向后指，进行正序遍历
    pointer = pointer.next;
    return res;
}
function isPalindrome(head) {
    pointer = head;
    return reverseLinkList(head);
}
var rs = isPalindrome(testList.head);
console.log(rs);
