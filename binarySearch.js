
const findIndexOf = (array, target) => {
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (array[middleIndex] === target) {
            return middleIndex;
        } else if (array[middleIndex] > target) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}

const array = [2, 5, 8, 12, 16, 23, 38, 56, 72];
const target = 72;

console.log(findIndexOf(array, target)); // should return 4
