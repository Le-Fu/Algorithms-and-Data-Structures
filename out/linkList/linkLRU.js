"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheList = void 0;
var linkList_1 = require("./linkList");
var CacheList = (function (_super) {
    __extends(CacheList, _super);
    function CacheList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxLen = null;
        _this.curLen = 0;
        return _this;
    }
    CacheList.prototype.setMaxLen = function (len) {
        this.maxLen = len - 1;
    };
    CacheList.prototype.isFullLength = function () {
        var isFullLength = typeof this.maxLen === "number" ? this.maxLen <= this.curLen : false;
        console.log(isFullLength);
        return isFullLength;
    };
    CacheList.prototype.cache = function (item) {
        console.log(item);
        var curItem = this.find(item);
        if (curItem) {
            this.remove(curItem.element);
            this.insertHead(item);
        }
        else {
            if (this.isFullLength()) {
                this.remove(this.findLast().element);
                this.insertHead(item);
            }
            else {
                this.insertHead(item);
                this.curLen++;
            }
        }
    };
    return CacheList;
}(linkList_1.List));
exports.CacheList = CacheList;
var cacheList = new CacheList(1);
cacheList.setMaxLen(5);
cacheList.cache(2);
cacheList.cache(3);
cacheList.cache(4);
cacheList.display();
cacheList.cache(4);
cacheList.display();
cacheList.cache(2);
cacheList.display();
cacheList.cache(5);
cacheList.display();
cacheList.cache(6);
cacheList.display();
cacheList.cache(7);
cacheList.display();
//# sourceMappingURL=linkLRU.js.map