import { List, Node } from "./LinkList";

let testList = new List<string>("a");
testList.append("b");
testList.append("c");
testList.append("d");
testList.append("e");
testList.display();

// function reverseLinkList(head: Node<string>) {
//   if (!head || head.next === null) {
//     return head;
//   }
//   let p = head.next;
//   head.next = null;
//   while (p !== null) {
//     let temp = p.next;
//     p.next = head;
//     head = p;
//     p = temp;
//   }

//   return head;
// }

function reverseLinkList(head: Node<string>) {
  if (head == null || head.next == null) {
    return head;
  }
  const last: Node<string> = reverseLinkList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

console.log(JSON.stringify(reverseLinkList(testList.head)));
