export function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const front = arr.slice(0, mid);
    const end = arr.slice(mid);

    return merge(mergeSort(front), mergeSort(end));
}

function merge(front, end) {
    const result = [];

    while (front.length && end.length) {
        if (front[0] < end[0]) {
            result.push(front.shift());
        } else {
            result.push(end.shift());
        }
    }

    while (front.length) {
        result.push(front.shift());
    }

    while (end.length) {
        result.push(end.shift());
    }

    return result;
}
