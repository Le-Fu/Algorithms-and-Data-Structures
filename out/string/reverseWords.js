"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseWords(s) {
    return s.match(/[\w']+/g).map(function (item) {
        return item.split('').reverse().join('');
    }).join(' ');
}
exports.default = reverseWords;
//# sourceMappingURL=reverseWords.js.map