/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  var len = this.stack.length
  var minNum = this.top()
  for (var i = len - 2; i >= 0; i--) {
    minNum = minNum < this.stack[i] ? minNum : this.stack[i]
  }
  return minNum
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(9)
obj.push(4)
obj.push(-8)
obj.push(-8)
obj.push(4)
obj.push(-2)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(obj, param_4, param_3)