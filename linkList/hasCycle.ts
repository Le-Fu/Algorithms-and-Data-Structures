import { List, Node } from "./linkList";

let testList = new List<number>(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.append(5);
testList.display();

var hasCycle = function (head: Node<number> | null): boolean {
  let map = new Map();
  let currIndex = 0;
  let curr = head;
  let hasCycle = false;
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