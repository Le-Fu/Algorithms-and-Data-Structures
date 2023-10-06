"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = exports.Node = void 0;
var Node = (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var List = (function () {
    function List(element) {
        this.head = new Node(element);
    }
    List.prototype.find = function (item) {
        var currNode = this.head;
        while ((currNode === null || currNode === void 0 ? void 0 : currNode.element) && currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.findPrevious = function (item) {
        var currNode = this.head;
        while (currNode.next.element !== item && !(currNode.next === null)) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.findLast = function () {
        var currNode = this.head;
        while (currNode.next !== null) {
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
    List.prototype.insertHead = function (newElement) {
        var newNode = new Node(newElement);
        var oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;
    };
    List.prototype.append = function (newElement) {
        var newNode = new Node(newElement);
        var lastNode = this.findLast();
        lastNode.next = newNode;
    };
    List.prototype.display = function () {
        var listArr = [];
        var currNode = this.head;
        while (!(currNode === null)) {
            listArr.push(currNode.element);
            currNode = currNode.next;
        }
        console.log(listArr.join(" -> "));
    };
    List.prototype.remove = function (item) {
        if (this.head.element === item) {
            var oldHead = this.head;
            this.head = oldHead.next;
            return;
        }
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    };
    return List;
}());
exports.List = List;
//# sourceMappingURL=linkList.js.map