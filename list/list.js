module.exports = function List() {
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];
  this.length = length;
  this.find = find;
  this.toString = toString;
  this.remove = remove;
  this.append = append;
  this.insert = insert;
  this.clear = clear;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

// 给列表添加元素
function append(element) {
  this.dataStore[this.listSize++] = element;
}

// 从列表查找某一元素
function find(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return i;
    }
  }
  return -1;
}

// 从列表移除某一元素
function remove(element) {
  var foundAt = this.find(element);
  if (foundAt > -1) {
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

// 列表的长度
function length() {
  return this.listSize;
}

// 显示列表的元素
function toString() {
  return this.dataStore;
}

// 向列表插入元素
function insert(element, after) {
  var insertPos = this.find(after);
  if (insertPos > -1) {
    this.dataStore.splice(insertPos, 0, element);
    ++this.listSize;
    return true;
  }
  return false;
}

// 清空列表中所有元素
function clear() {
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = 0;
}

// 判断给定值是否在列表中
function contains(element) {
  for (var i = 0; i < this.dataStore.length; ++i) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }
  return false;
}

// 遍历列表
function front() {
  this.pos = 0;
}

function end() {
  this.pos = this.listSize - 1;
}

function prev() {
  if (this.pos > 0) {
    --this.pos;
  }
}

function next() {
  if (this.pos < (this.listSize - 1)) {
    ++this.pos;
  }
}

function currPos() {
  return this.pos;
}

function moveTo(position) {
  this.pos = position;
}

function getElement() {
  return this.dataStore[this.pos];
}


