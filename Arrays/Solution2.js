/**
2. Reversing an array
*/

let testArray1 = [1,2,3,4,5,6,7,8,9,10];

const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

reverseArray(testArray1);
console.log(testArray1);