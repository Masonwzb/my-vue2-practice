function bubbleSort(array) {
    for (let i = 0; i < array.length; i += 1) {
        let complete = true;
        for (let j = 0; j < array.length - 1 - i; j += 1) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                complete = false;
            }
        }
        if (complete) break;
    }
    console.log('final array --- ', array);
    return array;
}

bubbleSort([2, 6, 5]);