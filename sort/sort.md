# 经典排序算法
___
## 插入排序

```js
insertSort(arr) {
    let len = arr.length,
      item,
      i,
      j;
    for (i = 0; i < len; i++) {
      item = arr[i];
      for (j = i-1; j>-1 && arr[j] > item; j--) {
        arr[j+1] = arr[j]
      }      
      arr[j+1] = item;
    }
  }
```
其中内层for 循环的判断条件`j>-1 && arr[j]<item`为关键：
* `j>-1`如果无序部分中一个元素跟比有序中到所有都小时，放到有序第一位（注意：第一个有序元素，也是这个条件放进去的）
* `arr[j]<item`有序中的每一个元素逐次与无序中的一个元素比较，如果大于无序那个元素，则其索引向后移一位；如果小于，则将无序中那个元素查到被比较元素后面；

## 