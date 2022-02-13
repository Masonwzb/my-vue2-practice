// 方法一 循环遍历
function myChildren(obj, arr) {
    obj.children = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].pid === obj.id) {
            obj.children.push(arr[i]);
        }
    }
}

export function flatToTree(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        myChildren(arr[i], arr);
    }
    return arr.filter(node => node.pid === 0);
}

// 方法二 递归
function getChildren(arr, myChildren, pid) {
    for (const item of arr) {
        if (item.pid === pid) {
            const child = {...item, children: []};
            myChildren.push(child);
            getChildren(arr, child.children, item.id);
        }
    }
}

export function arrToTree(arr, pid) {
    const result = [];
    getChildren(arr, result, pid);
    return result;
}

// weakMap存储
export function mapArrToTree(arr) {
    const result = [];
    const mapArray = new Map();

    for (const item of arr) {
        let id = item.id;
        let pid = item.pid;

        if (!mapArray.get(id)) {
            mapArray.set(id, { children: [] });
        }

        mapArray.set(id, {
            ...item,
            children: mapArray.get(id)['children'],
        });

        if (pid === 0) {
            result.push(mapArray.get(id));
        } else {
            if (!mapArray.get(pid)) {
                mapArray.set(pid, { children: [] });
            }

            mapArray.get(pid).children.push(mapArray.get(id));
        }
    }

    return result;
}

// let arr = [
//     {id: 1, name: '部门1', pid: 0},
//     {id: 2, name: '部门2', pid: 1},
//     {id: 3, name: '部门3', pid: 1},
//     {id: 4, name: '部门4', pid: 3},
//     {id: 5, name: '部门5', pid: 4},
// ]
//
// let arrTree = [
//     {
//         "id": 1,
//         "name": "部门1",
//         "pid": 0,
//         "children": [
//             {
//                 "id": 2,
//                 "name": "部门2",
//                 "pid": 1,
//                 "children": [
//                     {
//                         "id": 5,
//                         "name": "部门2",
//                         "pid": 1,
//                         "children": []
//                     },
//                 ]
//             },
//             {
//                 "id": 3,
//                 "name": "部门3",
//                 "pid": 1,
//                 "children": [
//                     {
//                         "id": 6,
//                         "name": "部门2",
//                         "pid": 1,
//                         "children": []
//                     },
//                 ]
//             }
//         ]
//     }];


