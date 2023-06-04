/**
3. Sorting an array
*/

let testArray1 = [5, 0, 1, 7, 2, 8, 3, 1];

const merge = (leftArray, rightArray) => {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < leftArray.length && j < rightArray.length) {
        if(leftArray[i] < rightArray[j]) {
            result.push(leftArray[i]);
            i++;
        } else {
            result.push(rightArray[j]);
            j++;
        }
    }

    while(i < leftArray.length) {
        result.push(leftArray[i]);
        i++;
    }

    while(j < rightArray.length) {
        result.push(rightArray[j]);
        j++;
    }

    return result;
}

const mergeSort = (arr) => {
    if (arr.length > 1) {
        let mid = Math.floor(arr.length / 2);
        let leftArray = mergeSort(arr.slice(0, mid));
        let rightArray = mergeSort(arr.slice(mid));
        return merge(leftArray, rightArray);
    }

    return arr;
}

console.log(mergeSort(testArray1));