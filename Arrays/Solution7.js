/**
7. Subtracting one array from another
*/

let testArray1 = [1,2,3,4,5];
let testArray2 = [2,3];

let resultArray = testArray1.filter(num => testArray2.indexOf(num) === -1);
console.log("Result Array: ",resultArray);

let arrayValues = testArray2.reduce((acc, currentNum) => {
    acc[currentNum] = (acc[currentNum] ? acc[currentNum] + 1 : 1)
    return acc;
}, {})

let resultArray2 = testArray1.filter(num => !arrayValues[num]);
console.log("Result Array: ",resultArray2);