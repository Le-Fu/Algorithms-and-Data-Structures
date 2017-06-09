module.exports = function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empaty = empaty;
}

function enqueue(element) {
  this.dataStore.push(element);
}

function dequeue() {
  return this.dataStore.shift();
}

function front() {
  return this.dataStore[0];
}

function back() {
  return this.dataStore[this.dataStore.length - 1];
}

function toString() {
  var retStr = '';
  for (var i = 0, l = this.dataStore.length; i < l; i++) {
    retStr += this.dataStore[i] + '\n';
  }
  return retStr;
}

function empty() {
  if (this.dataStore.length === 0) {
    return true;
  } else {
    return false;
  }
}

