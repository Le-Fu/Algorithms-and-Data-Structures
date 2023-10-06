var treeData = [
    {
        id: '1',
        pid: null,
        label: '1',
        children: [
            {
                id: '1-1',
                pid: '1',
                label: '1-1',
                children: [
                    {
                        id: '1-1-1',
                        pid: '1-1',
                        label: '1-1-1',
                    }
                ]
            },
            {
                id: '1-2',
                pid: '1',
                label: '1-2'
            }
        ]
    },
    {
        id: '2',
        pid: null,
        label: '2',
        children: [
            {
                id: '2-1',
                pid: '2',
                label: '2-1'
            },
            {
                id: '2-2',
                pid: '2',
                label: '2-2'
            }
        ]
    }
];
var tableData = [
    { id: '1', pid: null, label: '1' },
    { id: '1-1', pid: '1', label: '1-1' },
    { id: '1-1-1', pid: '1-1', label: '1-1-1' },
    { id: '1-2', pid: '1', label: '1-2' },
    { id: '2', pid: null, label: '2' },
    { id: '2-1', pid: '2', label: '2-1' },
    { id: '2-2', pid: '2', label: '2-2' }
];
function tree2table(treeData) {
    var rs = [];
    function transform(arr) {
        if (!Array.isArray(arr)) {
            return;
        }
        for (var i_1 = 0; i_1 < arr.length; i_1++) {
            var arrItem = arr[i_1];
            rs.push(Object.assign({}, {
                id: arrItem.id,
                pid: arrItem.pid,
                label: arrItem.label
            }));
            transform(arrItem.children);
        }
    }
    transform(treeData);
    return rs;
}
function layer(tableData) {
    var layerDict = {};
    for (var _i = 0, tableData_1 = tableData; _i < tableData_1.length; _i++) {
        var treeNode = tableData_1[_i];
        var layerId = typeof treeNode.pid === 'string' ? treeNode.pid : '0';
        if (!Array.isArray(layerDict[layerId])) {
            layerDict[layerId] = [];
        }
        layerDict[layerId].push(treeNode);
    }
    return layerDict;
}
function table2tree(tableData) {
    var rs = [];
    var layerDict = layer(tableData);
    function transform(treeLayer) {
        if (!Array.isArray(treeLayer)) {
            return;
        }
        for (var _i = 0, treeLayer_1 = treeLayer; _i < treeLayer_1.length; _i++) {
            var treeNode = treeLayer_1[_i];
            if (!treeNode.pid) {
                rs.push(treeNode);
            }
            if (layerDict[treeNode.id]) {
                treeNode.children = layerDict[treeNode.id];
            }
            transform(layerDict[treeNode.id]);
        }
    }
    transform(layerDict['0']);
    return rs;
}
function observeTree(treeData, handler) {
    return new Proxy(treeData, handler);
}
var obTreeData = observeTree(treeData, {
    get: function () {
    }
});
//# sourceMappingURL=tree2table.js.map