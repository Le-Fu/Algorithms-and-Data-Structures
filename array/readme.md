# JS Array
## 概念
js中的数组严格来说应该称作对象，是特殊的js对象，在内部被归类为数组。

## 创建数组的几种方式
1. `var arr = []; `
2. `var arr = new Array(args)`, 其中`args`可以是一组元素`1,2,3`作为数组的初始化数据, 也可以是单个元素`3`，作为数组的长度。

## 如何判断数组
在js中判断数组类型其实并不容易，因为：`typeof arr === 'object'`。好在es6数组的新方法`Array.isArray()`解决了这一问题。
那么，没有这个方法前我们是如何判断一个变量是不是数组呢？
```
var isType = function(type) {
  return function(x) {
    return Object.prototype.toString.call(x).toLocaleLowerCase() === '[object '+ type.toLocaleLowerCase() + ']';
  } 
} 

var isArray = isType('array')
```
