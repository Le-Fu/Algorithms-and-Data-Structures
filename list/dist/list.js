// type strOrNumList = List<number> | List<string>
var List = /** @class */ (function () {
    function List() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    List.prototype.clear = function () {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };
    // 给列表添加元素
    List.prototype.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };
    // 从列表查找某一元素
    List.prototype.find = function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    };
    // 从列表移除某一元素
    List.prototype.remove = function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
    // 列表的长度
    List.prototype.length = function () {
        return this.listSize;
    };
    // 显示列表的元素
    List.prototype.toString = function () {
        return this.dataStore.toString();
    };
    // 向列表插入元素
    List.prototype.insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    // 判断给定值是否在列表中
    List.prototype.contains = function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    };
    // 遍历列表
    List.prototype.front = function () {
        this.pos = 0;
    };
    List.prototype.end = function () {
        this.pos = this.listSize - 1;
    };
    List.prototype.prev = function () {
        if (this.pos > 0) {
            --this.pos;
        }
    };
    List.prototype.next = function () {
        if (this.pos < (this.listSize - 1)) {
            ++this.pos;
        }
    };
    List.prototype.currPos = function () {
        return this.pos;
    };
    List.prototype.moveTo = function (position) {
        this.pos = position;
    };
    List.prototype.getElement = function () {
        return this.dataStore[this.pos];
    };
    return List;
}());
var ml = new List();
ml.append('sd');
