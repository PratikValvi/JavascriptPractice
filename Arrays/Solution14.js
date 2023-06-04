/**
14. Finding the missing element in an array
*/

let testArray = [-1, -9, 3, -4, 5, 1, 9, 7, 7, 2, -10, 0, 11, 3, 6, 2, 4, 8, 10];

const uniqueElements = [...new Set(testArray.filter(num => num > 0))]
console.log("Unique Elements: ", uniqueElements);

//Using Merge Sort
const merge = (left, right) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

const mergeSort = (array) => {
    if (array.length > 1) {
        let midIndex = Math.floor(array.length / 2);
        let leftArray = array.slice(0, midIndex);
        let rightArray = array.slice(midIndex);
        return merge(mergeSort(leftArray), mergeSort(rightArray))
    }
    return array;
}

const sortedArray = mergeSort(uniqueElements);
console.log("Sorted Elements: ", sortedArray);

const findMissingNumber = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== i + 1) {
            return i + 1;
        }
    }
    return array[array.length - 1] + 1;
}

const missingNumber = findMissingNumber(sortedArray);
console.log("Missing Number: ",missingNumber);