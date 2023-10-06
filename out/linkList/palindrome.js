"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linkList_1 = require("./linkList");
var testList = new linkList_1.List('a');
testList.append('b');
testList.append('c');
testList.append('d');
testList.append('c');
testList.append('b');
testList.append('a');
testList.display();
var pointer;
function reverseLinkList(head) {
    if (!head)
        return true;
    var res0 = reverseLinkList(head.next);
    var res1 = pointer.element === head.element;
    var res = res0 && res1;
    pointer = pointer.next;
    return res;
}
function isPalindrome(head) {
    pointer = head;
    return reverseLinkList(head);
}
var rs = isPalindrome(testList.head);
console.log(rs);
//# sourceMappingURL=palindrome.js.map