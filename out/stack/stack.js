"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
var Stack = (function () {
    function Stack() {
        this.dataStore = [];
        this.top = 0;
    }
    Stack.prototype.push = function (element) {
        this.dataStore[this.top++] = element;
    };
    Stack.prototype.pop = function () {
        return this.dataStore[--this.top];
    };
    Stack.prototype.peek = function () {
        return this.dataStore[this.top - 1];
    };
    Stack.prototype.length = function () {
        return this.top;
    };
    Stack.prototype.clear = function () {
        this.top = 0;
    };
    return Stack;
}());
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map