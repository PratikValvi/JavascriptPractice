/**
5. Searching for a specific element in an array
*/

let testArray1 = [3, 4, 5, 7, 10, 33, 55, 62, 79];

const findIndexOf = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while(left <= right) {
        let mid = Math.floor((left+right)/2);

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(findIndexOf(testArray1, 33))