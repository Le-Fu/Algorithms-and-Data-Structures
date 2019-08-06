var myList = (function () {
    function myList() {
        this.dataStore = [];
        this.listSize = 0;
        this.pos = 0;
        this.dataStore = [];
    }
    myList.prototype.clear = function () {
        delete this.dataStore;
        this.dataStore = [];
        this.listSize = this.pos = 0;
    };
    myList.prototype.append = function (element) {
        this.dataStore[this.listSize++] = element;
    };
    myList.prototype.find = function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] === element) {
                return i;
            }
        }
        return -1;
    };
    myList.prototype.remove = function (element) {
        var foundAt = this.find(element);
        if (foundAt > -1) {
            this.dataStore.splice(foundAt, 1);
            --this.listSize;
            return true;
        }
        return false;
    };
    myList.prototype.length = function () {
        return this.listSize;
    };
    myList.prototype.toString = function () {
        return this.dataStore.toString();
    };
    myList.prototype.insert = function (element, after) {
        var insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    };
    myList.prototype.contains = function (element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] === element) {
                return true;
            }
        }
        return false;
    };
    myList.prototype.front = function () {
        this.pos = 0;
    };
    myList.prototype.end = function () {
        this.pos = this.listSize - 1;
    };
    myList.prototype.prev = function () {
        if (this.pos > 0) {
            --this.pos;
        }
    };
    myList.prototype.next = function () {
        if (this.pos < (this.listSize - 1)) {
            ++this.pos;
        }
    };
    myList.prototype.currPos = function () {
        return this.pos;
    };
    myList.prototype.moveTo = function (position) {
        this.pos = position;
    };
    myList.prototype.getElement = function () {
        return this.dataStore[this.pos];
    };
    return myList;
}());
var ml = new myList();
ml.append(4);
//# sourceMappingURL=list.js.map