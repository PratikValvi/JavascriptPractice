const merge = (leftArray, rightArray) => {
    const resultArray = [];
    let leftArrayIndex = 0;
    let rightArrayIndex = 0;
    while(leftArrayIndex < leftArray.length && rightArrayIndex < rightArray.length) {
        if(leftArray[leftArrayIndex] < rightArray[rightArrayIndex]) {
            resultArray.push(leftArray[leftArrayIndex]);
            leftArrayIndex++;
        } else {
            resultArray.push(rightArray[rightArrayIndex]);
            rightArrayIndex++;
        }
    }
    while(leftArrayIndex < leftArray.length) {
        resultArray.push(leftArray[leftArrayIndex]);
        leftArrayIndex++;
    }
    while(rightArrayIndex < rightArray.length) {
        resultArray.push(rightArray[rightArrayIndex]);
        rightArrayIndex++;
    }
    return resultArray;
}

const mergeSort = (array) => {
    if (array.length > 1) {
        const mid = Math.floor(array.length / 2);
        let leftArray = array.slice(0, mid);
        let rightArray = array.slice(mid);
        return merge(mergeSort(leftArray), mergeSort(rightArray));
    } else {
        return array;
    }
}

const array = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(mergeSort(array));
