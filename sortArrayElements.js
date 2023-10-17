function bubbleSortDescending(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
const originalArray = [5, 2, 8, 1, 4];
const sortedArray = bubbleSortDescending(originalArray);
console.log("Original array:", originalArray);
console.log("Sorted array (descending):", sortedArray);
