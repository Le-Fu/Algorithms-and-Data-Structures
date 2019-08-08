var A = [
  {
    _id: 1,
    parent: null,
    children: [
      {
        _id: 2,
        parent: 1,
        children: [
          {
            _id: 4,
            parent: 2
          }
        ]
      },
      {
        _id: 3,
        parent: 1,
        children: [
          {
            _id: 5,
            parent: 3
          }
        ]
      }
    ]
  }
]

var B = [
  { _id: 1 },
  { _id: 2, parent: 1 },
  { _id: 3, parent: 1 },
  { _id: 4, parent: 2 },
  { _id: 5, parent: 3 },
]

/** 
 * A -> B
 * @param{object[]} o
 * @returns{object[]}
*/

var parse = function (o) {
  let rs = [];
  ; (function run(o) {
    if (Array.isArray(o) && o.length > 0) {
      let childrenArr = [];
      for (let i = 0; i < o.length; i++) {
        const obj = o[i]
        let rsObj = {}
        if (obj.parent) {
          rsObj.parent = obj.parent
        }
        if (obj._id) {
          rsObj._id = obj._id
          rs.push(rsObj)
        }
        if (obj.children && Array.isArray(obj.children)) {
          childrenArr = childrenArr.concat(obj.children)
        }
      }
      return run(childrenArr)
    }
    return
  })(o)
  return rs
}


/**
 * @param{object[]} o
 * @returns{object[]}
 */

var create = function (o) {
  let rs = [];
  (function run(arr) {
    for (let j = 0; j < arr.length; j++) {
      let item = arr[j];
      if (!o[item._id]) {
        return;
      }
      run(item.children = o[item._id]);
      // 顶层没有parent
      if (!item.parent) {
        item.parent = null;
        rs.push(item);
      }
    }

  })(o[0])
  return rs;
}

/**
 * 按照 parent 分层
 * 
 * @param {object[]} a 
 * @returns {object} 
 * 
 */
var layer = function (a) {
  let aMap = {};

  for (let i = 0; i < a.length; i++) {
    let item = a[i];

    // 如果没有 parent 则是最上层
    let key = item.parent || 0;

    if (aMap.hasOwnProperty(key)) {
      aMap[key].push(item);
    } else {
      aMap[key] = [item];
    }
  }

  return aMap;
}

var deParse = function (a) {
  const aMap = layer(a)
  const rs = create(aMap)
  return rs
}

console.log(JSON.stringify(deParse(B)))

var rs = [
  {
    "_id": 1,
    "parent": null,
    "children": [
      {
        "_id": 2,
        "parent": 1,
        "children": [
          {
            "_id": 4,
            "parent": 2
          }
        ]
      },
      {
        "_id": 3,
        "parent": 1,
        "children": [
          {
            "_id": 5,
            "parent": 3
          }
        ]
      }]
  }
]

