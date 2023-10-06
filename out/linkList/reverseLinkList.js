"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linkList_1 = require("./linkList");
var testList = new linkList_1.List(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.append(5);
testList.display();
function reverseLinkList(head) {
    var prev = null;
    var curr = head;
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}
var reverseBetween = function (head, left, right) {
    return head;
};
reverseBetween(testList.head, 2, 4);
//# sourceMappingURL=reverseLinkList.js.map