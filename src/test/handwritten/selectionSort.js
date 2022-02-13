export function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i += 1) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j += 1) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
}