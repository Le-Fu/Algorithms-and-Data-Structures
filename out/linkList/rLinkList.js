"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
var Node = (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    return Node;
}());
var List = (function () {
    function List(element) {
        this.headElement = element;
        this.head = new Node(this.headElement);
        this.head.next = this.head;
    }
    List.prototype.find = function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.insert = function (newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    };
    List.prototype.display = function () {
        var currNode = this.head;
        while (!(currNode === null) && currNode.element !== this.headElement) {
            console.log(currNode.element);
            currNode = currNode.next;
        }
    };
    List.prototype.findPrevious = function (item) {
        var currNode = this.head;
        while ((currNode.next.element !== item) && !(currNode.next === null)) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.remove = function (item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=rLinkList.js.map