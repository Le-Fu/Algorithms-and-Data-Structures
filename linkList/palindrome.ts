import { List, Node } from './LinkList'

let testList = new List<string>('a')
testList.insert('b','a')
testList.insert('c','b')
testList.insert('d','c')
// testList.insert('a','b')
testList.display()

function isPalindrome(head: Node<string>) {
    let aStr = ''
    let bStr = ''
    let curNode = head
    while (curNode) {
        aStr = aStr + curNode.element
        bStr = curNode.element + bStr
        curNode = curNode.next
    }
    return bStr === aStr
}

isPalindrome(testList.head)

