/**
1. Removing duplicates from an array
*/

let testArray1 = [-1, -9, 3, -4, 5, 1, 9, 7, 7, 2, -10, 0, 11, 3, 6, 2, 4, 8, 10];

const removeDuplicates = (arr) => {
    let set = new Set(arr);
    return [...set];
}

removeDuplicates(testArray1);