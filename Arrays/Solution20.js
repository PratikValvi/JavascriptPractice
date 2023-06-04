/**
20. Finding the maximum subarray sum
*/

let testArray = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

const maxSubArray = (array) => {
    let maxSum = 0;
    let currentSum = 0;

    for (let i=0; i < array.length; i++) {
        currentSum = currentSum + array[i];
        if (currentSum < 0) {
            currentSum = 0;
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const maxSum = maxSubArray(testArray);
console.log("Max sum: ",maxSum);
