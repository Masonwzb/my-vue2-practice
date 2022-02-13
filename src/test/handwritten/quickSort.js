function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const target = arr[0];
    const left = [];
    const right = [];

    // i = 1排除掉target
    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < target) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(target, quickSort(right));
}

const qsArr = [2, 5, 3, 8, 6];
console.log('query --- ', quickSort(qsArr));