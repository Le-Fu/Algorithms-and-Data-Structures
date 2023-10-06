"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BNode = void 0;
var BNode = (function () {
    function BNode(val) {
        this.val = val;
        this.left = this.right = null;
    }
    return BNode;
}());
exports.BNode = BNode;
var Tree = (function () {
    function Tree(data) {
        this.root = new BNode(data.shift());
        this.data = data;
        this.traversal(this.root, this.data);
    }
    Tree.prototype.traversal = function (root, data) {
        var _this = this;
        data.forEach(function (item) {
            _this.insert(root, item);
        });
        return this.root;
    };
    Tree.prototype.insert = function (node, num) {
        if (node.val > num) {
            if (node.left === null) {
                node.left = new BNode(num);
            }
            else {
                this.insert(node.left, num);
            }
        }
        else {
            if (node.right === null) {
                node.right = new BNode(num);
            }
            else {
                this.insert(node.right, num);
            }
        }
    };
    Tree.walk = function (root) {
        if (!root.left && !root.right) {
            return true;
        }
        else if ((root.left && (root.val < root.left.val)) || ((root.right && (root.val < root.right.val)))) {
            return false;
        }
        else {
            Tree.walk(root.left) && Tree.walk(root.right);
        }
    };
    return Tree;
}());
exports.default = Tree;
//# sourceMappingURL=btree.js.map