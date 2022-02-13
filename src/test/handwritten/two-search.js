export function search(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let midIndex = 0;

    while (start <= end) {
        midIndex = Math.floor((start + end) / 2);
        let midValue = arr[midIndex];

        if (midValue === target) {
            return midIndex;
        } else if (midValue < target) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }

    return -1;
}