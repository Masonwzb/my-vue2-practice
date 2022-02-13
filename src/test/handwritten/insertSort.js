export function insertSort(arr) {
    for (let i = 1; i < arr.length; i += 1) {
        let target = i;
        for (let j = i - 1; j >= 0; j -= 1) {
            if (arr[target] < arr[j]) {
                [arr[j], arr[target]] = [arr[target], arr[j]];
                target = j;
            } else {
                break;
            }
        }
    }
}

