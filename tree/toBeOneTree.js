var B = [
    { id: 1, name: 'i1' },
    { id: 2, name: 'i2', parentId: 1 },
    { id: 4, name: 'i4', parentId: 3 },
    { id: 3, name: 'i3', parentId: 2 },
    { id: 8, name: 'i8', parentId: 7 },
]

/**
* @param{object[]} o
* @returns{object[]}
*/

var create = function (o) {
    let rs = [];
    (function run(arr) {
        for (let j = 0; j < arr.length; j++) {
            let item = arr[j];
            if (!o[item.id]) {
                return;
            }
            run(item.children = o[item.id]);
            // 顶层没有parentId
            if (!item.parentId) {
                item.parentId = null;
                rs.push(item);
            }
        }

    })(o[0])
    return rs;
}

/**
 * 按照 parentId 分层
 * 
 * @param {object[]} a 
 * @returns {object} 
 * 
 */
var layer = function (a) {
    let aMap = {};

    for (let i = 0; i < a.length; i++) {
        let item = a[i];

        // 如果没有 parentId 则是最上层
        let key = item.parentId || 0;

        if (aMap.hasOwnProperty(key)) {
            aMap[key].push(item);
        } else {
            aMap[key] = [item];
        }
    }

    return aMap;
}

var toBeOneTree = function (a) {
    const aMap = layer(a)
    const rs = create(aMap)
    return rs
}

console.log(JSON.stringify(toBeOneTree(B)))
