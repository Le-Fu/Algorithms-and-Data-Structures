interface Queue<T> {
  dataStore: T[];
  enqueue(element: T): void;
  dequeue(): T;
  front(): T;
  back(): T;
  toString(): string;
  empaty(): boolean;
}


class Queue<T> implements Queue<T>{
  dataStore: T[] = [];
  constructor() {
    this.dataStore = []
  }


  enqueue(element: T): void {
    this.dataStore.push(element);
  }

  dequeue(): T {
    return this.dataStore.shift();
  }

  front(): T {
    return this.dataStore[0];
  }

  back(): T {
    return this.dataStore[this.dataStore.length - 1];
  }

  toString(): string {
    var retStr = '';
    for (var i = 0, l = this.dataStore.length; i < l; i++) {
      retStr += this.dataStore[i] + '\n';
    }
    return retStr;
  }

  empty(): boolean {
    if (this.dataStore.length === 0) {
      return true;
    } else {
      return false;
    }
  }
}


