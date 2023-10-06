"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var linkList_1 = require("./linkList");
var testList = new linkList_1.List(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.append(5);
testList.display();
var hasCycle = function (head) {
    var map = new Map();
    var currIndex = 0;
    var curr = head;
    var hasCycle = false;
    while (curr !== null) {
        if (map.has(curr)) {
            hasCycle = true;
            break;
        }
        map.set(curr, currIndex);
        currIndex++;
        curr = curr.next;
    }
    return hasCycle;
};
hasCycle(testList.head);
//# sourceMappingURL=hasCycle.js.map