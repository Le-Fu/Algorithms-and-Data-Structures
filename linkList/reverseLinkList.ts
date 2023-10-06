import { List, Node } from "./linkList";

let testList = new List<number>(1);
testList.append(2);
testList.append(3);
testList.append(4);
testList.append(5);
testList.display();

function reverseLinkList(head: Node<number>): Node<number> {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

// let newHead = reverseLinkList(testList.head);
// console.log(JSON.stringify(newHead, null, 2));

var reverseBetween = function (head: Node<number>, left: number, right: number) {

  return head;
};

reverseBetween(testList.head, 2, 4);
