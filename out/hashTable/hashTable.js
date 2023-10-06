var HashTable = (function () {
    function HashTable(len) {
        this.table = new Array(len);
    }
    HashTable.prototype.simpleHash = function (data) {
        var total = 0;
        for (var i = 0; i < data.length; ++i) {
            total += data.charCodeAt(i);
        }
        return total % this.table.length;
    };
    HashTable.prototype.put = function (data) {
        var pos = this.simpleHash(data);
        this.table[pos] = data;
    };
    HashTable.prototype.showDistro = function () {
        var n = 0;
        for (var i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                console.log(i + ": " + this.table[i]);
            }
        }
    };
    return HashTable;
}());
var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable(137);
for (var i = 0; i < someNames.length; ++i) {
    hTable.put(someNames[i]);
}
hTable.showDistro();
//# sourceMappingURL=hashTable.js.map