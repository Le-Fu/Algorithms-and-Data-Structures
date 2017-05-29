module.exports = function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function peek() {
  return this.dataStore[this.top - 1];
}

function length() {
  return this.top;
}

function clear() {
  this.top = 0;
}

// //test
// var s = new Stack();

// s.push('Simon');
// s.push('jilvmeng');
// s.push('menglingping');
// s.push('tiankai');

// console.log(s.length());
// console.log(s.pop());
// console.log(s.peek());
// console.log(s.length());


