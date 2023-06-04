let testArray = [-1,-2,1,2,7,-9,5,2,3];

let maxSum = testArray[0];
let currentSum = testArray[0];

for (let i=1; i < testArray.length; i++) {
    currentSum = Math.max(currentSum + testArray[i], testArray[i]);
    maxSum = Math.max(currentSum, maxSum);
}

console.log(maxSum)