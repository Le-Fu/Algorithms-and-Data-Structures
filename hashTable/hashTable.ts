class HashTable {
  table: string[];
  constructor(len: number) {
    this.table = new Array(len)
  }

  simpleHash(data: string) {
    var total = 0;
    for (var i = 0; i < data.length; ++i) {
      total += data.charCodeAt(i);
    }
    return total % this.table.length;
  }

  put(data: string) {
    var pos = this.simpleHash(data);
    this.table[pos] = data;
  }

  showDistro() {
    var n = 0;
    for (var i = 0; i < this.table.length; ++i) {
      if (this.table[i] != undefined) {
        console.log(i + ": " + this.table[i]);
      }
    }
  }
}

const someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]

let hTable = new HashTable(137)

for (var i = 0; i < someNames.length; ++i) {
  hTable.put(someNames[i]);
}

hTable.showDistro();

