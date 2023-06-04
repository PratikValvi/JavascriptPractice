/**
10. Counting the frequency of elements in an array
*/

let testArray = [1, 2, 3, 1, 2, 3, 4, 5, 4];

let frequencyObject = testArray.reduce((acc, currentNum) => {
    acc[currentNum] = (acc[currentNum] ? acc[currentNum] + 1 : 1);
    return acc
}, {})

console.log("Frequency of Numbers: ",frequencyObject);