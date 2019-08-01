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

/** 
 * @param{object[]} o
 * @returns{object[]}
*/

var parse = function (o) {
  let rs = [];
  (function run(o) {
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

const rs = parse(A)
console.log(rs)