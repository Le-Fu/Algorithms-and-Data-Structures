var BNode = (function () {
    function BNode(el) {
        this.el = el;
        this.prev = null;
        this.next = null;
    }
    return BNode;
}());
var BLinkList = (function () {
    function BLinkList(el) {
        this.head = new BNode(el);
    }
    BLinkList.prototype.find = function (item) {
        var curNode = this.head;
        while (curNode !== null && curNode.el !== item) {
            console.log(curNode.el);
            curNode = curNode.next;
        }
        return curNode;
    };
    BLinkList.prototype.insert = function (el, item) {
        var newNode = new BNode(el);
        var curNode = this.find(item);
        newNode.next = curNode.next;
        curNode.next = newNode;
    };
    BLinkList.prototype.display = function () {
        var linkListArr = [];
        var curNode = this.head;
        while (curNode !== null) {
            linkListArr.push(curNode.el);
            curNode = curNode.next;
        }
        console.log(linkListArr.join(' -> '));
    };
    return BLinkList;
}());
var ll = new BLinkList(1);
ll.insert(2, 1);
ll.insert(3, 2);
ll.insert(4, 3);
ll.insert(5, 4);
ll.display();
//# sourceMappingURL=myBLinkList.js.map