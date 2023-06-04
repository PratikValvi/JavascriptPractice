//Find index of element
let testArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const findIndexOf = (arr, target) => {
    let left = 0;
    let right = arr.length;
    while (left <= right) {
        let mid = Math.floor((left+right)/2);
        if (arr[mid] == target) {
            return mid;
        } else if(arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
}

const index = findIndexOf(testArray1, 10);
console.log("Index: ",index);
