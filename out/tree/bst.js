"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BNode = void 0;
var BNode = (function () {
    function BNode(data, left, right) {
        this.left = null;
        this.right = null;
        this.data = data;
        this.left = left;
        this.right = right;
    }
    BNode.prototype.show = function () {
        return this.data;
    };
    return BNode;
}());
exports.BNode = BNode;
var BST = (function () {
    function BST() {
        this.preArr = [];
        this.inArr = [];
        this.postArr = [];
    }
    BST.prototype.insert = function (data) {
        var n = new BNode(data, null, null);
        if (this.root == null) {
            this.root = n;
        }
        else {
            var current = this.root;
            var parent_1 = null;
            while (true) {
                parent_1 = current;
                if (data < current.data) {
                    current = current.left;
                    if (current === null) {
                        parent_1.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current === null) {
                        parent_1.right = n;
                        break;
                    }
                }
            }
        }
    };
    BST.prototype.inOrder = function (node) {
        if (node === void 0) { node = this.root; }
        if (!(node === null)) {
            this.inOrder(node.left);
            this.inArr.push(node.show());
            this.inOrder(node.right);
        }
        return this.inArr;
    };
    BST.prototype.preOrder = function (node) {
        if (node === void 0) { node = this.root; }
        if (!(node === null)) {
            this.preArr.push(node.show());
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
        return this.preArr;
    };
    BST.prototype.postOrder = function (node) {
        if (node === void 0) { node = this.root; }
        if (!(node === null)) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            this.postArr.push(node.show());
        }
        return this.postArr;
    };
    BST.prototype.getMin = function () {
        var current = this.root;
        while (!(current.left === null)) {
            current = current.left;
        }
        return current.data;
    };
    BST.prototype.getMax = function () {
        var current = this.root;
        while (!(current.right === null)) {
            current = current.right;
        }
        return current.data;
    };
    BST.prototype.find = function (data) {
        var current = this.root;
        while (current !== null) {
            if (data == current.data) {
                return current;
            }
            else if (data < current.data) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return null;
    };
    BST.prototype.getMinNode = function (node) {
        if (node === void 0) { node = this.root; }
        var current = node;
        while (!(current.left === null)) {
            current = current.left;
        }
        return current;
    };
    BST.prototype.remove = function (data) {
        return this.removeNode(this.root, data);
    };
    BST.prototype.removeNode = function (node, data) {
        if (node === null) {
            return null;
        }
        if (data === node.data) {
            if (node.left === null && node.right === null) {
                return null;
            }
            if (node.left == null) {
                return node.right;
            }
            if (node.right == null) {
                return node.left;
            }
            var tempNode = this.getMinNode(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        }
        else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        }
        else {
            node.right = this.removeNode(node.right, data);
            return node;
        }
    };
    return BST;
}());
exports.default = BST;
//# sourceMappingURL=bst.js.map