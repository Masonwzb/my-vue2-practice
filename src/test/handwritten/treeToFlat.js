function getChild(arr, result) {
    for (const item of arr) {
        const { id, name, pid } = item;
        result.push({ id, name, pid });

        if (item.children.length !== 0) {
            getChild(item.children, result);
        }
    }
}

export function treeToFlat(arr) {
    let result = [];
    getChild(arr, result);
    return result;
}