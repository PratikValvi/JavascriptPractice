/**
21. Finding the common elements between two arrays
*/

let testArray1 = [1,5,9,2,4];
let testArray2 = [0,5,9,3,7];

let uniqueArray1 = [...new Set(testArray1)];
let uniqueArray2 = [...new Set(testArray2)];

const array2Values = uniqueArray2.reduce((acc, currentNum) => {
    acc[currentNum] = acc[currentNum] ? acc[currentNum] + 1 : 1;
    return acc;
}, {});

const commonElements = testArray1.filter(num => array2Values[num]);
console.log("Common elements: ",commonElements);