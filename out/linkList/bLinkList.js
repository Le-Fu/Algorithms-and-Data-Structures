"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var Node = (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
    return Node;
}());
var List = (function () {
    function List(element) {
        this.head = new Node(element);
    }
    List.prototype.find = function (item) {
        var currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.insert = function (newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        newNode.previous = current;
        current.next = newNode;
    };
    List.prototype.display = function () {
        var currNode = this.head;
        while (!(currNode === null)) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    };
    List.prototype.remove = function (item) {
        var currNode = this.find(item);
        if (!(currNode.next === null)) {
            currNode.previous.next = currNode.next;
            currNode.next.previous = currNode.previous;
            currNode.next = null;
            currNode.previous = null;
        }
    };
    List.prototype.findLast = function () {
        var currNode = this.head;
        while (!(currNode.next === null)) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.dispReverse = function () {
        var currNode = this.head;
        currNode = this.findLast();
        while (!(currNode.previous !== null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    };
    return List;
}());
exports.List = List;
var ll = new List(0);
ll.insert(1, 0);
ll.insert(2, 1);
ll.insert(3, 2);
ll.insert(4, 3);
ll.dispReverse();
//# sourceMappingURL=bLinkList.js.map