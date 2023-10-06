var Queue = (function () {
    function Queue() {
        this.dataStore = [];
        this.dataStore = [];
    }
    Queue.prototype.enqueue = function (element) {
        this.dataStore.push(element);
    };
    Queue.prototype.dequeue = function () {
        return this.dataStore.shift();
    };
    Queue.prototype.front = function () {
        return this.dataStore[0];
    };
    Queue.prototype.back = function () {
        return this.dataStore[this.dataStore.length - 1];
    };
    Queue.prototype.toString = function () {
        var retStr = '';
        for (var i = 0, l = this.dataStore.length; i < l; i++) {
            retStr += this.dataStore[i] + '\n';
        }
        return retStr;
    };
    Queue.prototype.empty = function () {
        if (this.dataStore.length === 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return Queue;
}());
//# sourceMappingURL=queue.js.map