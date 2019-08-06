interface List<T> {
  listSize: number;
  pos: number;
  length(): number;
  clear(): void;
  toString(): string;
  getElement(): T;
  insert(element: T, after: T): boolean;
  append(element: T): void;
  remove(element: T): boolean;
  front(): void;
  end(): void;
  prev(): void;
  next(): void;
  currPos(): number;
  moveTo(position: number): void
}

// type strOrNumList = List<number> | List<string>

class myList<T> implements List<T> {
  dataStore: T[] = [];
  listSize = 0;
  pos = 0;

  constructor() {
    this.dataStore = [];
  }

  clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }

  // 给列表添加元素
  append(element: T) {
    this.dataStore[this.listSize++] = element;
  }

  // 从列表查找某一元素
  find(element: T) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return i;
      }
    }
    return -1;
  }

  // 从列表移除某一元素
  remove(element: T) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
      this.dataStore.splice(foundAt, 1);
      --this.listSize;
      return true;
    }
    return false;
  }

  // 列表的长度
  length() {
    return this.listSize;
  }

  // 显示列表的元素
  toString() {
    return this.dataStore.toString();
  }

  // 向列表插入元素
  insert(element: T, after: T) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
      this.dataStore.splice(insertPos, 0, element);
      ++this.listSize;
      return true;
    }
    return false;
  }

  // 判断给定值是否在列表中
  contains(element: T) {
    for (var i = 0; i < this.dataStore.length; ++i) {
      if (this.dataStore[i] === element) {
        return true;
      }
    }
    return false;
  }

  // 遍历列表
  front() {
    this.pos = 0;
  }

  end() {
    this.pos = this.listSize - 1;
  }

  prev() {
    if (this.pos > 0) {
      --this.pos;
    }
  }

  next() {
    if (this.pos < (this.listSize - 1)) {
      ++this.pos;
    }
  }

  currPos() {
    return this.pos;
  }

  moveTo(position: number) {
    this.pos = position;
  }

  getElement() {
    return this.dataStore[this.pos];
  }
}

let ml = new myList<number>()

ml.append(4)