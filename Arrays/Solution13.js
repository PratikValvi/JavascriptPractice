/**
13. Removing a specific element from an array
*/

let testArray = [1, 2, 3, 4, 5];
let elementToRemove = 2;

const findIndexOf = (array, value) => {
    let left = 0;
    let right = array.length - 1;
    while(left <= right) {
        let mid = Math.floor((left+right)/2);
        if (array[mid] === value) {
            return mid;
        } else if (array[mid] < value) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

const index = findIndexOf(testArray, elementToRemove);
if (index > -1) {
    testArray.splice(index, 1);
}

console.log("Result Array: ",testArray);