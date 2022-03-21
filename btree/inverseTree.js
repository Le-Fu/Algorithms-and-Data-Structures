
var BNode = (function () {
    function BNode(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
    return BNode;
}());

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
    // 验证是否是二叉查找树
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

let root = new Tree([4, 2, 7, 1, 3, 6, 9]).root


function invertTree(root) {
    if (root === null) return null
    let temp = root.left
    root.left = root.right
    root.right = temp
    invertTree(root.left)
    invertTree(root.right)
    return root
};


console.log(invertTree(root))