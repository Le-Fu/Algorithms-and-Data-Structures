"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stack_1 = require("./stack");
var bracketPairMap = {
    "(": ")",
    "{": "}",
    "[": "]",
};
function judgeBracketPair(str) {
    var strArr = str.split(""), len = strArr.length, i = 0;
    var stack = new stack_1.Stack();
    for (; i < len; i++) {
        var item = strArr[i];
        var top_1 = stack.peek();
        if (typeof top_1 === "string" && bracketPairMap[top_1] === item) {
            stack.pop();
        }
        else {
            stack.push(item);
        }
    }
    return stack.length() === 0;
}
judgeBracketPair("[{([()({})][]){}}]");
//# sourceMappingURL=bracket.js.map