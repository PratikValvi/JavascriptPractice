/**
11. Finding the intersection and union of two arrays
*/

let testArray1 = [1, 2, 3, 4];
let testArray2 = [3, 4, 5, 6];

//Intersection Array
let valuesObject = testArray2.reduce((acc, currentNum) => {
    acc[currentNum] = (acc[currentNum] ? acc[currentNum] + 1 : 1);
    return acc;
}, {});
let intersectionArray = testArray1.filter(num => valuesObject[num]);

console.log("Result Array: ",intersectionArray);

//Union Array
let unionArray = new Set(testArray1.concat(testArray2));
unionArray = [...unionArray];

console.log("Result Array: ",unionArray);