/** 
4. Finding the maximum and minimum value in an array
*/

let testArray1 = [5, 0, 1, 7, 2, 8, 3, 1, 4, 2, 1 ,0];

const findMaxMin = (arr) => {
    let max = arr[0];
    let min = arr[0];

    for(let i=0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    
    console.log("First Max: ",max);
    console.log("First Min: ",min);
}

const findSecondMaxMin = (arr) => {
    let uniqueElements = [...new Set(arr)];
    let sortedArr = uniqueElements.sort((a, b) => a - b);
    let secondMax = sortedArr[sortedArr.length - 2];
    let secondMin = sortedArr[1];

    console.log("Second Max: ",secondMax);
    console.log("Second Min: ",secondMin);
}

findMaxMin(testArray1);
findSecondMaxMin(testArray1);