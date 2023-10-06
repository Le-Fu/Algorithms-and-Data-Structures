"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidBST = void 0;
var btree_1 = require("./btree");
function isValidBST(data) {
    var root = new btree_1.default(data);
    return btree_1.default.walk(root);
}
exports.isValidBST = isValidBST;
//# sourceMappingURL=isValidBST.js.map