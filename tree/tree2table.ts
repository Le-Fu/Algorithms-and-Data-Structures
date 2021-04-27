interface ITreeNode {
    id: string;
    pid: string | null;
    label: string;
    children?: ITreeNode[];
}

let treeData: ITreeNode[] = [
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
]

let tableData: ITreeNode[] = [
    { id: '1', pid: null, label: '1' },
    { id: '1-1', pid: '1', label: '1-1' },
    { id: '1-1-1', pid: '1-1', label: '1-1-1' },
    { id: '1-2', pid: '1', label: '1-2' },
    { id: '2', pid: null, label: '2' },
    { id: '2-1', pid: '2', label: '2-1' },
    { id: '2-2', pid: '2', label: '2-2' }
]

function tree2table(treeData: ITreeNode[]) {
    let rs: ITreeNode[] = []

    function transform(arr: ITreeNode[]) {
        if (!Array.isArray(arr)) {
            return
        }

        for (let i = 0; i < arr.length; i++) {
            const arrItem = arr[i]
            rs.push(Object.assign({}, {
                id: arrItem.id,
                pid: arrItem.pid,
                label: arrItem.label
            }))
            transform(arrItem.children)
        }
    }

    transform(treeData)

    return rs
}

// const rs = tree2table(treeData)
// console.log(rs);
interface ILayerDict {
    [key: string]: ITreeNode[]
}

function layer(tableData: ITreeNode[]) {
    // 按照pid分层
    let layerDict: ILayerDict = {}

    for (const treeNode of tableData) {
        let layerId = typeof treeNode.pid === 'string' ? treeNode.pid : '0'
        if (!Array.isArray(layerDict[layerId])) {
            layerDict[layerId] = []
        }
        layerDict[layerId].push(treeNode)
    }

    return layerDict
}

function table2tree(tableData: ITreeNode[]) {
    let rs: ITreeNode[] = []

    const layerDict: ILayerDict = layer(tableData)

    function transform(treeLayer: ITreeNode[]) {
        if (!Array.isArray(treeLayer)) {
            return
        }
        for (let treeNode of treeLayer) {
            // pid为null的节点在最顶层的数组
            if (!treeNode.pid) {
                rs.push(treeNode)
            }
            if (layerDict[treeNode.id]) {
                treeNode.children = layerDict[treeNode.id]
            }
            transform(layerDict[treeNode.id])
        }
    }

    transform(layerDict['0'])

    return rs
}

// const rs = table2tree(tableData)
// console.log(JSON.stringify(rs))

function observeTree(treeData: ITreeNode[], handler?: any) {
    return new Proxy(treeData, handler)
}

let obTreeData = observeTree(treeData, {
    get(){
        
    }
})

// obTreeData