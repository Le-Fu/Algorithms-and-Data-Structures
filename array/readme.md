# Javascript Array

<a name="n6si2"></a>
## 概念

js中的数组严格来说应该称作对象，是特殊的js对象，在内部被归类为数组。

<a name="bce7b2a9"></a>
## 创建数组的几种方式

1. `var arr = []`
1. `var arr = new Array(args)`，参数`args`传入的不同，新建数组页不一样：
  1. 作为新数组初始化数据:  `new Array(element0, element1[, ...[, elementN]]);`  
  1. 作为作为新数组的长度:  `var arr = new Array(arrayLength);`
3. `Array.of()` ，返回由所有参数值组成的数组，如果没有参数，就返回一个空数组；
3. `Array.from` ，可以将如下两种参数转成数组 ：
  1. 类数组，如 `var obj={0: 'a', 1: 'b', length: 2}` 
  1. 部署了 `Iterator` 接口的数据类型
    1. 字符串
    1. Set
    1. NodeList

<a name="011f272f"></a>
## 如何判断数组类型

在js中判断数组类型其实并不容易，因为：`typeof arr === 'object'`。好在es6数组的新方法`Array.isArray()`解决了这一问题。<br />那么，没有这个方法前我们是如何判断一个变量是不是数组呢？

```javascript
var isType = function(type) {
  return function(x) {
    return Object.prototype.toString.call(x).toLocaleLowerCase() === '[object '+ type.toLocaleLowerCase() + ']';
  } 
} 
var isArray = isType('array')
```

<a name="6qKUT"></a>
## API大全

API按照【会改变原数组的值】【不会改变原数组】【数组的遍历】分成三类。

<a name="vYBZp"></a>
#### 改变原数组
| **改变原数组** |  |  |
| :---: | --- | --- |
| **`splice`**<br /> | **使用** |  |
|  | **向/从数组中添加/删除项目**<br />`array.splice(index,howmany,item1,....itemX) `  |  |
|  | **参数** | **返回值** |
|  | <br />1. `index` ：必需。整数，规定添加/删除项的位置，使用负数可从数组结尾处规定位置。<br />1. `howmany` ：可选。要删除的项数量。如果设置为 0，则不会删除项。<br />1. `item1, ..., itemX` ： 可选。向数组添加的新项。<br /> | 如果有元素被删除,返回包含被删除项的新数组。 |
|  |  |  |
| <br /><br />**`pop`** | **使用** |  |
|  | **删除一个数组中的最后的一个元素**<br />`array.pop()`  |  |
|  | **参数** | **返回值** |
|  | 无 | 返回这个元素 |
|  |  |  |
| <br /><br />**`shift`** | **使用** |  |
|  | **删除数组的第一个元素**<br />`array.shift()`  |  |
|  | **参数** | **返回值** |
|  | 无 | 返回这个元素 |
|  |  |  |
| <br /><br />**`push`** | **使用** |  |
|  | **向数组的末尾添加一个或多个元素**<br />`array.push(item1,....itemX)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `item1, ..., itemX` ： 可选。向数组添加的新项目。<br /> | 返回新的长度 |
|  |  |  |
| <br /><br />**`unshift`** | **使用** |  |
|  | **向数组的开头添加一个或更多元素**<br />`array.unshift(item1,....itemX)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `item1, ..., itemX` ： 可选。向数组添加的新项目。<br /> | 返回新的长度 |
|  |  |  |
| <br /><br />**`copyWithin`** | **使用** |  |
|  | **在当前数组内部，将指定位置的成员复制到其他位置**<br />`array.copyWithin(target, start = 0, end = this.length)` |  |
|  | **参数** | **返回值** |
|  | 三个参数都是数值，如果不是，会自动转为数值<br />1. target（必需）：从该位置开始替换数据。如果为负值，表示倒数。<br />1. start（可选）：从该位置开始读取数据，默认为 0。如果为负值，表示倒数。<br />1. end（可选）：到该位置前停止读取数据，默认等于数组长度。使用负数可从数组结尾处规定位置。<br /> | 返回改变后的数组 |
|  |  |  |
| <br /><br />**`fill`** | **使用** |  |
|  | **使用给定值，填充一个数组**<br />`array.fill()`  |  |
|  | **参数** | **返回值** |
|  | <br />1. 第一个元素(必须): 要填充数组的值<br />1. 第二个元素(可选): 填充的开始位置,默认值为0<br />1. 第三个元素(可选)：填充的结束位置，默认是为`this.length`<br /> | 返回填充后的数组 |
|  |  |  |
| <br /><br />**`reverse`** | **使用** |  |
|  | **颠倒数组中元素的顺序**<br />`array.reverse()`  |  |
|  | **参数** | **返回值** |
|  | 无 | 返回倒序的数组 |
|  |  |  |
| <br /><br />**`sort`** | **使用** |  |
|  | **排序**<br />`array.sort()`  |  |
|  | **参数** | **返回值** |
|  | <br />1. 规定排序顺序的比较函数<br /> | 返回排序后数组 |

<a name="jla36"></a>
#### 不改变原数组
| **不改变原数组** |  |  |
| :---: | --- | --- |
| <br /><br />**`slice`** | **使用** |  |
|  | **浅拷贝数组的元素**<br />` array.slice(begin, end)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. **begin**(可选): 索引数值,接受负值，从该索引处开始提取原数组中的元素,默认值为0。<br />1. **end**(可选):索引数值(不包括),接受负值，在该索引处前结束提取原数组元素，默认值为数组末尾(包括最后一个元素)。<br /> | 返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象，且原数组不会被修改 |
|  |  |  |
| <br /><br />**`join`** | **使用** |  |
|  | **把数组中的所有元素通过指定的分隔符进行分隔放入一个字符串**<br />`array.join(str)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. **str **(可选) ：指定要使用的分隔符，默认使用逗号作为分隔符。<br /> | 返回生成的字符串 |
|  |  |  |
| <br /><br />**`toLocaleString`** | **使用** |  |
|  | **数组转字符串**<br />`array.toLocaleString() `  |  |
|  | **参数** | **返回值** |
|  | 无 | 返回一个表示数组元素的字符串 |
|  |  |  |
| <br /><br />**`toString`** | **使用** |  |
|  | **数组转化成字符（不推荐）**<br />`array.toString()`  |  |
|  | **参数** | **返回值** |
|  | 无 | 返回一个表示数组元素的字符串 |
|  |  |  |
| <br /><br />**`cancat`<br />** | **使用** |  |
|  | **方法用于合并两个或多个数组**<br />`array.cancat(array1,array2,......,arrayX)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. **arrayX **(必须)：该参数可以是具体的值，也可以是数组对象。可以是任意多个。<br /> | 返回一个新数组 |

<a name="gInIh"></a>
#### 遍历数组

| **遍历数组** |  |  |
| :---: | --- | --- |
| **`forEach`** | **使用** |  |
|  | **从头到尾遍历数组，为每个元素调用指定的函数**<br />`array.forEach(callback, thisArg[) `  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback`: 为数组中的每个元素执行的函数，接收三个参数：<br />  1. `currentValue` 数组中正在处理的当前元素；<br />  1. `index` 数组中正在处理的当前元素的索引；<br />  1. `array` 正在操作的数组；<br />2. `thisArg`:（可选）当执行回调函数时用作this的值（参考对象）。默认 `undefined`  <br /> | 返回 `undefined`  |
|  |  |  |
| <br /><br />**`map`** | **使用** |  |
|  | **创建一个新数组，其结果是该数组中的每个元素都调用一个callback函数后的返回结果**<br />`array.map(callback, thisArg[)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback`: 生成新数组元素的函数，使用三个参数这个函数跟forEach()的函数不同的是，传递给map()的函数应该有返回值。<br />  1. `currentValue` 数组中正在处理的当前元素；<br />  1. `index` 数组中正在处理的当前元素的索引；<br />  1. `array` 正在操作的数组；<br />2. `thisArg`:（可选）当执行回调函数时用作this的值（参考对象）。默认 `undefined`  <br /> | 一个新数组，每个元素都是回调函数的结果 |
|  |  |  |
| <br /><br />**`filter`** | **使用** |  |
|  | **按照一定规则筛选数组中元素**<br />`array.filter(callback, this.Arg[)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback`: 用来测试数组的每个元素的函数。返回true表示保留该元素（通过测试），false则不保留。它接受三个参数：<br />  1. `currentValue` 数组中正在处理的当前元素；<br />  1. `index` 数组中正在处理的当前元素的索引；<br />  1. `array` 正在操作的数组；<br />2. `thisArg`:（可选）当执行回调函数时用作this的值（参考对象）。默认 `undefined`  <br /> | 返回过滤后的新数组<br /> |
|  |  |  |
| <br /><br />**`every`** | **使用** |  |
|  | **测试数组的所有元素是否通过了制定函数的测试**<br />`array.every(callback, thisArg[)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback`: 用来测试数组的每个元素的函数。返回true表示保留该元素（通过测试），false则不保留。它接受三个参数：<br />  1. `currentValue` 数组中正在处理的当前元素；<br />  1. `index` 数组中正在处理的当前元素的索引；<br />  1. `array` 正在操作的数组；<br />2. `thisArg`:（可选）当执行回调函数时用作this的值（参考对象）。默认 `undefined`  <br /> | 一个布尔值，当所有的元素都符合条件才返回true，否则返回false |
|  |  |  |
| **`some`**<br /> | **使用** |  |
|  | **测试数组的某些元素是否通过了制定函数的测试。**<br />`array.some(callback, thisArg[)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback`: 用来测试数组的每个元素的函数。返回true表示保留该元素（通过测试），false则不保留。它接受三个参数：<br />  1. `currentValue` 数组中正在处理的当前元素；<br />  1. `index` 数组中正在处理的当前元素的索引；<br />  1. `array` 正在操作的数组；<br />2. `thisArg`:（可选）当执行回调函数时用作this的值（参考对象）。默认 `undefined`  <br /> | 只要数组中的任意一个元素在回调函数中返回的是真值，就返回true，否则为false |
|  |  |  |
| <br /><br />**`reduce `**<br />**`reducRight`** | **使用** |  |
|  | **这两个方法使用指定的函数将数组元素进行组合，生成单个值。**<br />`array.every(callback, initValue)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback` 执行数组中每个值的函数，包含四个参数：<br />  1. `accumulator` 累加器累加回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue（如下所示）。<br />  1. `currentValue` 数组中正在处理的元素。<br />  1. `currentIndex` (可选) 数组中正在处理的当前元素的索引。 如果提供了initialValue，则索引号为0，否则为索引为1。<br />  1. `array` (可选) 调用reduce的数组<br />2. `initialValue` (可选) 用作第一个调用 callback的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。<br /> | 函数累计处理的结果 |
|  |  |  |
| <br /><br />**`indexOf`** | **使用** |  |
|  | **查找数组是否存在某个元素**<br />`array.indexOf(searchElement, fromIndex=0)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. **searchElement**(必须):被查找的元素<br />1. **fromIndex**(可选):开始查找的位置(不能大于等于数组的长度，返回-1)，接受负值，默认值为0。<br /> | 返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1 |
|  |  |  |
| <br /><br />**`lastIndexOf`** | **使用** |  |
|  | **查找制定元素的在数组中的最后一个位置**<br />`array.lastIndexOf(searchElement, fromIndex=-1)`  |  |
|  | **参数** | **返回值** |
|  |  |  |
| <br /><br />**`includes`** | **使用** |  |
|  | **查找数组是否包含某个元素**<br />`array.includes(searchElement, fromIndex=0)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. **searchElement**(必须): 被查找的元素<br />1. **fromIndex**(可选): 默认值为0，参数表示搜索的起始位置，接受负值。正值超过数组长度，数组不会被搜索，返回false。负值绝对值超过长数组度，重置从0开始搜索。<br /> | 返回一个布尔值 |
|  |  |  |
| <br /><br />**`find`**<br />**`findIndex`** | **使用** |  |
|  | **搜索指定元素**<br />`array.find(callback, thisArg[)` <br />**搜索指定元素的索引**<br />`array.findIndex(callback, thisArg[)`  |  |
|  | **参数** | **返回值** |
|  | <br />1. `callback`: 用来测试数组的每个元素的函数。返回true表示保留该元素（通过测试），false则不保留。它接受三个参数：<br />  1. `currentValue` 数组中正在处理的当前元素；<br />  1. `index` 数组中正在处理的当前元素的索引；<br />  1. `array` 正在操作的数组；<br />2. `thisArg`:（可选）当执行回调函数时用作this的值（参考对象）。默认 `undefined`  <br /> | <br />1. find 方法，当某个元素通过 callback 的测试时，返回数组中的一个值，否则返回 undefined。<br />1. findIndex方法，返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。<br /> |


