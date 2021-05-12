"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(element) {
        this.element = element;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var List = /** @class */ (function () {
    function List(element) {
        this.head = new Node(element);
    }
    List.prototype.find = function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    List.prototype.findPrevious = function (item) {
        var currNode = this.head;
        while ((currNode.next.element !== item) && !(currNode.next === null)) {
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
        console.log(listArr.join(' -> '));
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
